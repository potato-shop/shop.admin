<template>
  <b-form-group :label="label" :label-class="labelClass" :label-for="id ?? 'form-input'" :class="groupClass">
    <b-form-input :type="type ?? 'text'" :id="id ?? 'form-input'" :placeholder="placeholder"
                  v-bind="$attrs"/>
  </b-form-group>
</template>

<script setup lang="ts">
import type {InputType} from "bootstrap-vue-next";

type PropsType = {
  label?: string
  labelClass?: string
  groupClass?: string
  id?: string
  type?: InputType
  placeholder?: string
}

defineProps<PropsType>()
</script>