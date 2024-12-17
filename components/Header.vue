<template>
  <div
    class="fixed w-full top-0 left-1/2 -translate-x-1/2 max-w-screen-2xl border-b border-red bg-white"
  >
    <div class="relative flex justify-between px-8 py-6">
      <span
        class="absolute bottom-0 left-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <span
        class="absolute bottom-0 right-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <div>
        <span class="font-serif uppercase">Stanford University</span><br /><span
          class="text-2xl font-semibold uppercase"
          >Neural Interaction Lab</span
        >
      </div>
      <div class="flex flex-wrap content-center justify-center">
        <nav class="rounded-full bg-red px-8 py-2">
          <ul class="flex gap-8 text-white">
            <li v-for="navLink in navLinks">
              <NuxtLink :to="navLink.link">{{ navLink.name }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const navLinks = [
  { name: "News", link: "/news" },
  { name: "Research", link: "/research" },
  { name: "Publications", link: "/publications" },
  { name: "Team", link: "/team" },
  { name: "Contact", link: "/contact" },
];
</script>

<style lang="scss" scoped></style>
