<template>
  <cropper-canvas background style="height: 300px">
    <cropper-image :src="imageSrc" ref="imageRef" rotatable scalable translatable crossorigin="anonymous"></cropper-image>
    <cropper-handle action="select" plain></cropper-handle>
    <cropper-selection
      :initialAspectRatio="1"
      :aspectRatio="1"
      :initialCoverage="1"
      ref="selectionRef"
      initial-coverage="0.5"
      movable
      resizable
    >
      <cropper-grid role="grid" covered></cropper-grid>
      <cropper-handle action="move" theme-color="rgba(255, 255, 255, 0.35)"></cropper-handle>
      <cropper-handle action="ne-resize"></cropper-handle>
      <cropper-handle action="nw-resize"></cropper-handle>
      <cropper-handle action="se-resize"></cropper-handle>
      <cropper-handle action="sw-resize"></cropper-handle>
    </cropper-selection>
  </cropper-canvas>
  <button @click="getCropData">取得資料</button>
  <!-- 這裡 -->
  <img :src="croppedImageSrc" alt="裁切後的圖片" v-if="croppedImageSrc" style="max-width: 300px; margin-top: 20px;">
</template>

<script setup>
import { ref } from 'vue';
import 'cropperjs';

const imageSrc = ref(
  'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200'
);
const selectionRef = ref(null);
const croppedImageSrc = ref('');

const getCropData = async () => {
  if (selectionRef.value) {
    console.log('🚀 ~ getCropData ~ selectionRef.value):', selectionRef.value);
    console.log({
      x: selectionRef.value.x,
      y: selectionRef.value.y,
      width: selectionRef.value.width,
      height: selectionRef.value.height,
    });

    // 獲取裁切後的圖片
    const canvas = await selectionRef.value.$toCanvas();
    canvas.toBlob((blob) => {
      if (blob) {
        croppedImageSrc.value = URL.createObjectURL(blob);
      }
    });
  }
};
</script>
