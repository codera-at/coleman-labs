<template>
  <div v-editable="blok">
    <Headline
      v-if="blok.name && (hasDescription || blok.publications.length > 0)"
      tag="h2"
      color="secondary"
      theme="pill"
      custom-class=""
    >
      {{ blok.name }}
    </Headline>
    <div
      v-if="hasDescription"
      class="mt-8 space-y-4 rounded-3xl border border-red p-4"
    >
      <StoryblokRichText :doc="blok.description" />
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
const hasDescription = ref(
  renderRichText(props.blok.description) ? true : false,
);
</script>
