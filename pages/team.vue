<template>
  <div>
    <Container class="min-h-screen py-32">
      <Headline tag="h1" color="secondary" theme="pill" class="mt-4 sm:mt-8">
        Team
      </Headline>
      <div class="mt-4 grid grid-cols-1 gap-8 sm:mt-8 sm:grid-cols-4">
        <div class="flex flex-wrap content-start gap-4">
          <NuxtLink
            to="/team/current-members"
            class="rounded-full border border-red px-2 py-2 text-center transition-colors hover:bg-red hover:text-white sm:px-4"
            :class="{
              'bg-red text-white': $route.params.team === 'current-members',
            }"
          >
            Current Members
          </NuxtLink>
          <NuxtLink
            to="/team/alumni"
            class="rounded-full border border-red px-4 py-2 text-center transition-colors hover:bg-red hover:text-white"
            :class="{ 'bg-red text-white': $route.params.team === 'alumni' }"
          >
            Alumni
          </NuxtLink>
        </div>
        <div class="col-span-3">
          <NuxtPage> </NuxtPage>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup></script>

<style scoped>
/* Add any additional styles here */
</style>
