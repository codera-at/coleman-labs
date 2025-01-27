<template>
  <div class="bg-red">
    <Container class="p-8 text-white">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-5">
        <div class="col-span-1 text-center font-serif font-medium">
          <span class="text-4xl">Stanford</span><br />
          <span class="text-2xl">University</span>
        </div>
        <div class="md:col-span-4">
          <div class="grid-cols grid grid-flow-col gap-4 md:grid-flow-row">
            <ul class="flex flex-col gap-8 md:flex-row md:text-xl">
              <li v-for="link in mainLinks" :key="link.name">
                <a :href="link.link">{{ link.name }}</a>
              </li>
            </ul>
            <ul class="flex flex-col gap-8 md:flex-row">
              <li v-for="link in legalLinks" :key="link.name">
                <a :href="link.link">{{ link.name }}</a>
              </li>
            </ul>
          </div>
          <p class="mt-8">Stanford University. Stanford, California 94305</p>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup>
const mainLinks = [
  { name: "Stanford Home", link: "https://www.stanford.edu/" },
  { name: "Maps & Directions", link: "https://visit.stanford.edu/basics/" },
  { name: "Search Stanford", link: "https://www.stanford.edu/search/" },
  { name: "Emergency Infos", link: "https://emergency.stanford.edu/" },
];

const legalLinks = [
  { name: "Terms of Use", link: "https://www.stanford.edu/site/terms/" },
  { name: "Privacy", link: "https://www.stanford.edu/site/privacy/" },
  {
    name: "Copyright",
    link: "https://uit.stanford.edu/security/copyright-infringement",
  },
  {
    name: "Trademarks",
    link: "https://adminguide.stanford.edu/chapter-1/subchapter-5/policy-1-5-4",
  },
  {
    name: "Non-Discrimination",
    link: "https://non-discrimination.stanford.edu/",
  },
  { name: "Accesibility", link: "https://www.stanford.edu/site/accessibility" },
];
</script>

<style lang="scss" scoped></style>
