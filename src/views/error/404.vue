<template>
  <AuthLayout show-footer footer-class="mt-3">
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Ooop's ! </h3>
      <img :src="err404" alt="error 403 img" height="180" class="my-3">
      <h2 class="fw-bold mt-3 text-primary lh-base">Page Not Found !</h2>
      <h4 class="fw-bold mt-2 text-dark lh-base">Something's Missing...! This Page Is Not Available</h4>
      <p class="text-muted fs-12 mb-3">sorry, we can't find the page you're looking for We suggest you to go
        homepage</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err404 from "@/assets/images/error/error-404.png"
</script>