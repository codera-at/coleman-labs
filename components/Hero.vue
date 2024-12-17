<template>
  <div class="relative -z-10 min-h-screen">
    <NuxtParticles
      class="absolute left-0 top-0 -z-10 w-full h-full opacity-50"
      id="tsparticles"
      url="/particle-options.json"
      @load="onLoad"
    ></NuxtParticles>
    <Container class="overflow-auto min-h-screen flex content-center flex-wrap px-8">
      <div class="mt-16">
        <span class="font-serif text-5xl font-medium">Stanford University</span>
        <h1 class="text-9xl font-bold uppercase">The Neural Interaction Lab</h1>
      </div>
      <p class="ml-32 mt-16 max-w-96 text-2xl">
        The Neural Interaction Lab is home to a multidisciplinary team of
        researchers studying a variety of disciplines.
      </p>
    </Container>
  </div>
</template>

<script setup lang="ts">
import type { Container } from "@tsparticles/engine";

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause();
  setTimeout(() => container.play(), 2000);
};
</script>

<style lang="scss" scoped></style>
