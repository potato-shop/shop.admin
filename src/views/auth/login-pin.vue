<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">Login With Pin</h3>

    <p class="text-muted mb-4">We sent you a code , please enter it below to verify your number <span
        class="text-primary fw-medium">+ (94) 883-630-646</span></p>

    <div class="d-flex justify-content-center gap-2 mb-3">
      <a href="#!" class="btn btn-soft-danger avatar-lg"><i class="ti ti-brand-google-filled fs-24"></i></a>
      <a href="#!" class="btn btn-soft-success avatar-lg"><i class="ti ti-brand-apple fs-24"></i></a>
      <a href="#!" class="btn btn-soft-primary avatar-lg"><i class="ti ti-brand-facebook fs-24"></i></a>
      <a href="#!" class="btn btn-soft-info avatar-lg"><i class="ti ti-brand-linkedin fs-24"></i></a>
    </div>

    <p class="fs-13 fw-semibold">Or</p>

    <form class="text-start mb-3">
      <label class="form-label" for="code">Enter 6 Digit Code</label>
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
    </form>

    <p class="text-danger fs-14 mb-4">Back To
      <router-link to="/" class="fw-semibold text-dark ms-1">Home !</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>