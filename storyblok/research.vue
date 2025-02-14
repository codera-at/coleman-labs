<template>
  <div v-editable="blok">
    <Headline
      v-if="blok.name && (resolvedDescription || blok.publications.length > 0)"
      tag="h2"
      color="secondary"
      theme="pill"
      custom-class=""
    >
      {{ blok.name }}
    </Headline>
    <div
      v-if="resolvedDescription"
      class="mt-8 space-y-4 rounded-3xl border border-red p-4"
    >
      <p v-html="resolvedDescription"></p>
    </div>
    <br v-else />
    <Headline
      v-if="blok.publications.length > 0"
      tag="h2"
      color="secondary"
      theme="pill"
      size="md"
      custom-class="mt-8"
    >
      Publications
    </Headline>
    <div
      v-if="blok.publications.length > 0"
      class="mt-8 space-y-4 rounded-3xl border border-red p-4"
    >
      <ul class="space-y-4">
        <li v-for="publication in blok.publications">
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
const props = defineProps({ blok: Object });
const resolvedDescription = computed(() =>
  renderRichText(props.blok.description),
);
</script>
