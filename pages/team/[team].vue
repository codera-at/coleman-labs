<template>
  <div>
    <div class="grid-row-1 grid gap-8">
      <div
        v-for="member in members"
        :key="member.name"
        class="flex flex-row items-center space-y-2"
      >
        <NuxtImg
          v-if="$route.params.team !== 'alumni'"
          :src="member?.img"
          :alt="member?.name"
          :placeholder="[30, 30]"
          width="300"
          height="300"
          class="mr-8 rounded-3xl border border-red object-cover"
        ></NuxtImg>
        <div>
          <Headline tag="h2" size="md">{{ member.name }}</Headline>
          <ul
            v-if="
              $route.params.team === 'phd-students' ||
              $route.params.team === 'post-docs' ||
              $route.params.team === 'staff'
            "
          >
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
              <span class="font-medium">Hobbies:</span> {{ member["hobbies"] }}
            </li>
            <li v-if="member.email">
              <a :href="'mailto:' + member.email" class="font-medium">
                {{ member.email }}
              </a>
            </li>
          </ul>

          <template v-if="$route.params.team === 'alumni'">
            <p>{{ member.position }}</p>
            <p class="font-medium" v-if="member.currentPosition">
              {{ member.currentPosition }}
            </p>
          </template>
        </div>
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
