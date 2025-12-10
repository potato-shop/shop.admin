<template>
  <b-form
    action="/"
    method="post"
    class="dropzone"
    data-plugin="dropzone"
    data-previews-container="#file-previews"
    data-upload-preview-template="#uploadPreviewTemplate"
  >
    <div class="fallback">
      <input
        type="file"
        name="file"
        :multiple="multiple ?? true"
        @change="handleInputChange"
        v-bind="$attrs"
      />
    </div>
    <div class="dz-message needsclick">
      <i class="h1 ti ti-cloud-upload mb-4"></i>
      <h4>拖曳或點擊此處上傳檔案</h4>
    </div>
  </b-form>

  <ul class="list-unstyled mb-0" id="dropzone-preview">
    <li class="card mt-1 mb-0 shadow-none border" id="dropzone-preview-list">
      <div class="p-2">
        <div class="row align-items-center">
          <div class="col-auto">
            <img data-dz-thumbnail src="#" class="avatar-sm rounded bg-light" alt="" />
          </div>
          <div class="col ps-0">
            <a href="javascript:void(0);" class="text-muted fw-bold" data-dz-name></a>
            <p class="mb-0" data-dz-size></p>
          </div>
          <div class="col-auto">
            <a href="" class="btn btn-link btn-lg text-muted" data-dz-remove>
              <i class="ti ti-x"></i>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Dropzone from 'dropzone';

type PropsType = {
  modelValue?: File | File[] | null;
  multiple?: boolean;
};

defineProps<PropsType>();

const emit = defineEmits(['update:modelValue']);

const dropzoneInstance = ref<Dropzone | null>(null);

const updateFileList = () => {
  if (dropzoneInstance.value) {
    emit('update:modelValue', dropzoneInstance.value.files);
  }
};

const handleInputChange = (e: Event) => {
  const files = (e.target as HTMLInputElement).files;
  if (files) {
    emit('update:modelValue', Array.from(files));
  }
};

onMounted(() => {
  const previewNode = document.querySelector('#dropzone-preview-list') as HTMLElement;
  if (previewNode) {
    const previewTemplate = previewNode.parentElement?.innerHTML;
    previewNode.parentNode?.removeChild(previewNode);

    dropzoneInstance.value = new Dropzone('.dropzone', {
      url: 'https://httpbin.org/post',
      method: 'post',
      previewTemplate: previewTemplate || '',
      previewsContainer: '#dropzone-preview',
      autoProcessQueue: false,
    });

    dropzoneInstance.value.on('addedfile', updateFileList);
    dropzoneInstance.value.on('removedfile', updateFileList);
  } else {
    console.warn('Preview element not found');
  }
});
</script>
