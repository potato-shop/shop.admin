<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-4">You are Logged Out</h3>

    <div class="d-flex align-items-center gap-2 mb-3 text-start">
      <img :src="avatar1" alt="" class="avatar-xl rounded img-thumbnail">
      <div>
        <h3 class="fw-semibold text-dark">Hi ! Dhanoo K.</h3>
        <p class="mb-0">Thank you for using Ocen Admin</p>
      </div>
    </div>

    <div class="mb-3 text-start">
      <div class="bg-success-subtle p-2 rounded fw-medium mb-0" role="alert">
        <p class="mb-0 text-success">You have been successfully logged out of your account. To continue using our
          services, please log in again with your credentials. If you encounter any issues, feel free to contact our
          support team for assistance.</p>
      </div>
    </div>
    <div class="d-grid">
      <b-button variant="primary" type="submit">Support Center</b-button>
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