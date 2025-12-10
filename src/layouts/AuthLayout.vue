<template>
  <div class="auth-bg d-flex min-vh-100 justify-content-center align-items-center">
    <b-row class="g-0 justify-content-center w-100 m-xxl-5 px-xxl-4 m-3">
      <b-col xl="4" lg="5" md="6">
        <b-card no-body class="overflow-hidden text-center h-100 p-xxl-4 p-3 mb-0">
          <slot />

          <AuthFooter v-if="showFooter" :class="footerClass" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import AuthFooter from '@/layouts/partials/AuthFooter.vue';

const body = document.body;

defineProps({
  showFooter: {
    type: Boolean,
    default: false,
  },
  footerClass: {
    type: String,
  },
});

onMounted(() => {
  if (body) body.classList.add('h-100');
});

onUnmounted(() => {
  if (body) body.classList.remove('h-100');
});
</script>
