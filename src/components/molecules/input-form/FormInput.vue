<template>
  <div class="flex w-52 justify-between">
    <AdvText tag="h1">Hello </AdvText>
    <AdvInput placeholder="input here" type="text" />
  </div>
</template>

<script setup lang="ts">
import AdvInput from "@/components/atoms/AdvInput/AdvInput.vue";
import AdvText from "@/components/atoms/AdvText/AdvText.vue";
</script>

<style scoped></style>
