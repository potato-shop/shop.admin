<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">Welcome to Ocen Admin</h3>

    <p class="text-muted mb-4">Enter your name , email address and password to access account.</p>

    <div class="d-flex justify-content-center gap-2 mb-3">
      <a href="#!" class="btn btn-soft-danger avatar-lg"><i class="ti ti-brand-google-filled fs-24"></i></a>
      <a href="#!" class="btn btn-soft-success avatar-lg"><i class="ti ti-brand-apple fs-24"></i></a>
      <a href="#!" class="btn btn-soft-primary avatar-lg"><i class="ti ti-brand-facebook fs-24"></i></a>
      <a href="#!" class="btn btn-soft-info avatar-lg"><i class="ti ti-brand-linkedin fs-24"></i></a>
    </div>

    <p class="fs-13 fw-semibold">Or Sign Up With Email</p>

    <b-form class="text-start mb-3">

      <b-form-group label="Your Name" class="mb-3">
        <b-form-input type="text" placeholder="Enter your name"/>
      </b-form-group>

      <b-form-group label="Email" class="mb-3">
        <b-form-input type="email" placeholder="Enter your email"/>
      </b-form-group>

      <b-form-group label="Password" class="mb-3">
        <b-form-input type="password" placeholder="Enter your password"/>
      </b-form-group>

      <div class="d-flex justify-content-between mb-3">
        <b-form-checkbox>I agree to all Terms & Condition</b-form-checkbox>
      </div>

      <div class="d-grid">
        <b-button variant="primary" type="submit">Sign Up</b-button>
      </div>
    </b-form>

    <p class="text-danger fs-14 mb-4">Already have an account?
      <router-link :to="{name:'auth.login'}"
                   class="fw-semibold text-dark ms-1">Login !
      </router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
</script>