<template>
  <b-form-group :label="label" :label-class="labelClass" :label-for="id ?? 'form-select'" :class="groupClass">
    <b-form-select :id="id ?? 'form-select'" :placeholder="placeholder"
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