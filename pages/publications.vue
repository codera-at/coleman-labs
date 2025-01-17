<template>
  <div class="pt-16">
    <Container class="min-h-screen py-16 sm:py-32">
      <Headline tag="h1" color="secondary" theme="pill">Publications</Headline>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16">
        <div v-for="article in articles">
          <NuxtLink class="text-lg font-bold" :to="article.link">{{ article.title }}</NuxtLink>
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
</script>

<style lang="scss" scoped></style>
