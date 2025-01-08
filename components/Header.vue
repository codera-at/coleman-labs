<template>
  <div
    class="fixed left-1/2 top-0 w-full max-w-[95vw] -translate-x-1/2 border-b border-red"
  >
    <div
      :class="{ 'bg-white': isScrolled }"
      class="relative flex justify-between px-8 py-4 transition-colors sm:py-6"
    >
      <span
        class="absolute bottom-0 left-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <span
        class="absolute bottom-0 right-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <div>
        <span class="font-serif text-sm uppercase sm:text-base"
          >Stanford University</span
        ><br /><span
          class="text-lg font-semibold uppercase sm:text-xl md:text-2xl"
          >Neural Interaction Lab</span
        >
      </div>
      <div class="flex flex-wrap content-center justify-center">
        <nav class="hidden rounded-full bg-red px-8 py-2 sm:block">
          <ul class="flex gap-8 text-white">
            <li v-for="navLink in navLinks">
              <NuxtLink :to="navLink.link">{{ navLink.name }}</NuxtLink>
            </li>
          </ul>
        </nav>

        <button
          class="menu-icon space-y-2 rounded-full bg-red px-4 py-4 text-white sm:hidden"
          @click="isMenuOpen = !isMenuOpen"
          :class="{ open: isMenuOpen }"
        >
          <span class="block h-0.5 w-6 bg-white"></span>
          <span class="block h-0.5 w-6 bg-white"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const navLinks = [
  { name: "Home", link: "/" },
  { name: "Research", link: "/#research" },
  { name: "Publications", link: "/publications" },
  { name: "Team", link: "/#team" },
  { name: "Contact", link: "/#contact" },
];

const isScrolled = ref(false);
const isMenuOpen = ref(false);

const handleScroll = () => {
  if (window.scrollY > 0) {
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.menu-icon span {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate( 4px, 3px);
}

.menu-icon.open span:nth-child(2) {
  transform: rotate(-45deg) translate( 4px, -3px);
}
</style>
