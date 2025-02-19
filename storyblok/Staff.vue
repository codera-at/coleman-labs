<template>
  <div
    v-editable="blok"
    class="flex flex-col gap-4 sm:gap-8 sm:flex-row sm:items-center"
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
      class="rounded-3xl border border-red object-cover"
    ></NuxtImg>
    <div>
      <Headline tag="h2" size="md">{{ blok.name }}</Headline>
      <ul>
        <li v-if="blok.phd_program">
          <span class="font-medium">PHD Program:</span>
          {{ blok.phd_program }}
        </li>
        <li v-if="blok.undergrad_major">
          <span class="font-medium">Undergrad Major:</span>
          {{ blok.undergrad_major }}
        </li>
        <li v-if="blok.undergrad_university">
          <span class="font-medium">Undergrad University:</span>
          {{ blok.undergrad_university }}
        </li>
        <li v-if="blok.phd_advisor">
          <span class="font-medium">PHD Advisor:</span>
          {{ blok.phd_advisor }}
        </li>
        <li v-if="blok.phd_university">
          <span class="font-medium">PHD University:</span>
          {{ blok.phd_university }}
        </li>
        <li v-if="blok.research_focus">
          <span class="font-medium"> Research Focus:</span>
          {{ blok.research_focus }}
        </li>
        <li v-if="blok.hobbies">
          <span class="font-medium">Hobbies:</span>
          {{ blok.hobbies }}
        </li>
        <li v-if="blok.email.email">
          <a :href="'mailto:' + blok.email.email" class="font-medium">
            {{ blok.email.email }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
