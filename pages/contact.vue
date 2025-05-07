<template>
  <div class="pt-16">
    <Container id="contact" class="py-16 sm:py-32">
      <div class="flex">
        <Headline
          tag="h1"
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
            <NuxtLink to="mailto:toddcol@stanford.edu"
              >toddcol@stanford.edu</NuxtLink
            ><br />
            <NuxtLink to="https://colemanlab.sites.stanford.edu/"
              >colemanlab.stanford.edu</NuxtLink
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
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
