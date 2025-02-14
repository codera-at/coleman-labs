<template>
  <li v-editable="blok">
    <NuxtLink :to="blok.link">
      <span class="text-lg font-bold">{{ blok.title }}</span></NuxtLink
    >
    <p>{{ blok.authors }}</p>
    <p>{{ blok.journal }}</p>
    <p>{{ blok.year }}</p>
  </li>
</template>

<script setup>
defineProps({ blok: Object });
</script>

<style lang="scss" scoped></style>
