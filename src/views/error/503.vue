<template>
  <AuthLayout>
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Ooop's ! </h3>
      <img :src="err503" alt="error 503 img" height="230" class="mb-2">
      <h3 class="fw-bold mt-3 text-primary lh-base">Services Unavailable !</h3>
      <h5 class="fw-bold mt-2 text-dark lh-base">This Site Is Temporarily Down For Improvements.</h5>
      <p class="text-muted fs-12 mb-3">The server is currently unable to handle the request due to temporary overload or
        maintenance. Please try again later.</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err503 from "@/assets/images/error/error-503.png"
</script>