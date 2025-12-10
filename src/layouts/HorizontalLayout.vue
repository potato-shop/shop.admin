<template>
  <div class="wrapper">

    <TopBar/>
    <NavBar/>

    <div class="page-content">

      <div class="page-container">
        <slot/>
      </div>

      <Footer/>
      <Customizer/>

    </div>

  </div>
</template>

<script setup lang="ts">
import TopBar from "@/layouts/partials/TopBar.vue";
import NavBar from "@/layouts/partials/NavBar.vue";
import Customizer from "@/layouts/partials/Customizer.vue";
import Footer from "@/layouts/partials/Footer.vue";
import {onMounted, onUnmounted} from "vue";
import {toggleDocumentAttribute} from "@/helpers/other";

onMounted(() => {
  toggleDocumentAttribute('data-layout', 'topnav')
})

onUnmounted(() => {
  toggleDocumentAttribute('data-layout', 'topnav', 'html', true)
})
</script>