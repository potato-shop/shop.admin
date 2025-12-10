<template>
  <VerticalLayout>
    <PageTitle title="404 Error" subtitle="Pages">
      <b-row class="justify-content-center">
        <b-col lg="4">
          <div class="text-center">
            <img :src="err404" height="230" alt="File not found Image">

            <h4 class="text-uppercase text-danger mt-3">Page Not Found</h4>
            <p class="text-muted mt-3">It's looking like you may have taken a wrong turn. Don't worry... it
              happens to the best of us. Here's a
              little tip that might help you get back on track.</p>

            <router-link to="/" class="btn btn-info mt-3"><i class="ti ti-home me-1"></i> Return Home</router-link>
          </div>
        </b-col>
      </b-row>
    </PageTitle>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import err404 from "@/assets/images/error/error-404.png"
</script>
