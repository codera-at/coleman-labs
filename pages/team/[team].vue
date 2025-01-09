<template>
  <div>
    <div class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div v-for="member in members" :key="member.name" class="space-y-2">
        <NuxtImg
          v-if="member.img"
          :src="member?.img"
          :alt="member?.name"
          width="500"
          height="500"
          class="rounded-3xl border border-red object-cover"
        ></NuxtImg>
        <Headline tag="h2" size="md">{{ member.name }}</Headline>
        <p>{{ member.position }}</p>
        <p class="font-bold" v-if="member.currentPosition">
          {{ member.currentPosition }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import currentMembers from "/api/current-members.json";
import alumni from "/api/alumni.json";

const route = useRoute();
const teamType = ref(route.params.team || "current-members");
const members = computed(() => {
  return teamType.value === "current-members" ? currentMembers : alumni;
});

onMounted(() => {
  teamType.value = route.params.team || "current-members";
});
</script>

<style scoped>
/* Add any additional styles here */
</style>
