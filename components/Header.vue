<template>
  <div
    class="fixed left-1/2 top-0 z-10 w-full -translate-x-1/2"
    :class="{ 'bg-white': isScrolled }"
  >
    <div
      class="relative mx-auto flex max-w-[95vw] justify-between border-b border-red px-4 py-4 transition-colors sm:py-6"
    >
      <span
        class="absolute bottom-0 left-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <span
        class="absolute bottom-0 right-0 h-4 w-4 translate-y-1/2 rounded-full bg-red"
      ></span>
      <div>
        <NuxtLink class="flex flex-row gap-4" to="/">
          <img
            src="/img/logo/Coleman_Labs_Logo_Signe_Light.svg"
            alt="Neural Interaction Lab Signe - Brain with Nodes"
            class="hidden h-12 sm:block sm:h-16"
          />
          <div>
            <span class="font-serif text-sm uppercase sm:text-base"
              >Stanford University </span
            ><br />
            <span class="text-lg font-semibold uppercase sm:text-xl md:text-2xl"
              >Neural Interaction Lab</span
            >
          </div>
        </NuxtLink>
      </div>
      <div
        class="fixed right-0 top-0 h-screen w-[60vw] border-l border-red bg-white transition-transform"
        :class="[isMenuOpen ? 'translate-x-0' : 'translate-x-full']"
      >
        <nav class="flex h-full flex-col justify-center px-8 py-8">
          <ul class="flex flex-col gap-8">
            <li class="text-2xl" v-for="navLink in navLinks">
              <NuxtLink
                @click="isMenuOpen = false"
                :class="{ underline: $route.name === navLink.name }"
                :to="navLink.link"
                >{{ navLink.name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
      <div class="z-50 flex flex-wrap content-center justify-center">
        <nav class="hidden rounded-full bg-red px-8 py-2 sm:block">
          <ul class="flex gap-8 text-white">
            <li class="group relative" v-for="navLink in navLinks">
              <NuxtLink
                :class="{ underline: $route.name === navLink.name }"
                class="flex items-center gap-2"
                :to="navLink.link"
                >{{ navLink.name }}
                <Icon v-if="navLink.submenu" name="ph:caret-down"></Icon
              ></NuxtLink>
              <ul
                v-if="navLink.submenu"
                class="absolute -left-6 hidden w-52 flex-col gap-2 rounded-b-3xl bg-red p-4 text-white group-hover:flex"
              >
                <li v-for="subnavLink in navLink.submenu">
                  <NuxtLink
                    class="block rounded-full px-2 py-1 hover:bg-white hover:text-red"
                    :to="subnavLink.link"
                  >
                    {{ subnavLink.name }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <button
          aria-label="Menu"
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
let navLinks = [
  { name: "Home", link: "/" },
  {
    name: "Research",
    link: "/research/mission-vision",
    submenu: [
      { name: "Mission & Vision", link: "/research/mission-vision" },
      { name: "Cardio", link: "/research/cardio" },
      { name: "Gut", link: "/research/gut" },
      {
        name: "Brain Machine Interface",
        link: "/research/brain-machine-interface",
      },
      { name: "Brain Dynamics", link: "/research/brain-dynamics" },
      { name: "Applied Probability", link: "/research/applied-probability" },
    ],
  },
  { name: "Publications", link: "/publications" },
  {
    name: "Team",
    link: "/team",
    submenu: [
      { name: "Team", link: "/team" },
      { name: "Principal Investigator", link: "/team/principal-investigator" },
      { name: "PhD Students", link: "/team/phd-students" },
      { name: "Post Docs", link: "/team/post-docs" },
      { name: "Staff", link: "/team/staff" },
      { name: "Alumni", link: "/team/alumni" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "research",
});

const mappedResearchAreas = data.stories.map((story) => {
  return {
    name: story.name,
    link: "/" + story.full_slug,
  };
});

navLinks.find((navLink) => navLink.name === "Research").submenu =
  mappedResearchAreas;

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
  transform: rotate(45deg) translate(4px, 3px);
}

.menu-icon.open span:nth-child(2) {
  transform: rotate(-45deg) translate(4px, -3px);
}
</style>
