<template>
  <AuthLayout show-footer>
    <div class="d-flex align-items-center gap-2 mb-4 text-start">
      <img :src="avatar1" alt="" class="avatar-xl rounded img-thumbnail">
      <div>
        <h3 class="fw-semibold text-dark">Hi ! Dhanoo K.</h3>
        <p class="mb-0">Please input your password to access the screen. </p>
      </div>
    </div>
    <div class="d-flex justify-content-center gap-2 mb-3">
      <a href="#!" class="btn btn-soft-danger avatar-lg"><i class="ti ti-brand-google-filled fs-24"></i></a>
      <a href="#!" class="btn btn-soft-success avatar-lg"><i class="ti ti-brand-apple fs-24"></i></a>
      <a href="#!" class="btn btn-soft-primary avatar-lg"><i class="ti ti-brand-facebook fs-24"></i></a>
      <a href="#!" class="btn btn-soft-info avatar-lg"><i class="ti ti-brand-linkedin fs-24"></i></a>
    </div>
    <p class="fs-13 fw-semibold">Or</p>

    <b-form class="text-start mb-3">
      <b-form-group label="Enter Password" class="mb-3">
        <b-form-input type="password" id="lock-password" placeholder="Password"/>
      </b-form-group>
      <div class="mb-2 d-grid">
        <b-button variant="primary" type="submit">Access To Screen</b-button>
      </div>
    </b-form>
    <p class="text-danger fs-14 mb-4">Back To
      <router-link :to="{name:'auth.login'}" class="fw-semibold text-dark ms-1">Login !</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import avatar1 from "@/assets/images/users/avatar-1.jpg"
</script>