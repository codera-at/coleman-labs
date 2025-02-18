<template>
  <div
    v-editable="blok"
    class="flex flex-col gap-2 sm:flex-row sm:items-center"
  >
    <NuxtImg
      :src="
        blok.image.filename ? blok.image.filename : '/img/team/placeholder.jpg'
      "
      :alt="blok.name"
      :placeholder="[30, 30]"
      provider="storyblok"
      width="300"
      height="300"
      class="mr-8 rounded-3xl border border-red object-cover"
    ></NuxtImg>
    <div>
      <Headline tag="h2" size="md">{{ blok.name }}</Headline>
      <ul>
        <li v-if="blok.position">
          <span class="font-medium">Position:</span>
          {{ blok.position }}
        </li>
        <li v-if="blok.email.email">
          <a :href="'mailto:' + blok.email.email" class="font-medium">
            {{ blok.email.email }}
          </a>
        </li>
      </ul>
      <div
        v-if="blok.biography"
        v-html="renderRichText(blok.biography)"
        class="mt-4 space-y-2 rounded-3xl border border-red p-4"
      ></div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
