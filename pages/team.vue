<template>
  <div class="pt-16">
    <Container class="py-16 sm:py-32">
      <Headline
        id="team"
        tag="h2"
        color="secondary"
        theme="pill"
        custom-class="sm:ml-16 scroll-mt-32 mb-16"
        >Team</Headline
      >
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div class="space-y-8 sm:space-y-16">
          <p class="max-w-sm">
            Our team is composed of dedicated researchers and professionals who
            are passionate about advancing the field of neural interactions. We
            collaborate across various disciplines to push the boundaries of
            knowledge and innovation.
          </p>
          <NuxtImg
            class="rounded-3xl border border-red"
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
        </div>
      </div>
      <div class="mt-32 grid grid-cols-1 gap-16 sm:grid-cols-5">
        <div class="sm:col-span-1">
          <div
            class="sticky top-32 z-0 flex flex-wrap gap-4 sm:flex-col sm:gap-8"
          >
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{
                'bg-red text-white': $route.params.team === 'phd-students',
              }"
              to="/team/phd-students"
              >PHD Students</NuxtLink
            >
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{
                'bg-red text-white': $route.params.team === 'post-docs',
              }"
              to="/team/post-docs"
              >Post Doc</NuxtLink
            >
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{
                'bg-red text-white': $route.params.team === 'staff',
              }"
              to="/team/staff"
              >Staff</NuxtLink
            >
            <NuxtLink
              class="rounded-full border border-red px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              :class="{ 'bg-red text-white': $route.params.team === 'alumni' }"
              to="/team/alumni"
              >Alumni</NuxtLink
            >
          </div>
        </div>
        <div id="team" class="sm:col-span-4"><NuxtPage> </NuxtPage></div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const route = useRoute();
onMounted(() => {
  if (!route.params.team) {
    navigateTo("/team/phd-students");
  } else {
    console.log("team page");
    document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  }
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
