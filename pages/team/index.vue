<template>
  <div>
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
        <div>
          <Headline tag="h2" size="md" color="secondary" theme="pill">Meet The Team</Headline>
          <ul
            class="mt-8 flex flex-wrap content-stretch items-stretch justify-stretch gap-2 sm:gap-4"
          >
            <NuxtLink
              :to="teamGroup.link"
              class="grow cursor-pointer rounded-full border border-red px-2 py-2 text-center text-sm transition-all hover:grow-[10] hover:bg-red hover:text-white sm:px-4 sm:text-base"
              v-for="teamGroup in teamGroups"
            >
              {{ teamGroup.name }}
            </NuxtLink>
          </ul>
        </div>

        <NuxtImg
          class="rounded-3xl border border-red"
          src="/img/coleman-labs-team-02.webp"
          width="700"
          height="483"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const teamGroups = [
  {
    name: "Principal Investigator",
    link: "/team/principal-investigator",
  },
  {
    name: "PhD Students",
    link: "/team/phd-students",
  },
  {
    name: "Post Docs",
    link: "/team/post-docs",
  },
  {
    name: "Staff",
    link: "/team/staff",
  },
  {
    name: "Alumni",
    link: "/team/alumni",
  },
];

onMounted(() => {
  // if (!route.params.team) {
  //   navigateTo("/team/phd-students");
  // } else {
  //   console.log("team page");
  //   document.getElementById("team").scrollIntoView({ behavior: "smooth" });
  // }
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
