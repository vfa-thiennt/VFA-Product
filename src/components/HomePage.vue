<template>
  <div
    class="flex h-full w-full flex-col items-center justify-center bg-neutral-500"
  >
    <h1>home page</h1>
    <div class="text-red-500">{{ store.count }}</div>
    <button
      class="w-6 bg-slate-500 p-3 text-green-300"
      @click="store.increment()"
    >
      encrease counter
    </button>
  </div>
</template>

<script setup lang="ts">
import { counterStore } from "../Provider/AppProvider";

const store = counterStore();
</script>

<style scoped></style>
