<template>
  <div class="pt-16">
    <Container class="min-h-screen py-16 sm:py-32">
      <Headline
        id="team"
        tag="h2"
        color="secondary"
        theme="pill"
        custom-class="scroll-mt-32 mb-16"
        >Team</Headline
      >
      <NuxtLink
        v-if="$route.params.team"
        title="Back to Team"
        class="float-right inline-flex content-center justify-center rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
        to="/team"
        ><Icon name="ph:arrow-left"
      /></NuxtLink>
      <NuxtPage> </NuxtPage>
    </Container>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add any additional styles here */
</style>
