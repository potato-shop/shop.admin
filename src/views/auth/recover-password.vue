<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">Reset Your Password</h3>

    <p class="text-muted mb-4">Please enter your email address to request a password reset.</p>

    <div class="d-flex justify-content-center gap-2 mb-3">
      <a href="#!" class="btn btn-soft-danger avatar-lg"><i class="ti ti-brand-google-filled fs-24"></i></a>
      <a href="#!" class="btn btn-soft-success avatar-lg"><i class="ti ti-brand-apple fs-24"></i></a>
      <a href="#!" class="btn btn-soft-primary avatar-lg"><i class="ti ti-brand-facebook fs-24"></i></a>
      <a href="#!" class="btn btn-soft-info avatar-lg"><i class="ti ti-brand-linkedin fs-24"></i></a>
    </div>

    <p class="fs-13 fw-semibold">Or Sign Up With Email</p>

    <b-form class="text-start mb-3">
      <b-form-group label="Email" class="mb-3">
        <b-form-input type="email" placeholder="Enter your email"/>
      </b-form-group>
      <div class="d-grid">
        <b-button variant="primary" type="submit">Reset Password</b-button>
      </div>
    </b-form>

    <p class="text-danger fs-14 mb-4">Back To
      <router-link :to="{name:'auth.login'}" class="fw-semibold text-dark ms-1">Login !</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>