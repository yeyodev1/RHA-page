<template>
  <div class="w-4/5 mx-auto max-w-5xl">
    <div
      class="pt-28 pb-28 md:pt-48 max-w-4xl flex flex-col-reverse w-full mx-auto md:pb-64"
    >
      <div class="mask w-full flex overflow-x-hidden overflow-y-hidden">
        <div class="items-container container">
          <the-services
            v-for="(service, index) in services"
            :key="index"
            :service="service.service"
            :id="service.id"
            class="item"
          >
          </the-services>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TheServices from "../The/ServicesOnHero.vue";
export default {
  components: {
    TheServices,
  },
  data: () => ({
    services: [
      {
        service: "Boletines de senae",
        id: "item-1",
      },
      {
        service: "Integración tecnológica de servicios",
        id: "item-2",
      },
      {
        service: "Asesoría personalizada",
        id: "item-3",
      },
      {
        service: "Elaboración de consultas de aduana",
        id: "item-4",
      },
    ],
  }),
};
</script>

<style scoped>
/* DEFINING THE ANIMATION */
.items-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.container {
  animation: slide 15s infinite ease-out;
}
.mask {
  clip-path: polygon(0 0, 25% 0, 25% 100%, 0 100%);
  width: 200%;
}

.item {
  width: 25%;
  gap: 0 200px;
}

@keyframes slide {
  0% {
    transform: translate(0%);
  }
  25% {
    transform: translate(-25%);
  }
  50% {
    transform: translate(-50%);
  }
  75% {
    transform: translate(-75%);
  }
  100% {
    transform: translate(0%);
  }
}
@media only screen and (min-width: 640px) and (max-width: 800px) {
  .mask {
    clip-path: inset(0 84% 0 0);
    width: 195%;
  }
}
@media only screen and (min-width: 801px) and (max-width: 900px) {
  .mask {
    clip-path: inset(0 86% 0 0);
  }
}
@media only screen and (min-width: 901px) and (max-width: 1023px) {
  .mask {
    clip-path: inset(0 87% 0 0);
  }
}
@media only screen and (min-width: 1024px) and (max-width: 1050px) {
  .mask {
    clip-path: inset(0 83% 0 0);
  }
}
@media only screen and (min-width: 1051px) and (max-width: 1279px) {
  .mask {
    clip-path: inset(0 85% 0 0);
  }
}
@media only screen and (min-width: 1280px) and (max-width: 1535px) {
  .mask {
    clip-path: inset(0 82% 0 0);
  }
}
@media only screen and (min-width: 1536px) {
  .mask {
    clip-path: inset(0 78% 0 0);
  }
}
</style>
