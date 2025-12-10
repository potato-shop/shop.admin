<template>
  <ul class="navbar-nav">
    <DropDown is="li" v-for="item in allRoutes" :key="item.meta?.key" class="nav-item hover-dropdown">

      <template v-if="item.meta">
        <a class="nav-link dropdown-toggle drop-arrow-none" href="#" :id="item.path"
           data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
          <span class="menu-icon"><i :class="item.meta?.icon"></i></span>
          <span class="menu-text"> {{ item.meta.label }} </span>
          <div class="menu-arrow"></div>
        </a>

        <div class="dropdown-menu" :aria-labelledby="item.path">
          <template v-for="child in item.children">

            <!--two level nested-->
            <template v-if="child.children && child.meta">
              <DropDown class="hover-dropdown">
                <a class="dropdown-item dropdown-toggle drop-arrow-none"
                   :class="{'active':parent && child.meta.key === parent.meta?.key}" href="#" :id="child.path"
                   role="button"
                   data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{ child.meta.label }}
                  <div class="menu-arrow"></div>
                </a>
                <div class="dropdown-menu" :class="{'dropdown-menu-md':child.children.length > 12}"
                     :aria-labelledby="child.path">

                  <b-row v-if="child.children.length > 12">
                    <b-col cols="6" v-for="(items,idx) in chunkArray(child.children,2)">
                      <template v-for="(item,idx) in items">
                        <router-link v-if="item.meta" :to="{name:item.name}"
                                     :target="item.meta.target" :class="{'active':item.name===currentRoute}"
                                     class="dropdown-item">{{ item.meta.label }}
                        </router-link>
                      </template>
                    </b-col>
                  </b-row>

                  <template v-else>
                    <template v-for="(item,idx) in child.children">
                      <router-link v-if="item.meta" :to="{name:item.name}"
                                   :target="item.meta.target" :class="{'active':item.name===currentRoute}"
                                   class="dropdown-item">{{ item.meta.label }}
                      </router-link>
                    </template>
                  </template>
                </div>
              </DropDown>
            </template>

            <!--one level nested-->
            <template v-else>
              <router-link v-if="child.meta" :to="{name:child.name}"
                           :target="child.meta.target" :class="{'active':child.name===currentRoute}"
                           class="dropdown-item">
                {{ child.meta.label }}
              </router-link>
            </template>

          </template>
        </div>
      </template>
    </DropDown>
  </ul>
</template>

<script setup lang="ts">
import {allRoutes} from "@/router/routes";
import DropDown from "@/components/DropDown.vue";
import router from "@/router";
import type {RouteRecordRaw} from "vue-router";
import {getActiveItem, getParentOfActiveItem} from "@/layouts/partials/components/menu";
import {chunkArray} from "@/helpers/array";


const currentRoute = router.currentRoute.value.name

const active: RouteRecordRaw | null = getActiveItem(currentRoute)
let parent: RouteRecordRaw | null
if (active) {
  parent = getParentOfActiveItem(active.meta?.parentKey ?? '')
}
</script>