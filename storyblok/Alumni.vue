<template>
  <div
    v-editable="blok"
    class="flex flex-col gap-2 sm:flex-row sm:items-center"
  >
    <div>
      <Headline tag="h2" size="md">{{ blok.name }}</Headline>
      <ul>
        <li>
          {{ blok.phd_program }}
        </li>
        <li class="font-medium">
          {{ blok.current_position }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
