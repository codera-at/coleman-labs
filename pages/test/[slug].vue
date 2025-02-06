<template>
  <div><ContentRenderer :value="apples" /></div>
</template>

<script setup>
const { data: apples } = await useAsyncData("test-apples", () =>
  queryCollection("test").path("/test/apples").first(),
);

</script>

<style lang="scss" scoped></style>
