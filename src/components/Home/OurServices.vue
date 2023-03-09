<template>
  <div class="w-full flex justify-center flex-col items-center pb-16">
    <!-- PLACE WITH THE TITLE -->
    <div class="w-4/5 mt-44 flex flex-col justify-center">
      <div class="flex justify-center">
        <h2 class="border-l-2 border-secondaryRHA pl-3 text-2xl sm:text-4xl">
          Nuestros Servicios
        </h2>
      </div>
      <div class="w-full mt-16 backdrop-blur-md rounded-lg p-3">
        <p class="text-sm sm:text-3xl text-center">
          Siempre aseguramos la satisfacción del cliente con una atención de
          calidad, siendo eficientes y transparentes en todo lo relacionado a
          los procesos que conllevan la actividad de comercio exterior
        </p>
      </div>
    </div>
    <!-- CARDS WITH THE SERVICES -->
    <div
      class="lg:max-w-6xl mt-12 flex flex-col sm:flex-row sm:w-full sm:overflow-scroll lg:overflow-hidden justify-center sm:items-start sm:justify-start"
    >
      <div
        class="sm:flex sm:px-8 lg:px-0 lg:mx-auto"
        v-for="(service, index) in services"
        :key="index"
      >
        <Services
          :image="service.image"
          :name="service.name"
          :description="service.description"
        />
      </div>
    </div>
    <div
      class="w-28 h-9 sm:w-36 sm:h-12 bg-secondaryRHA flex justify-center items-center rounded-md mt-12"
    >
      <router-link :to="{ path: '/servicios', hash: '#background-1' }">
        <button
          class="w-full h-9 text-whiteRHA flex justify-center items-center"
        >
          Ver más
          <Icons class="w-4 h-4 text-whiteRHA" :name="arrowRight" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Icons from "../Global/Icons.vue";
import Services from "../Card/Services.vue";
export default {
  components: {
    Services,
    Icons,
  },
  data: () => ({
    // ICONS
    arrowRight: "arrowRight",
    // HASH
    hash: "#background-1",
    // SERVICES WITH THE CORRECT PROPS ESTABLISHED
    services: [
      {
        image: "../../../images/image-1.jpg",
        name: "Procesos de Importación y Exportación",
        description:
          "Ofrecemos servicios de gestión de importaciones a consumo de mercancías extranjeras, asegurándonos de cumplir con todas las formalidades y obligaciones aduaneras para garantizar la libre circulación de los productos.",
      },
      {
        image: "../../../images/image-2.jpg",
        name: "Trámites aduaneros",
        description:
          "Nos encargamos de toda la gestión de Documentación de Certificados para las exportaciones de nuestros clientes.",
      },
      {
        image: "../../../images/image-3.jpg",
        name: "Logística total",
        description:
          "Ofrecemos servicios completos de logística nacional e internacional,          desde el punto de origen hasta el destino final, a través de una red de agentes y empresas de transporte marítimo, terrestre y aéreo en todo el mundo.",
      },
    ],
  }),
  methods: {},
};
</script>
