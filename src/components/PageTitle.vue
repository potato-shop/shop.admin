<template>

  <div v-if="title" class="page-title-head d-flex align-items-sm-center flex-sm-row flex-column gap-2">
    <div class="flex-grow-1">
      <h4 class="fs-18 fw-semibold mb-0">{{ title }}</h4>
    </div>

    <div class="text-end">
      <ol class="breadcrumb m-0 py-0">
        <li class="breadcrumb-item">
          <router-link to="/">{{ appName }}</router-link>
        </li>
        <li v-if="subtitle" class="breadcrumb-item">
          <router-link v-if="subtitleRoute" :to="{name:subtitleRoute.name}">{{ subtitle }}</router-link>
          <template v-else>{{ subtitle }}</template>
        </li>
        <li class="breadcrumb-item active">{{ title }}</li>
      </ol>
    </div>
  </div>

  <div v-else class="page-title-head d-flex align-items-sm-center flex-sm-row flex-column">
    <h4 class="fs-18 fw-semibold mb-0">Welcome</h4>
  </div>

</template>

<script setup lang="ts">
import {appName} from '@/helpers';
import type {RouteType} from "@/types";

type PropsType = {
  title?: string
  subtitle?: string
  subtitleRoute?: RouteType
}

defineProps<PropsType>()
</script>