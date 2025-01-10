<template>
  <div class="pt-16">
    <Container class="py-16 sm:py-32">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div class="space-y-8 sm:space-y-16">
          <Headline
            id="team"
            tag="h2"
            color="secondary"
            theme="pill"
            custom-class="sm:ml-16 scroll-mt-32"
            >Team</Headline
          >
          <p class="max-w-sm">
            The Neural Interaction Lab focuses on the interactions between
            multiple neural systems using an intersection of disciplines.
          </p>
          <NuxtImg
            class="rounded-3xl border border-red sm:ml-16"
            src="/img/coleman-labs-team-01.webp"
            width="500"
            height="333"
          />
        </div>
        <div class="space-y-8 sm:space-y-16">
          <NuxtImg
            class="rounded-3xl border border-red"
            src="/img/coleman-labs-team-02.webp"
            width="700"
            height="483"
          />
          <div class="flex gap-4 sm:gap-8">
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{
                'bg-red text-white': $route.params.team === 'current-members',
              }"
              to="/team/current-members"
              >Current Members</NuxtLink
            >
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{ 'bg-red text-white': $route.params.team === 'alumni' }"
              to="/team/alumni"
              >Alumni</NuxtLink
            >
          </div>
        </div>
      </div>
    </Container>
    <Container class="min-h-screen">
      <NuxtPage class="sm:ml-16"> </NuxtPage>
    </Container>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add any additional styles here */
</style>
