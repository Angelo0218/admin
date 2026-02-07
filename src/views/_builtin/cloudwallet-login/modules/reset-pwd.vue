<script setup lang="ts">
import { computed, inject, reactive } from 'vue';
import { useFormRules, useNaiveForm } from '@/hooks/common/form';
import { useCaptcha } from '@/hooks/business/captcha';
import { $t } from '@/locales';

defineOptions({
  name: 'ResetPwd'
});

const { formRef, validate } = useNaiveForm();
const { label, isCounting, loading, getCaptcha } = useCaptcha();

// In-page module switching via inject
const toggleModule = inject<(module: UnionKey.LoginModule) => void>('toggleLoginModule')!;

interface FormModel {
  phone: string;
  code: string;
  password: string;
  confirmPassword: string;
}

const model: FormModel = reactive({
  phone: '',
  code: '',
  password: '',
  confirmPassword: ''
});

type RuleRecord = Partial<Record<keyof FormModel, App.Global.FormRule[]>>;

const rules = computed<RuleRecord>(() => {
  const { formRules, createConfirmPwdRule } = useFormRules();

  return {
    phone: formRules.phone,
    password: formRules.pwd,
    confirmPassword: createConfirmPwdRule(model.password)
  };
});

async function handleSubmit() {
  await validate();
  // request to reset password
  window.$message?.success($t('cwLoginValidateSuccess'));
}
</script>

<template>
  <NForm ref="formRef" :model="model" :rules="rules" size="large" :show-label="false" @keyup.enter="handleSubmit">
    <NFormItem path="phone">
      <NInput v-model:value="model.phone" :placeholder="$t('cwLoginPhonePlaceholder')">
        <template #prefix>
          <icon-mdi-phone-outline class="mr-4px text-18px text-gray-400" />
        </template>
      </NInput>
    </NFormItem>

    <NFormItem path="code">
      <div class="w-full flex-y-center gap-16px">
        <NInput v-model:value="model.code" :placeholder="$t('cwLoginCodePlaceholder')">
          <template #prefix>
            <icon-mdi-shield-key-outline class="mr-4px text-18px text-gray-400" />
          </template>
        </NInput>
        <NButton size="large" :disabled="isCounting" :loading="loading" @click="getCaptcha(model.phone)">
          {{ label }}
        </NButton>
      </div>
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

    <NFormItem path="confirmPassword">
      <NInput
        v-model:value="model.confirmPassword"
        type="password"
        show-password-on="click"
        :placeholder="$t('cwLoginConfirmPasswordPlaceholder')"
      >
        <template #prefix>
          <icon-mdi-lock-outline class="mr-4px text-18px text-gray-400" />
        </template>
      </NInput>
    </NFormItem>

    <NSpace vertical :size="18" class="w-full">
      <NButton type="primary" size="large" round block @click="handleSubmit">
        {{ $t('cwLoginConfirm') }}
      </NButton>
      <NButton size="large" round block @click="toggleModule('pwd-login')">
        {{ $t('cwLoginBack') }}
      </NButton>
    </NSpace>
  </NForm>
</template>

<style scoped></style>
