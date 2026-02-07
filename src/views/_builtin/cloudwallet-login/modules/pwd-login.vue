<script setup lang="ts">
import { computed, inject, reactive } from 'vue';
import { useAuthStore } from '@/store/modules/auth';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';

defineOptions({
  name: 'PwdLogin'
});

const authStore = useAuthStore();
const { formRef, validate } = useNaiveForm();

// In-page module switching via inject (provided by parent index.vue)
const toggleModule = inject<(module: UnionKey.LoginModule) => void>('toggleLoginModule')!;

interface FormModel {
  userName: string;
  password: string;
}

const model: FormModel = reactive({
  userName: 'Soybean',
  password: '123456'
});

const rules = computed<Record<keyof FormModel, App.Global.FormRule[]>>(() => {
  const { formRules } = useFormRules();

  return {
    userName: formRules.userName,
    password: formRules.pwd
  };
});

async function handleSubmit() {
  await validate();
  await authStore.login(model.userName, model.password);
}

type AccountKey = 'super' | 'admin' | 'user';

interface Account {
  key: AccountKey;
  label: string;
  userName: string;
  password: string;
}

const accounts = computed<Account[]>(() => [
  {
    key: 'super',
    label: $t('cwLoginSuperAdmin'),
    userName: 'Super',
    password: '123456'
  },
  {
    key: 'admin',
    label: $t('cwLoginAdmin'),
    userName: 'Admin',
    password: '123456'
  },
  {
    key: 'user',
    label: $t('cwLoginUser'),
    userName: 'User',
    password: '123456'
  }
]);

async function handleAccountLogin(account: Account) {
  await authStore.login(account.userName, account.password);
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="userName">
      <NInput v-model:value="model.userName" :placeholder="$t('cwLoginUserNamePlaceholder')">
        <template #prefix>
          <icon-mdi-account-outline class="mr-4px text-18px text-gray-400" />
        </template>
      </NInput>
    </NFormItem>

    <NFormItem path="password">
      <NInput
        v-model:value="model.password"
        type="password"
        show-password-on="click"
        :placeholder="$t('cwLoginPasswordPlaceholder')"
      >
        <template #prefix>
          <icon-mdi-lock-outline class="mr-4px text-18px text-gray-400" />
        </template>
      </NInput>
    </NFormItem>

    <NSpace vertical :size="20">
      <!-- Remember me + Forgot password -->
      <div class="flex-y-center justify-between">
        <NCheckbox>{{ $t('cwLoginRememberMe') }}</NCheckbox>
        <NButton quaternary type="primary" size="small" @click="toggleModule('reset-pwd')">
          {{ $t('cwLoginForgetPassword') }}
        </NButton>
      </div>

      <!-- Login button -->
      <NButton type="primary" size="large" round block :loading="authStore.loginLoading" @click="handleSubmit">
        {{ $t('cwLoginConfirm') }}
      </NButton>

      <!-- Switch to code-login / register -->
      <div class="flex-y-center justify-between gap-12px">
        <NButton class="flex-1" block @click="toggleModule('code-login')">
          {{ $t('cwLoginModuleCode') }}
        </NButton>
        <NButton class="flex-1" block @click="toggleModule('register')">
          {{ $t('cwLoginModuleRegister') }}
        </NButton>
      </div>

      <!-- Other account login -->
      <NDivider class="text-14px text-#666 !m-0">
        {{ $t('cwLoginOtherAccountLogin') }}
      </NDivider>
      <div class="flex-center gap-12px">
        <NButton v-for="item in accounts" :key="item.key" type="primary" @click="handleAccountLogin(item)">
          {{ item.label }}
        </NButton>
      </div>
    </NSpace>
  </NForm>
</template>

<style scoped></style>
