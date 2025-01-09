<template>
  <div>
    <Hero />
    <Container class="py-16 sm:py-32">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 md:gap-32">
        <div class="col-span-1 flex flex-col gap-8 sm:gap-16">
          <div>
            <Headline
              id="research"
              tag="h2"
              color="secondary"
              theme="pill"
              custom-class="sm:ml-16 scroll-mt-32"
              >Research</Headline
            >
          </div>
          <p class="max-w-sm">
            The Neural Interaction Lab focuses on the interactions between
            multiple neural systems using an intersection of disciplines.
          </p>
          <div>
            <Headline tag="h3" size="lg" transform="none"
              >Neural Interactions</Headline
            >
            <ul
              class="mt-8 flex flex-wrap content-stretch items-stretch justify-stretch gap-2 sm:gap-4"
            >
              <li
                @click="selectedResearchAreaId = researchArea.id"
                :class="{
                  'bg-red text-white':
                    selectedResearchAreaId === researchArea.id,
                  'text-red': selectedResearchAreaId !== researchArea.id,
                }"
                class="grow cursor-pointer rounded-full border border-red px-2 py-2 text-center text-sm transition-all hover:grow-[10] hover:bg-red hover:text-white sm:px-4 sm:text-base"
                v-for="researchArea in researchAreas"
              >
                {{ researchArea.title }}
              </li>
            </ul>
            <Transition name="fade" mode="out-in">
              <p
                :key="selectedResearchArea.id"
                class="mt-8 min-h-4 space-y-4 rounded-3xl border border-red p-4"
              >
                {{ selectedResearchArea.teaser }}
              </p>
            </Transition>
            <Transition name="fade" mode="out-in">
              <NuxtLink
                v-if="selectedResearchArea.link"
                :key="selectedResearchArea.id"
                class="mt-8 inline-block rounded-full border border-red bg-white p-2 px-4 transition-colors hover:bg-red hover:text-white"
                :to="selectedResearchArea.link"
                >Learn more</NuxtLink
              >
            </Transition>
          </div>
        </div>
        <div>
          <Transition name="fade" mode="out-in">
            <img
              class="max-h-[80vh]"
              :src="selectedResearchArea.img"
              :key="selectedResearchArea.id"
            ></img>
          </Transition>
        </div>
      </div>
    </Container>
    <Container class="py-16 sm:py-32">
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="space-y-16">
          <Headline
            id="team"
            tag="h2"
            color="secondary"
            theme="pill"
            custom-class="sm:ml-16 scroll-mt-32"
            >Team</Headline
          >
          <p class="max-w-sm">
            The Neural Interaction Lab focuses on the interactions between
            multiple neural systems using an intersection of disciplines.
          </p>
          <NuxtImg
            class="rounded-3xl border border-red sm:ml-16"
            src="/img/coleman-labs-team-01.webp"
            width="500"
            height="333"
          />
        </div>
        <div class="space-y-16">
          <NuxtImg
            class="rounded-3xl border border-red"
            src="/img/coleman-labs-team-02.webp"
            width="700"
            height="483"
          />
          <div class="flex gap-8">
            <NuxtLink
              class="rounded-full border border-red bg-white px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              to="/#team"
              >Current Members</NuxtLink
            >
            <NuxtLink
              class="rounded-full border border-red bg-white px-4 py-2 text-lg transition-colors hover:bg-red hover:text-white"
              to="/#team"
              >Alumni</NuxtLink
            >
          </div>
        </div>
      </div>
    </Container>
    <Container id="contact" class="py-16 sm:py-32">
      <div class="flex">
        <Headline
          tag="h2"
          color="secondary"
          theme="pill"
          custom-class="sm:ml-16"
          >Contact</Headline
        >
      </div>
      <div class="mt-16 space-y-4">
        <Headline
          tag="h3"
          size="lg"
          family="serif"
          transform="none"
          weight="medium"
          >Have questions?</Headline
        >
        <Headline tag="h2" size="xl" weight="bold">Contact us</Headline>
      </div>
      <div class="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="space-y-4 sm:ml-16 sm:space-y-8">
          <Headline tag="h3" size="md">Dr. Coleman</Headline>
          <p class="max-w-sm">
            Phone <br />
            <NuxtLink to="mail:toddcol@stanford.edu"
              >toddcol@stanford.edu</NuxtLink
            ><br />
            <NuxtLink to="https://colemanlab.sites.stanford.edu/"
              >colemanlab.sites.stanford.edu</NuxtLink
            >
          </p>
        </div>
        <div class="space-y-4 sm:space-y-8">
          <Headline tag="h3" size="md">Mailing Address</Headline>
          <p class="max-w-sm">
            Stanford Wu Tsai Neurosciences Building <br />
            290 Jane Stanford Way <br />
            Stanford, CA 94305
          </p>
        </div>
      </div>
    </Container>
    <Spacer />
    <Container class="pb-32 pt-8">
      <Headline tag="h4" size="sm" transform="none" weight="semibold"
        ><span class="font-serif">Stanford</span> Engineering</Headline
      >
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p>Wu Tsai Neurosciences Building</p>
            <p class="font-light">
              290 Campus Drive <br />
              Stanford, CA 94305 <br />
              United States
            </p>
          </div>
          <div>
            <p>Links to</p>
            <NuxtLink to="/" class="font-light">
              Wu Tsai Neurosciences Institute
            </NuxtLink>
          </div>
        </div>
        <div>
          <p>Resources for</p>
          <NuxtLink to="/" class="font-light"> Covid-19 Updates </NuxtLink>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
import researchAreas from "/api/research.json";

const selectedResearchAreaId = ref(0);
const selectedResearchArea = computed(() => {
  return (
    researchAreas.find(
      (researchArea) => researchArea.id === selectedResearchAreaId.value,
    ) || {}
  );
});
onMounted(() => {
  if (researchAreas.length > 0) {
    selectedResearchAreaId.value = researchAreas[0].id;
  }
});
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
