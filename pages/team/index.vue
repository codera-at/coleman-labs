<template>
  <div>
    <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
      <div class="space-y-8 sm:space-y-16">
        <p class="max-w-sm">
          Our team is composed of dedicated researchers and professionals who
          are passionate about advancing the field of neural interactions. We
          collaborate across various disciplines to push the boundaries of
          knowledge and innovation.
        </p>
      </div>
      <div class="space-y-8 sm:space-y-16">
        <div>
          <Headline tag="h2" size="md" color="secondary" theme="pill"
            >Meet The Team</Headline
          >
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
      </div>
    </div>
    <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16">
      <NuxtImg
        v-for="teamImg in teamImgs"
        class="h-full max-h-[500px] w-full rounded-3xl border border-red object-cover"
        :src="teamImg.src"
        :alt="teamImg.alt"
        width="700"
        height="500"
        :placeholder="[70, 50]"
      />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

const teamImgs = [
  {
    src: "/img/coleman-labs-team-01.webp",
    alt: "Coleman Labs team group photo 01",
  },
  {
    src: "/img/coleman-labs-team-02.webp",
    alt: "Coleman Labs team group photo 02",
  },
  {
    src: "/img/coleman-labs-team-03.webp",
    alt: "Coleman Labs team group photo 03",
  },
  {
    src: "/img/coleman-labs-team-04.webp",
    alt: "Coleman Labs team group photo 04",
  },
  {
    src: "/img/coleman-labs-team-05.webp",
    alt: "Coleman Labs team group photo 05",
  },
  {
    src: "/img/coleman-labs-team-06.webp",
    alt: "Coleman Labs team group photo 06",
  },
];

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
</script>

<style scoped></style>
