<template>
  <b-offcanvas placement="end" id="customizer"
               header-class="d-flex align-items-center gap-2 px-3 py-3 border-bottom border-dashed"
               body-class="p-0 h-100">

    <template v-slot:header>
      <h5 class="flex-grow-1 mb-0">Theme Settings</h5>
      <button type="button" class="btn-close" v-b-toggle.customizer></button>
    </template>

    <template v-slot:default>
      <simplebar>
        <div class="p-3 border-bottom border-dashed">
          <h5 class="mb-3 fs-16 fw-bold">Color Scheme</h5>

          <b-row>
            <b-col cols="4">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.theme" @change="setTheme('light')"
                       name="theme" id="layout-color-light" value="light"/>
                <label class="form-check-label p-3 w-100 d-flex justify-content-center align-items-center"
                       for="layout-color-light">
                  <Icon icon="solar:sun-bold-duotone" class="fs-32 text-muted"/>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Light</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.theme" @change="setTheme('dark')"
                       name="theme" id="layout-color-dark" value="dark"/>
                <label class="form-check-label p-3 w-100 d-flex justify-content-center align-items-center"
                       for="layout-color-dark">
                  <Icon icon="solar:cloud-sun-2-bold-duotone" class="fs-32 text-muted"/>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Dark</h5>
            </b-col>
          </b-row>
        </div>

        <div class="p-3 border-bottom border-dashed">
          <h5 class="mb-3 fs-16 fw-bold">Layout Mode</h5>

          <b-row>
            <b-col cols="4">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.layoutMode"
                       @change="setLayoutMode('fluid')" name="layout-mode" id="layout-mode-fluid"
                       value="fluid">
                <label class="form-check-label p-0 avatar-xl w-100" for="layout-mode-fluid">
                  <div>
                                <span class="d-flex h-100">
                                    <span class="flex-shrink-0">
                                        <span class="bg-light d-flex h-100 border-end flex-column p-1 px-2">
                                            <span class="d-block p-1 bg-dark-subtle rounded mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        </span>
                                    </span>
                                    <span class="flex-grow-1">
                                        <span class="d-flex h-100 flex-column rounded-2">
                                            <span class="bg-light d-block p-1"></span>
                                        </span>
                                    </span>
                                </span>
                  </div>

                  <div>
                                <span class="d-flex h-100 flex-column">
                                    <span
                                        class="bg-light d-flex p-1 align-items-center border-bottom border-secondary border-opacity-25">
                                        <span class="d-block p-1 bg-dark-subtle rounded me-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                    </span>
                                    <span class="bg-light d-block p-1"></span>
                                </span>
                  </div>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Fluid</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.layoutMode"
                       @change="setLayoutMode('detached')" name="layout-mode" id="data-layout-detached"
                       value="detached">
                <label class="form-check-label p-0 avatar-xl w-100" for="data-layout-detached">
                            <span class="d-flex h-100 flex-column">
                                <span class="bg-light d-flex p-1 align-items-center border-bottom ">
                                    <span class="d-block p-1 bg-dark-subtle rounded me-1"></span>
                                    <span
                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-auto"></span>
                                    <span
                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                    <span
                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                    <span
                                        class="d-block border border-3 border-secondary border-opacity-25 rounded ms-1"></span>
                                </span>
                                <span class="d-flex h-100 p-1 px-2">
                                    <span class="flex-shrink-0">
                                        <span class="bg-light d-flex h-100 flex-column p-1 px-2">
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                            <span
                                                class="d-block border border-3 border-secondary border-opacity-25 rounded w-100"></span>
                                        </span>
                                    </span>
                                </span>
                                <span class="bg-light d-block p-1 mt-auto px-2"></span>
                            </span>

                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Detached</h5>
            </b-col>
          </b-row>
        </div>

        <div class="p-3 border-bottom border-dashed">
          <h5 class="mb-3 fs-16 fw-bold">Topbar Color</h5>

          <b-row>
            <b-col cols="3">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.topBarColor"
                       @change="setTopBarColor('light')" name="topbar-color" id="topbar-color-light"
                       value="light">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="topbar-color-light">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-white"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Light</h5>
            </b-col>

            <b-col cols="3">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.topBarColor"
                       @change="setTopBarColor('dark')" name="topbar-color" id="topbar-color-dark"
                       value="dark">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="topbar-color-dark">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-dark"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Dark</h5>
            </b-col>

            <b-col cols="3">
              <div class="form-check card-radio">
                <input class="form-check-input" type="radio" v-model="layout.topBarColor"
                       @change="setTopBarColor('brand')" name="topbar-color" id="topbar-color-brand"
                       value="brand">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="topbar-color-brand">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-primary"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Gradient</h5>
            </b-col>
          </b-row>
        </div>

        <div class="p-3 border-bottom border-dashed">
          <h5 class="mb-3 fs-16 fw-bold">Menu Color</h5>

          <b-row>
            <b-col cols="3">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarColor"
                       @change="setLeftSideBarColor('light')" name="menu-color" id="sidenav-color-light"
                       value="light">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="sidenav-color-light">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-white"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Light</h5>
            </b-col>

            <b-col cols="3" style="--ct-dark-rgb: 64,73,84;">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarColor"
                       @change="setLeftSideBarColor('dark')" name="menu-color" id="sidenav-color-dark"
                       value="dark">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="sidenav-color-dark">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-dark"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Dark</h5>
            </b-col>
            <b-col cols="3">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarColor"
                       @change="setLeftSideBarColor('brand')" name="menu-color" id="sidenav-color-brand"
                       value="brand">
                <label class="form-check-label p-0 avatar-lg w-100 bg-light" for="sidenav-color-brand">
                            <span class="d-flex align-items-center justify-content-center h-100">
                                <span class="p-2 d-inline-flex shadow rounded-circle bg-primary"></span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Brand</h5>
            </b-col>
          </b-row>
        </div>

        <div class="p-3 .border-bottom .border-dashed">
          <h5 class="mb-3 fs-16 fw-bold">Sidebar Size</h5>

          <b-row>
            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('default')" name="sidenav-size" id="sidenav-size-default"
                       value="default">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-default">
                            <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1 px-2">
                                        <span class="d-block p-1 bg-dark-subtle rounded mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    </span>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Default</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('compact')" name="sidenav-size" id="sidenav-size-compact"
                       value="compact">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-compact">
                            <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end  flex-column p-1">
                                        <span class="d-block p-1 bg-dark-subtle rounded mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    </span>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Compact</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('condensed')" name="sidenav-size" id="sidenav-size-small"
                       value="condensed">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-small">
                            <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end flex-column" style="padding: 2px;">
                                        <span class="d-block p-1 bg-dark-subtle rounded mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    </span>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Condensed</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('sm-hover')" name="sidenav-size" id="sidenav-size-small-hover"
                       value="sm-hover">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-small-hover">
                            <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                    <span class="bg-light d-flex h-100 border-end flex-column" style="padding: 2px;">
                                        <span class="d-block p-1 bg-dark-subtle rounded mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                        <span
                                            class="d-block border border-3 border-secondary border-opacity-25 rounded w-100 mb-1"></span>
                                    </span>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Hover View</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('full')" name="sidenav-size" id="sidenav-size-full"
                       value="full">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-full">
                            <span class="d-flex h-100">
                                <span class="flex-shrink-0">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="d-block p-1 bg-dark-subtle mb-1"></span>
                                    </span>
                                </span>
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Full Layout</h5>
            </b-col>

            <b-col cols="4">
              <div class="form-check sidebar-setting card-radio">
                <input class="form-check-input" type="radio" v-model="layout.leftSideBarSize"
                       @change="setLeftSideBarSize('fullscreen')" name="sidenav-size" id="sidenav-size-fullscreen"
                       value="fullscreen">
                <label class="form-check-label p-0 avatar-xl w-100" for="sidenav-size-fullscreen">
                            <span class="d-flex h-100">
                                <span class="flex-grow-1">
                                    <span class="d-flex h-100 flex-column">
                                        <span class="bg-light d-block p-1"></span>
                                    </span>
                                </span>
                            </span>
                </label>
              </div>
              <h5 class="fs-14 text-center text-muted mt-2">Hidden</h5>
            </b-col>
          </b-row>
        </div>

        <div class="p-3 border-bottom border-dashed d-none">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="fs-16 fw-bold mb-0">Container Width</h5>

            <div class="btn-group radio" role="group">
              <input type="radio" class="btn-check" name="data-container-position" id="container-width-fixed"
                     value="fixed">
              <label class="btn btn-sm btn-soft-primary w-sm" for="container-width-fixed">Full</label>

              <input type="radio" class="btn-check" name="data-container-position" id="container-width-scrollable"
                     value="scrollable">
              <label class="btn btn-sm btn-soft-primary w-sm ms-0" for="container-width-scrollable">Boxed</label>
            </div>
          </div>
        </div>

        <div class="p-3 border-bottom border-dashed d-none">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="fs-16 fw-bold mb-0">Layout Position</h5>

            <div class="btn-group radio" role="group">
              <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-fixed"
                     value="fixed">
              <label class="btn btn-sm btn-soft-primary w-sm" for="layout-position-fixed">Fixed</label>

              <input type="radio" class="btn-check" name="data-layout-position" id="layout-position-scrollable"
                     value="scrollable">
              <label class="btn btn-sm btn-soft-primary w-sm ms-0" for="layout-position-scrollable">Scrollable</label>
            </div>
          </div>
        </div>
      </simplebar>
    </template>

    <template v-slot:footer>
      <div class="d-flex align-items-center gap-2 px-3 py-2 border-top border-dashed">
        <b-button type="button" class="w-50 btn-soft-danger" @click="reset">Reset</b-button>
        <a :href="buyLink" target="_blank" class="btn w-50 btn-soft-info">Buy Now</a>
      </div>
    </template>

  </b-offcanvas>
</template>

<script setup lang="ts">
import simplebar from "simplebar-vue"
import {buyLink} from "@/helpers";
import {useLayoutStore} from "@/stores/layout"
import {Icon} from "@iconify/vue";

const useLayout = useLayoutStore()

const {
  layout,
  setTheme,
  setLayoutMode,
  setTopBarColor,
  setLeftSideBarColor,
  setLeftSideBarSize,
  reset,
} = useLayout

const show = true
</script>