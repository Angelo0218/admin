<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import type { Component } from 'vue';
import { getPaletteColorByNumber } from '@sa/color';
import { useAppStore } from '@/store/modules/app';
import { useThemeStore } from '@/store/modules/theme';
import { $t } from '@/locales';
import PwdLogin from './modules/pwd-login.vue';
import CodeLogin from './modules/code-login.vue';
import Register from './modules/register.vue';
import ResetPwd from './modules/reset-pwd.vue';
import BindWechat from './modules/bind-wechat.vue';

interface Props {
  /** The login module */
  module?: UnionKey.LoginModule;
}

const props = defineProps<Props>();

const appStore = useAppStore();
const themeStore = useThemeStore();

// --- In-page module switching (replaces router-based toggleLoginModule) ---
const activeModuleKey = ref<UnionKey.LoginModule>(props.module || 'pwd-login');

function toggleModule(module: UnionKey.LoginModule) {
  activeModuleKey.value = module;
}
provide('toggleLoginModule', toggleModule);

// --- Module map ---
interface LoginModule {
  label: App.I18n.I18nKey;
  component: Component;
}

const moduleMap: Record<UnionKey.LoginModule, LoginModule> = {
  'pwd-login': { label: 'cwLoginModulePwd', component: PwdLogin },
  'code-login': { label: 'cwLoginModuleCode', component: CodeLogin },
  register: { label: 'cwLoginModuleRegister', component: Register },
  'reset-pwd': { label: 'cwLoginModuleResetPwd', component: ResetPwd },
  'bind-wechat': { label: 'cwLoginModuleBindWechat', component: BindWechat }
};

const activeModule = computed(() => moduleMap[activeModuleKey.value]);

// --- Theme colors for left branding panel ---
const gradientEnd = computed(() => getPaletteColorByNumber(themeStore.themeColor, themeStore.darkMode ? 800 : 400));
</script>

<template>
  <div class="relative size-full flex overflow-hidden bg-white dark:bg-[#101014]">
    <!-- ====== Left Branding Panel ====== -->
    <div
      class="brand-panel relative hidden w-[42%] flex-col items-center justify-center overflow-hidden md:flex"
      :style="{
        background: `linear-gradient(135deg, ${themeStore.themeColor} 0%, ${gradientEnd} 100%)`
      }"
    >
      <!-- Decorative circles -->
      <div class="absolute size-80 rounded-full bg-white/10 -left-24 -top-24" />
      <div class="absolute size-64 rounded-full bg-white/8 -bottom-16 -right-16" />
      <div class="absolute right-1/4 top-1/4 size-32 rounded-full bg-white/5" />
      <div class="absolute bottom-1/3 left-[16%] size-20 rounded-full bg-white/5" />

      <!-- Branding content -->
      <div class="relative z-10 flex flex-col items-center px-12 text-center">
        <SystemLogo class="size-80px" />
        <h1 class="mt-8 text-36px text-white font-bold leading-tight">
          {{ $t('cwLoginSystemTitle') }}
        </h1>
        <p class="mt-4 max-w-280px text-16px text-white/60 leading-relaxed">
          {{ $t('cwLoginOrRegister') }}
        </p>
      </div>
    </div>

    <!-- ====== Right Form Panel ====== -->
    <div class="relative flex flex-col flex-1">
      <!-- Top bar -->
      <div class="flex items-center justify-end px-8 py-5">
        <!-- Mobile logo (visible only below md) -->
        <div class="mr-auto flex items-center gap-3 md:hidden">
          <SystemLogo class="size-36px" />
          <span class="text-18px text-primary font-bold">{{ $t('cwLoginSystemTitle') }}</span>
        </div>

        <!-- Theme & language switches -->
        <div class="flex items-center gap-4">
          <ThemeSchemaSwitch
            :theme-schema="themeStore.themeScheme"
            :show-tooltip="false"
            class="text-20px"
            @switch="themeStore.toggleThemeScheme"
          />
          <LangSwitch
            v-if="themeStore.header.multilingual.visible"
            :lang="appStore.locale"
            :lang-options="appStore.localeOptions"
            :show-tooltip="false"
            @change-lang="appStore.changeLocale"
          />
        </div>
      </div>

      <!-- Centered form area -->
      <div class="flex flex-1 items-center justify-center px-6 pb-12">
        <div class="max-w-420px w-full">
          <!-- Module title -->
          <h2 class="text-28px font-bold">
            {{ $t(activeModule.label) }}
          </h2>

          <!-- Active form with animated transition -->
          <div class="mt-8">
            <Transition :name="themeStore.page.animateMode" mode="out-in" appear>
              <component :is="activeModule.component" />
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
