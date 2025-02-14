<template>
  <div class="pt-16">
    <Container class="min-h-screen py-16 sm:py-32">
      <Headline
        id="research"
        tag="h2"
        color="secondary"
        theme="pill"
        custom-class="scroll-mt-32"
        >Research</Headline
      >
      <div
        class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 md:gap-32"
      >
        <div class="col-span-1 flex flex-col gap-8 sm:gap-16">
          <div>
            <ul
              class="mt-8 flex flex-wrap content-stretch items-stretch justify-stretch gap-2 sm:gap-4"
            >
              <NuxtLink
                :to="researchArea.slug"
                :class="{
                  'bg-red text-white':
                    route.params.research === researchArea.slug,
                  'text-red': route.params.research !== researchArea.slug,
                }"
                class="grow cursor-pointer rounded-full border border-red px-2 py-2 text-center text-sm transition-all first:w-full first:border-2 first:font-bold hover:grow-[10] hover:bg-red hover:text-white sm:px-4 sm:text-base"
                v-for="researchArea in researchAreas"
                :key="researchArea.id"
              >
                {{ researchArea.name }}
              </NuxtLink>
            </ul>
            <!-- <Transition name="fade" mode="out-in"> -->
              <p
                :key="selectedResearchArea.id"
                v-html="renderRichText(selectedResearchArea.content.teaser)"
                class="mt-8 min-h-4 space-y-4 rounded-3xl border border-red p-4"
              ></p>
            <!-- </Transition> -->
          </div>
          <!-- <Transition name="fade" mode="out-in"> -->
            <NuxtPage></NuxtPage>
          <!-- </Transition> -->
        </div>
        <div class="relative -z-10 order-first sm:order-last">
          <!-- <Transition name="fade" mode="out-in"> -->
            <img
              class="sticky top-32 max-h-[80vh]"
              :src="selectedResearchArea.content.illustration.filename"
              :key="selectedResearchArea.id"
            />
          <!-- </Transition> -->
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "research",
  is_startpage: false,
});

const researchAreas = data.stories;
const route = useRoute();

// const selectedResearchAreaId = ref(0);
const selectedResearchArea = computed(() => {
  return (
    researchAreas.find(
      (researchArea) => researchArea.slug === route.params.research,
    ) || {}
  );
});

// onMounted(() => {
//   if (researchAreas.length > 0) {
//     selectedResearchAreaId.value = researchAreas[0].id;
//   }
// });
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
