<script setup lang="ts">
import { PropType } from "vue";

type ButtonTypes = "button" | "submit" | "reset" | undefined;

defineProps({
  type: {
    type: String as PropType<ButtonTypes>,
    required: false,
    default: "button",
    validator: (value: string) => {
      const _buttonTypes = ["button", "submit", "reset"];
      return _buttonTypes.includes(value);
    },
  },
});
</script>

<template>
  <button class="addBtn" :type="type">
    <slot />
  </button>
</template>
