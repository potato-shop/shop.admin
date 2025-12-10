<template>
  <footer class="footer">
    <div class="page-container">
      <b-row class="row">
        <b-col md="6" class="text-center text-md-start">
          {{ currentYear }}
          © {{ appName }} - By <span class="fw-bold text-decoration-underline text-uppercase text-reset fs-12">{{
            author
          }}</span>
        </b-col>
        <b-col md="6">
          <div class="text-md-end footer-links d-none d-md-block">
            <router-link v-for="item in footerItems" :key="item.label" :to="{name:item.route?.name}">{{
                item.label
              }}
            </router-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </footer>
</template>

<script setup lang="ts">
import {author, currentYear, appName} from "@/helpers";
import {footerItems} from "@/layouts/partials/data";
</script>