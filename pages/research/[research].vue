<template>
  <div>
    <Headline tag="h2" color="secondary" theme="pill" custom-class="">
      {{ research.title }}
    </Headline>
    <div
      v-if="research.description"
      class="mt-8 space-y-4 rounded-3xl border border-red p-4"
    >
      <p>{{ research.description }}</p>
    </div>
    <br v-else />
    <Headline
      tag="h2"
      color="secondary"
      theme="pill"
      size="md"
      custom-class="mt-8"
    >
      Publications
    </Headline>
    <div class="mt-8 space-y-4 rounded-3xl border border-red p-4">
      <ul class="space-y-4">
        <li v-for="publication in research.publications">
          <NuxtLink :to="publication.link">
            <span class="text-lg font-bold">{{
              publication.title
            }}</span></NuxtLink
          >
          <p>{{ publication.authors }}</p>
          <p>{{ publication.journal }}</p>
          <p>{{ publication.month }} {{ publication.year }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import researchAreas from "/api/research.json";
const route = useRoute();

const research = researchAreas.find(
  (research) => research.slug === route.params.research,
);
</script>

<style lang="scss" scoped></style>
