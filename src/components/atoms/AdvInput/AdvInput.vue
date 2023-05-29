<script setup lang="ts">
import { PropType } from "vue";

type InputTypes = "text" | "email" | "password" | "radio" | undefined;

defineProps({
  type: {
    type: String as PropType<InputTypes>,
    required: false,
    default: "text",
    validator: (value: string) => {
      const _inputType = ["text", "email", "password", "radio"];
      return _inputType.includes(value);
    },
  },
  id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
  },
  classes: {
    type: String,
    required: false,
  },
  modelValue: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :placeholder="placeholder"
    :class="classes"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
