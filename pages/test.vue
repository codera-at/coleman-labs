<template>
  <Container class="min-h-screen">
    <div class="mt-32 grid grid-cols-2">
      <div class="bg-red text-white">LEFT</div>
      <div>
        <ul>
          <li v-for="fruit in fruits">
            {{ fruit.title }}
          </li>
        </ul>
      </div>
    </div>
    <div><NuxtPage></NuxtPage></div>
  </Container>
</template>

<script setup>
const { data: fruits } = await useAsyncData("test", () =>
  queryCollection("test").all(),
);
</script>

<style lang="scss" scoped></style>
