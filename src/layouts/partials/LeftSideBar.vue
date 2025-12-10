<template>
  <div class="sidenav-menu">
    <LogoBox />

    <simplebar>
      <VerticalMenu />
      <div class="clearfix"></div>
    </simplebar>
  </div>
</template>

<script setup lang="ts">
import simplebar from 'simplebar-vue';
import LogoBox from '@/components/LogoBox.vue';
import VerticalMenu from '@/layouts/partials/components/VerticalMenu.vue';
import { toggleDocumentAttribute } from '@/helpers/other';
import { useLayoutStore } from '@/stores/layout';
import { onMounted } from 'vue';

const { layout, setLeftSideBarSize } = useLayoutStore();

const toggleMenuSize = () => {
  if (layout.leftSideBarSize === 'sm-hover-active') return setLeftSideBarSize('sm-hover');
  return setLeftSideBarSize('sm-hover-active');
};

const resize = () => {
  if (window.innerWidth < 770) {
    setLeftSideBarSize('full');
  } else if (window.innerWidth < 1140) {
    setLeftSideBarSize('condensed');
  } else {
    setLeftSideBarSize(
      layout.leftSideBarSize === 'condensed' || layout.leftSideBarSize === 'full'
        ? 'sm-hover-active'
        : layout.leftSideBarSize
    );
  }
};

onMounted(() => {
  resize();
  window.addEventListener('resize', () => {
    resize();
  });
});

const closeLeftSideBar = () => {
  toggleDocumentAttribute('class', '');
  const backdrop = document.getElementById('backdrop');
  if (backdrop) {
    document.body.removeChild(backdrop);
  }
};
</script>
