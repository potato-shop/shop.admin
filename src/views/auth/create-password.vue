<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">Create New Password</h3>

    <p class="text-muted mb-2">Please create your new password.</p>
    <p class="mb-4">Need password suggestion ? <a href="#!" class="link-dark fw-semibold text-decoration-underline">Suggestion</a>
    </p>

    <div class="d-flex justify-content-center gap-2 mb-3">
      <a href="#!" class="btn btn-soft-danger avatar-lg"><i class="ti ti-brand-google-filled fs-24"></i></a>
      <a href="#!" class="btn btn-soft-success avatar-lg"><i class="ti ti-brand-apple fs-24"></i></a>
      <a href="#!" class="btn btn-soft-primary avatar-lg"><i class="ti ti-brand-facebook fs-24"></i></a>
      <a href="#!" class="btn btn-soft-info avatar-lg"><i class="ti ti-brand-linkedin fs-24"></i></a>
    </div>

    <p class="fs-13 fw-semibold">Or</p>

    <b-form class="text-start mb-3">

      <div class="mb-3">
        <label class="form-label" for="new-password">Create New Password <small class="text-primary ms-1">Must be at
          least 8 characters</small></label>
        <b-form-input type="password" id="new-password" placeholder="New Password"/>
      </div>

      <b-form-group label="Reenter New Password" class="mb-3">
        <b-form-input type="password" placeholder="Reenter password"/>
      </b-form-group>

      <div class="mb-2 d-grid">
        <b-button variant="primary" type="submit">Create New Password</b-button>
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