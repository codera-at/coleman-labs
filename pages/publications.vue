<template>
  <div class="pt-16">
    <Container class="min-h-screen py-16 sm:py-32">
      <Headline tag="h1" color="secondary" theme="pill">Publications</Headline>
      <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div v-for="article in sortedArticles" :key="article.link">
          <NuxtLink class="text-lg font-bold" :to="article.link">{{
            article.title
          }}</NuxtLink>
          <p>{{ article.authors }}</p>
          <p>{{ article.publication }}</p>
          <p>{{ article.year }}</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import articles from "/api/publications.json";

const sortedArticles = computed(() => {
  return articles.sort((a, b) => b.year - a.year);
});
</script>

<style lang="scss" scoped></style>
