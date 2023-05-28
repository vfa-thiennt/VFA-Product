<template>
  <ul class="flex">
    <RouterLink to="/">
      <li class="cursor-pointer p-3">Home</li>
    </RouterLink>
    <RouterLink to="/notfound">
      <li class="cursor-pointer p-3">Not Found page</li>
    </RouterLink>
  </ul>
  <RouterView />
</template>

<script setup lang="ts"></script>

<style scoped></style>
