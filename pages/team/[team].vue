<template>
  <div class="grid grid-cols-1 gap-16 sm:grid-cols-5">
    <div class="sm:col-span-2 lg:col-span-1">
      <div class="sticky top-32 z-0 flex flex-wrap gap-4 sm:flex-col sm:gap-8">
        <NuxtLink
          v-for="teamGroup in teamGroups"
          :key="teamGroup.name"
          class="rounded-full border border-red px-4 py-2 transition-colors hover:bg-red hover:text-white sm:text-lg"
          :class="{
            'bg-red text-white': $route.params.team === teamGroup.type,
          }"
          :to="teamGroup.link"
          >{{ teamGroup.name }}</NuxtLink
        >
      </div>
    </div>
    <div class="sm:col-span-3 lg:col-span-4">
      <div class="grid-row-1 grid gap-8">
        <StoryblokComponent
          v-if="teamType === 'principal-investigator'"
          v-for="principalInvestigator in principalInvestigators.content.body"
          :blok="principalInvestigator"
        />
        <StoryblokComponent
          v-else-if="teamType === 'phd-students'"
          v-for="phdStudent in phdStudents.content.body"
          :blok="phdStudent"
        />
        <StoryblokComponent
          v-else-if="teamType === 'post-docs'"
          v-for="postDoc in postDocs.content.body"
          :blok="postDoc"
        />
        <StoryblokComponent
          v-else-if="teamType === 'staff'"
          v-for="staffMember in staff.content.body"
          :blok="staffMember"
        />
        <StoryblokComponent
          v-else-if="teamType === 'alumni'"
          v-for="alumniMember in alumni.content.body"
          :blok="alumniMember"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const teamGroups = [
  {
    name: "Principal Investigator",
    type: "principal-investigator",
    link: "/team/principal-investigator",
  },
  {
    name: "PhD Students",
    type: "phd-students",
    link: "/team/phd-students",
  },
  {
    name: "Post Docs",
    type: "post-docs",
    link: "/team/post-docs",
  },
  {
    name: "Staff",
    type: "staff",
    link: "/team/staff",
  },
  {
    name: "Alumni",
    type: "alumni",
    link: "/team/alumni",
  },
];

const principalInvestigators = await (async () => {
  return await useStoryblok("team/principal-investigator", {
    version: "draft",
  });
})();

const phdStudents = await (async () => {
  return await useStoryblok("team/phd-students", {
    version: "draft",
  });
})();

const postDocs = await (async () => {
  return await useStoryblok("team/post-docs", {
    version: "draft",
  });
})();

const staff = await (async () => {
  return await useStoryblok("team/staff", {
    version: "draft",
  });
})();

const alumni = await (async () => {
  return await useStoryblok("team/alumni", {
    version: "draft",
  });
})();

const route = useRoute();
const teamType = ref(route.params.team || "phd-students");

onMounted(() => {
  teamType.value = route.params.team || "phd-students";
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
