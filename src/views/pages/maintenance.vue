<template>
  <AuthLayout>
    <div>
      <h3 class="fw-semibold text-dark">Ooop's ! </h3>
    </div>

    <img :src="maintenance" alt="" class="img-fluid mt-3" height="320">

    <h5 class="fw-bold my-3 fs-20 text-dark lh-base">We are Under Scheduled Maintenance</h5>

    <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import maintenance from "@/assets/images/png/maintenance.png"
</script>