<template>
  <VerticalLayout>
    <PageTitle title="Hover" subtitle="Layouts"/>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import {useLayoutStore} from "@/stores/layout";
import {onMounted, onUnmounted} from "vue";

const {setLeftSideBarSize} = useLayoutStore()

onMounted(() => {
  setLeftSideBarSize('sm-hover')
})

onUnmounted(() => {
  setLeftSideBarSize('default')
})
</script>