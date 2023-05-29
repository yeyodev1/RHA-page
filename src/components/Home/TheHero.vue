<template>
  <div class="w-4/5 mx-auto">
    <div
      class="pt-28 pb-28 md:pt-48 flex flex-col-reverse w-full mx-auto md:pb-64"
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
  flex-wrap: nowrap;
  row-gap: 20%;
}

.container {
  animation: slide 15s infinite ease-out;
}
.mask {
  clip-path: polygon(0 0, 25% 0, 25% 100%, 0 100%);
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
</style>
