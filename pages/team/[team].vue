<template>
  <div>
    <div
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <div v-for="member in members" :key="member.name" class="space-y-2">
        <NuxtImg
          v-if="$route.params.team !== 'alumni'"
          :src="member?.img"
          :alt="member?.name"
          :placeholder="[50, 50]"
          width="500"
          height="500"
          class="rounded-3xl border border-red object-cover"
        ></NuxtImg>
        <Headline tag="h2" size="md">{{ member.name }}</Headline>
        <p v-if="$route.params.team === 'phd-students'">
          {{ member["phd-program"] }}
        </p>
        <p v-if="$route.params.team === 'post-docs' || $route.params.team === 'staff'">
          {{ member["undergrad-major"] }}
        </p>
        <a
          :href="'mailto:' + member.email"
          class="font-bold"
          v-if="member.email"
        >
          {{ member.email }}
        </a>
        <template v-if="$route.params.team === 'alumni'">
          <p>{{ member.position }}</p>
          <p class="font-bold" v-if="member.currentPosition">
            {{ member.currentPosition }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import team from "/api/current-members.json";
const phdStudents = ref(team["phd-students"]);
const postDocs = ref(team["post-docs"]);
const staff = ref(team["staff"]);

import alumni from "/api/alumni.json";

const route = useRoute();
const teamType = ref(route.params.team || "phd-students");
const members = computed(() => {
  return teamType.value === "phd-students"
    ? phdStudents.value
    : teamType.value === "post-docs"
      ? postDocs.value
      : teamType.value === "staff"
        ? staff.value
        : alumni;
});

onMounted(() => {
  teamType.value = route.params.team || "current-members";
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
