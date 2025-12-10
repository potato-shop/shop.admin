<template>
  <ul class="side-nav">
    <template v-for="(item, idx) in allRoutes || []" :key="idx">
      <template v-if="item.meta && item.meta?.show != false">
        <template v-if="item.children">
          <template v-for="(child, idx) in item.children" :key="idx">
            <!--two level nested-->

            <!--one level nested-->
            <li class="side-nav-item" :class="{ active: child.name === currentRoute }">
              <router-link
                v-if="child.meta"
                :to="{ name: child.name }"
                :target="child.meta.target"
                class="side-nav-link"
                :class="{ active: child.name === currentRoute }"
              >
                <span class="menu-icon"><i :class="child.meta.icon"></i></span>
                <span class="menu-text"> {{ child.meta.label }} </span>

                <b-badge
                  :variant="null"
                  pill
                  v-if="child.meta.badge"
                  class="rounded float-end"
                  :class="`bg-${child.meta.badge.variant}`"
                >
                {{ child.meta.badge.text }}
                </b-badge>

                <b-badge
                  :variant="null"
                  v-if="child.meta.tooltip"
                  class="p-0 menu-alert fs-16"
                  :class="`text-${child.meta.tooltip.variant}`"
                >
                  <i :class="child.meta.tooltip.icon" v-b-tooltip="child.meta.tooltip.text"></i>
                </b-badge>
              </router-link>
            </li>
          </template>
        </template>
      </template>
    </template>
  </ul>
</template>

<script setup lang="ts">
import { allRoutes } from '@/router/routes';
import router from '@/router';
import { getActiveItem, getParentOfActiveItem } from '@/layouts/partials/components/menu';
import type { RouteRecordRaw } from 'vue-router';

const currentRoute = router.currentRoute.value.name;

const active: RouteRecordRaw | null = getActiveItem(currentRoute);
let parent: RouteRecordRaw | null;
if (active) {
  parent = getParentOfActiveItem(active.meta?.parentKey ?? '');
}
</script>
