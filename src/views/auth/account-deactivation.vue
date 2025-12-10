<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-4">Deactivation Account</h3>

    <div class="d-flex align-items-center gap-2 mb-3 text-start">
      <img :src="avatar1" alt="" class="avatar-xl rounded img-thumbnail">
      <div>
        <h3 class="fw-semibold text-dark">Hi ! Dhanoo K.</h3>
        <p class="mb-0">Temporarily Deactivate your account instead of Deleting?</p>
      </div>
    </div>

    <div class="mb-3 text-start">
      <div class="alert alert-danger fw-medium mb-0" role="alert">
        Your profile will be temporarily hidden until you activate it again by logging back in
      </div>
    </div>
    <div class="d-grid">
      <b-button variant="primary" type="submit">Deactivate Account</b-button>
    </div>
    <p class="text-danger fs-14 my-3">Back to
      <router-link :to="{name:'auth.login'}" class="text-dark fw-semibold ms-1">Login !</router-link>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import avatar1 from "@/assets/images/users/avatar-1.jpg"
</script>