<template>
  <cropper-canvas background>
    <cropper-image :src="imageSrc" ref="imageRef" rotatable scalable skewable translatable></cropper-image>
    <cropper-shade hidden></cropper-shade>
    <cropper-handle action="select" plain></cropper-handle>
    <cropper-selection ref="selectionRef" initial-coverage="0.5" movable resizable>
      <cropper-grid role="grid" covered></cropper-grid>
      <cropper-crosshair centered></cropper-crosshair>
      <cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.35)"></cropper-handle>
      <cropper-handle action="n-resize"></cropper-handle>
      <cropper-handle action="e-resize"></cropper-handle>
      <cropper-handle action="s-resize"></cropper-handle>
      <cropper-handle action="w-resize"></cropper-handle>
      <cropper-handle action="ne-resize"></cropper-handle>
      <cropper-handle action="nw-resize"></cropper-handle>
      <cropper-handle action="se-resize"></cropper-handle>
      <cropper-handle action="sw-resize"></cropper-handle>
    </cropper-selection>
  </cropper-canvas>
  <button @click="getCropData">取得資料</button>
</template>

<script setup>
import { ref } from 'vue';
import 'cropperjs';

const imageSrc = ref(
  'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200'
);
const selectionRef = ref(null);

const getCropData = () => {
  if (selectionRef.value) {
    console.log('🚀 ~ getCropData ~ selectionRef.value):', selectionRef.value);
    console.log({
      x: selectionRef.value.x,
      y: selectionRef.value.y,
      width: selectionRef.value.width,
      height: selectionRef.value.height,
    });
  }
};
</script>
