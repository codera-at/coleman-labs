<template>
  <Container class="py-32">
    <div class="mt-16 grid grid-cols-1 sm:grid-cols-3">
      <div class="col-span-2">
        <Headline tag="h1" color="secondary" theme="pill">
          {{ research.title }}
        </Headline>
        <div class="mt-8 space-y-4 rounded-3xl border border-red p-4">
          <p>{{ research.description }}</p>
        </div>
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
              {{ publication.authors }}, "{{ publication.title }}"
              <em>{{ publication.journal }}</em
              >, {{ publication.month }} {{ publication.year }}.
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  </Container>
</template>

<script setup>
import researchAreas from "/api/research.json";
const route = useRoute();
onMounted(() => {
  console.log(route.params);
});

const research = researchAreas.find(
  (research) => research.slug === route.params.research,
);
</script>

<style lang="scss" scoped></style>
