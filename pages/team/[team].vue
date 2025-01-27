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
    <div id="team" class="sm:col-span-3 lg:col-span-4">
      <div class="grid-row-1 grid gap-8">
        <div
          v-for="member in members"
          :key="member.name"
          class="flex flex-col gap-2 sm:flex-row sm:items-center"
        >
          <NuxtImg
            v-if="$route.params.team !== 'alumni'"
            :src="member.img ? member.img : '/img/team/placeholder.jpg'"
            :alt="member?.name"
            :placeholder="[30, 30]"
            width="300"
            height="300"
            class="mr-8 rounded-3xl border border-red object-cover"
          ></NuxtImg>
          <div>
            <Headline tag="h2" size="md">{{ member.name }}</Headline>
            <ul v-if="$route.params.team !== 'alumni'">
              <li v-if="member['position']">
                <span class="font-medium">Position:</span>
                {{ member["position"] }}
              </li>
              <li v-if="member['phd-program']">
                <span class="font-medium">PHD Program:</span>
                {{ member["phd-program"] }}
              </li>
              <li v-if="member['undergrad-major']">
                <span class="font-medium">Undergrad Major:</span>
                {{ member["undergrad-major"] }}
              </li>
              <li v-if="member['undergrad-university']">
                <span class="font-medium">Undergrad University:</span>
                {{ member["undergrad-university"] }}
              </li>
              <li v-if="member['phd-advisor']">
                <span class="font-medium">PHD Advisor: </span
                >{{ member["phd-advisor"] }}
              </li>
              <li v-if="member['phd-university']">
                <span class="font-medium">PHD University:</span>
                {{ member["phd-university"] }}
              </li>
              <li v-if="member['research-focus']">
                <span class="font-medium"> Research Focus:</span>
                {{ member["research-focus"] }}
              </li>
              <li v-if="member['hobbies']">
                <span class="font-medium">Hobbies:</span>
                {{ member["hobbies"] }}
              </li>
              <li v-if="member.email">
                <a :href="'mailto:' + member.email" class="font-medium">
                  {{ member.email }}
                </a>
              </li>
            </ul>
            <p class="rounded-3xl border border-red p-4 mt-4" v-if="member.bio">{{ member.bio }}</p>
            <template v-if="$route.params.team === 'alumni'">
              <ul>
                <li>{{ member.position }}</li>
                <li class="font-medium" v-if="member.currentPosition">
                  {{ member.currentPosition }}
                </li>
              </ul>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import team from "/api/current-members.json";
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
const pricipalInvestigators = ref(team["principal-investigator"]);
const phdStudents = ref(team["phd-students"]);
const postDocs = ref(team["post-docs"]);
const staff = ref(team["staff"]);

import alumni from "/api/alumni.json";

const route = useRoute();
const teamType = ref(route.params.team || "phd-students");
const members = computed(() => {
  return teamType.value === "principal-investigator"
    ? pricipalInvestigators.value
    : teamType.value === "phd-students"
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
