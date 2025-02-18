<template>
  <div>
    <StoryblokComponent v-if="researchStory" :blok="researchStory.content" />
  </div>
</template>

<script setup>
definePageMeta({
  pageTransition: {
    name: "fade",
  },
});

const slug = useRoute().params.research;
const researchStory = await useAsyncStoryblok(
  slug && slug.length > 0 ? "research/" + slug : "/research",
  {
    version: "draft",
  },
);
</script>

<style lang="scss" scoped></style>
