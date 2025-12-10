<template>
  <AuthLayout show-footer footer-class="mt-3">
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Hold Up ! </h3>

      <img :src="err401" alt="" class="mt-3 mb-2" height="230">

      <h2 class="fw-bold mt-3 text-primary lh-base">Error Unauthorized ! </h2>

      <h4 class="fw-bold mt-2 text-dark lh-base">Access To Allowed Only For Registered User</h4>

      <p class="text-muted fs-15 mb-3">Sorry, but you are not authorized to view this page.</p>

      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err401 from "@/assets/images/error/error-401.png"
</script>