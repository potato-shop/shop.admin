<template>
  <header class="app-topbar">
    <div class="page-container topbar-menu">
      <div class="d-flex align-items-center gap-2"></div>

      <div class="d-flex align-items-center gap-2">
        <!-- Button Trigger Customizer -->
        <!-- <div class="topbar-item d-none d-sm-flex">
          <button class="topbar-link" type="button" v-b-toggle.customizer>
            <i class="ti ti-settings fs-22"></i>
          </button>
        </div> -->

        <!-- Light/Dark Mode Button -->
        <div class="topbar-item d-none d-sm-flex">
          <button class="topbar-link" id="light-dark-mode" type="button" @click="toggleTheme">
            <i class="ti ti-moon fs-22"></i>
          </button>
        </div>

        <!-- User Dropdown -->
        <div class="topbar-item nav-user">
          <DropDown>
            <a
              class="topbar-link dropdown-toggle drop-arrow-none px-2"
              data-bs-toggle="dropdown"
              data-bs-offset="0,19"
              type="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img :src="globalUserState.AvatarURL" width="32" class="rounded-circle me-lg-2 d-flex" alt="user-image" />
              <span class="d-lg-flex flex-column gap-1 d-none">
                <h5 class="my-0">{{ globalUserState.Name }}</h5>
              </span>
              <i class="ti ti-chevron-down d-none d-lg-block align-middle ms-2"></i>
            </a>
            <div class="dropdown-menu dropdown-menu-end">
              <div
                v-for="(item, idx) in profileMenuItems"
                :key="idx"
                class="dropdown-item"
                style="cursor: pointer"
                @click="item.action"
              >
                <i :class="item.icon" class="me-1 fs-17 align-middle"></i>
                <span class="align-middle">{{ item.label }}</span>
              </div>
            </div>
          </DropDown>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import DropDown from '@/components/DropDown.vue';
import { useLayoutStore } from '@/stores/layout';
import { useRouter } from 'vue-router';
import { globalUserState, setGlobalUserState } from '@/stores/globalState';

const { layout, setTheme, init } = useLayoutStore();
const router = useRouter();

const toggleTheme = () => {
  if (layout.theme === 'light') {
    return setTheme('dark');
  }
  setTheme('light');
};

onMounted(async () => {
  if (localStorage.getItem('token')) {
    try {
      await setGlobalUserState();
    } catch (err) {
      console.log('🚀 ~ err:', err);
      localStorage.removeItem('token');
      router.push({ name: 'auth.login' });
    }
  } else {
    router.push({ name: 'auth.login' });
  }
  init();
});

const profileMenuItems = [
  // {
  //   label: '我的帳戶',
  //   icon: 'ti ti-user-hexagon',
  // },
  // {
  //   label: '設定',
  //   icon: 'ti ti-settings',
  // },
  {
    label: '登出',
    icon: 'ti ti-logout',
    async action() {
      localStorage.removeItem('token');
      router.push({ name: 'auth.login' });
    },
  },
];
</script>
