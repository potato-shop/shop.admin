<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">Set up your two-factor authentication.</h3>

    <div class="bg-body-secondary border border-dashed p-3 rounded my-3 text-center">
      <img :src="qrCode" alt="" class="" height="130">
      <p class="mt-3 mb-0">Scan this code with your Google authenticator app to continue this process.</p>
    </div>

    <b-form class="text-start mb-3">
      <label class="form-label" for="code">Verification Code</label>
      <div class="d-flex gap-2 mt-1 mb-3">
        <input type="text" maxlength="1" class="form-control text-center">
        <input type="text" maxlength="1" class="form-control text-center">
        <input type="text" maxlength="1" class="form-control text-center">
        <input type="text" maxlength="1" class="form-control text-center">
        <input type="text" maxlength="1" class="form-control text-center">
        <input type="text" maxlength="1" class="form-control text-center">
      </div>
      <div class="mb-3 d-grid">
        <b-button variant="primary" type="submit">Continue</b-button>
      </div>
      <p class="mb-0 text-center">Don't received code yet? <a href="#!"
                                                              class="link-primary fw-semibold text-decoration-underline">Send
        Again</a></p>
    </b-form>

    <p class="text-danger fs-14 mb-4">Back To
      <router-link to="/" class="fw-semibold text-dark ms-1">Home !</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import qrCode from "@/assets/images/png/qr-code.png"
</script>