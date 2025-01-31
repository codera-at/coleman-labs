<template>
  <div
    v-editable="blok"
    class="w-full rounded-[5px] bg-[#f7f6fd] p-12 text-center"
  >
    <h3 class="text-2xl font-bold text-[#1d243d]">

      {{ $route.params.team }}
      {{ blok.image.filename }}
      {{ blok.name }}
      {{ blok.email.email  }}
    </h3>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
