<template>
  <AuthLayout>
    <div class="mx-auto text-center">
      <h3 class="fw-semibold mb-2">Ooop's ! </h3>
      <img :src="err501" alt="error 501 img" height="230" class="my-3">
      <h3 class="fw-bold mt-3 text-primary lh-base">Not Implemented</h3>
      <h5 class="fw-bold mt-2 text-dark lh-base">Server Can Not Fulfill The Request.</h5>
      <p class="text-muted fs-12 mb-3">The server does not recognize the request method or lacks the ability to fulfill
        the request. This often means that the server cannot support.</p>
      <router-link to="/" class="btn btn-primary">Back To Home <i class="ti ti-home ms-1"></i></router-link>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import err501 from "@/assets/images/error/error-501.png"
</script>