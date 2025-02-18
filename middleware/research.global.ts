export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path === "/research") {
      return navigateTo("/research/mission-vision");
    }
  });
  