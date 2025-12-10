<template>
  <b-form-group :label="label" :label-class="labelClass" :label-for="id ?? 'form-textarea'" :class="groupClass">
    <b-form-textarea :id="id ?? 'form-textarea'" :placeholder="placeholder"
                     v-bind="$attrs"/>
  </b-form-group>
</template>

<script setup lang="ts">

type PropsType = {
  label?: string
  labelClass?: string
  id?: string
  placeholder?: string
  groupClass?: string
}

defineProps<PropsType>()
</script>