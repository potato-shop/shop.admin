<template>
  <AuthLayout show-footer footer-class="mt-3">
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Oooh ! </h3>

      <img :src="err403" alt="error 403 img" height="250">

      <h2 class="fw-bold mt-3 text-primary lh-base">Access Denied !</h2>
      <h4 class="fw-bold mt-2 text-dark lh-base">You Don't Have Permission To Access On This Server</h4>
      <p class="text-muted fs-12 mb-3">You are not authorized to view this page. If you think this is a mistake, please
        contact support for assistance.</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err403 from "@/assets/images/error/error-403.png"
</script>