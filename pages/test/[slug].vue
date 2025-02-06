<template>
  <div>
    <ContentRenderer :value="apples" class="space-y-2" />
  </div>
</template>

<script setup>
const { data: apples } = await useAsyncData("test-apples", () =>
  queryCollection("test").path("/test/apples").first(),
);
</script>

<style lang="scss" scoped></style>
