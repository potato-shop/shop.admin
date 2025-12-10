<template>
  <AuthLayout show-footer footer-class="mt-3">
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Ooop's ! </h3>
      <img :src="err502" alt="error 502 img" height="280">
      <h3 class="fw-bold mt-3 text-primary lh-base">Service Overloaded !</h3>
      <h5 class="fw-bold mt-2 text-dark lh-base">Server Error. Please Refresh Or Try Again Later.</h5>
      <p class="text-muted fs-12 mb-3">The server received an invalid response from the upstream server. Please try
        again later.</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
    <a target=""></a>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err502 from "@/assets/images/error/error-502.png"
</script>
