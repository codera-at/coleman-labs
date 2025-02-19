<template>
  <div class="relative -z-10 min-h-screen">
    <NuxtParticles
      class="absolute left-0 top-0 -z-10 h-full w-full opacity-50"
      id="tsparticles"
      url="/particle-options.json"
      @load="onLoad"
    ></NuxtParticles>
    <Container
      class="flex min-h-screen flex-wrap content-center overflow-auto px-8"
    >
      <div class="mt-16 flex flex-col gap-8 sm:flex-row">
        <div>
          <Headline family="serif" size="lg" weight="medium"
            >Stanford University</Headline
          >
          <Headline size="xl" weight="bold"
            >The Neural Interaction Lab</Headline
          >
        </div>
        <div class="flex justify-center">
          <img
            src="/img/logo/Coleman_Labs_Logo_Signe_Light_Numbers.svg"
            alt="Neural Interaction Lab signe with numbers and heart"
            class="h-32 sm:h-full"
          />
        </div>
      </div>
      <p class="mt-16 max-w-96 text-xl sm:ml-32 sm:text-2xl">
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

<style>
#tsparticles {
  pointer-events: auto;
}
</style>
