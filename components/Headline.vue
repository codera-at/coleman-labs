<template>
  <component
    :is="tag"
    :class="[
      sizeClasses[size],
      colorClasses[color],
      fontWeightClasses[weight],
      textTransformClasses[transform],
      themeClasses[theme],
      familyClasses[family],
      customClass,
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: "h1",
  },
  size: {
    type: String,
    default: "lg",
  },
  color: {
    type: String,
    default: "primary",
  },
  weight: {
    type: String,
    default: "normal",
  },
  transform: {
    type: String,
    default: "uppercase",
  },
  theme: {
    type: String,
    default: "",
  },
  family: {
    type: String,
    default: "sans",
  },
  customClass: {
    type: String,
    default: "",
  },
});

const themeClasses = {
  pill: "bg-red rounded-full px-6 py-2 inline-block",
};

const sizeClasses = {
  sm: "lg:text-lg md:text-md",
  md: "lg:text-2xl md:text-xl text-lg",
  lg: "lg:text-4xl md:text-3xl text-2xl",
  xl: "lg:text-9xl md:text-7xl text-5xl",
};

const colorClasses = {
  primary: "text-red",
  secondary: "text-white",
};

const fontWeightClasses = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const textTransformClasses = {
  uppercase: "uppercase",
  none: "",
};

const familyClasses = {
  serif: "font-serif",
  sans: "font-sans",
};
</script>

<style scoped></style>
