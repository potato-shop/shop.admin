<template>
  <AuthLayout show-footer footer-class="mt-3">
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Oooh No ! </h3>
      <img :src="err408" alt="error 408 img" height="230">
      <h3 class="fw-bold mt-3 text-primary lh-base">Error 408 Request Time Out</h3>
      <h5 class="fw-bold mt-2 text-dark lh-base">The Server Timed Out Waiting For The Client's Request.</h5>
      <p class="text-muted fs-12 mb-3">The server did not receive a complete request message within the time that it was
        prepared to wait.</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err408 from "@/assets/images/error/error-408.png"
</script>