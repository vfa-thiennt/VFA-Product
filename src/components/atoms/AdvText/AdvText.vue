<script setup lang="ts">
import { computed } from "@vue/reactivity";

const props = defineProps({
  tag: {
    type: String,
    required: true,
    default: "p",
    validator: (value: string) => {
      const _tagTypes = ["h1", "h2", "h3", "p", "label"];
      return _tagTypes.includes(value);
    },
  },
  for: {
    type: String,
    required: false,
  },
});

const getForProp = computed(() => (props.for === "label" ? props.for : null));
</script>

<template>
  <component :is="tag" :for="getForProp">
    <slot />
  </component>
</template>
