<template>
  <div>
    <StoryblokComponent v-if="researchStory" :blok="researchStory.content" />
  </div>
</template>

<script setup>
const slug = useRoute().params.research;

const researchStory = await useAsyncStoryblok(
  slug && slug.length > 0 ? "research/" + slug : "/research/mission-vision",
  {
    version: "draft",
  },
);
</script>

<style lang="scss" scoped></style>
