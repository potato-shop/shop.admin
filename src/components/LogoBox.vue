<template>
  <router-link to="/apps/products" :class="customClass ?? 'logo'">
    <template v-if="authBrand">
      <img :src="logoDark" alt="dark logo" :height="height" class="logo-dark" />
      <img :src="logoLight" alt="logo light" :height="height" class="logo-light" />
    </template>

    <template v-else>
      <span class="logo-light">
        <span class="logo-lg"><img style="height: 40px" :src="logoLight" alt="logo" /></span>
        <span class="logo-sm"><img :src="logoSm" alt="small logo" /></span>
      </span>
      <span class="logo-dark">
        <span class="logo-lg"><img :src="logoDark" alt="dark logo" /></span>
        <span class="logo-sm"><img :src="logoSm" alt="small logo" /></span>
      </span>
    </template>
  </router-link>
</template>

<script setup lang="ts">
import logoSm from '@/assets/images/logo-sm.png';
import logoLight from '@/assets/images/logo.svg';
import logoDark from '@/assets/images/logo-dark.png';

type PropsType = {
  customClass?: string;
  height?: number;
  authBrand?: boolean;
};

defineProps<PropsType>();
</script>
