<template>
  <div class="w-full mx-auto py-16">
    <div
      class="w-full pb-10 flex flex-col sm:flex-row sm:px-11 max-w-6xl mx-auto"
    >
      <div
        class="w-4/5 mx-auto sm:px-9 flex px-4 flex-col justify-center max-w-6xl background-card rounded-xl"
      >
        <div class="pt-5 mb-3">
          <h4
            class="text-blackRHA font-principal font-semibold text-base sm:text-3xl lg:"
          >
            Procesos de Importación y Exportación
          </h4>
        </div>
        <div class="pb-3">
          <p class="font-principal text-blackRHA text-base">
            Ofrecemos servicios de gestión de importaciones a consumo de
            mercancías extranjeras, asegurándonos de cumplir con todas las
            formalidades y obligaciones aduaneras para garantizar la libre
            circulación de los productos. También brindamos asesoramiento en
            trámites de exportación a consumo para la salida definitiva de
            bienes del país, cumpliendo con todas las formalidades y
            obligaciones aduaneras necesarias.
          </p>
        </div>
      </div>
      <div class="w-full flex justify-end max-w-6xl mx-auto mt-5 sm:mt-0">
        <img
          class="rounded-xl image-width w-full h-36 object-cover no-reped bg-origin-padding"
          src="../../../images/image-1.jpg "
          alt=""
        />
      </div>
    </div>
    <div
      class="w-full sm:pt-2 pb-10 flex flex-col sm:flex-row-reverse sm:pr-8 sm:pl-24 max-w-6xl mx-auto"
    >
      <div
        class="w-4/5 mx-auto px-4 flex flex-col justify-center rounded-xl background-card"
      >
        <div class="mb-3">
          <h4
            class="text-blackRHA font-principal font-semibold text-base sm:text-3xl"
          >
            Trámites aduaneros
          </h4>
        </div>
        <div class="pb-3">
          <p class="font-principal text-blackRHA text-base">
            Nos encargamos de toda la gestión de Documentación de Certificados
            para las exportaciones de nuestros clientes. En el caso de la
            importación, asesoramos a nuestros clientes de la Documentación y
            Certificados necesarios para cada tipo de mercancía.
          </p>
          <div v-for="process in processes" :key="process">
            <li class="text-blackRHA font-principal text-base">
              {{ process.name }}
            </li>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-start">
        <img
          class="image-width w-full h-36 object-cover no-reped rounded-xl"
          src="../../../images/image-2.jpg "
          alt=""
        />
      </div>
    </div>
    <div
      class="w-full pb-10 sm:pb-0 flex flex-col sm:flex-row sm:px-11 max-w-6xl mx-auto"
    >
      <div
        class="w-4/5 mx-auto sm:px-9 flex flex-col justify-center background-card rounded-xl"
      >
        <div class="mb-3">
          <h4
            class="text-blackRHA font-principal font-semibold text-base sm:text-3xl"
          >
            Logística total
          </h4>
        </div>
        <div class="pb-3">
          <p class="font-principal text-blackRHA text-base">
            Ofrecemos servicios completos de logística nacional e internacional,
            desde el punto de origen hasta el destino final, a través de una red
            de agentes y empresas de transporte marítimo, terrestre y aéreo en
            todo el mundo. Además, garantizamos que su mercancía siempre estará
            asegurada gracias a nuestros servicios de gestión de seguros.
          </p>
        </div>
      </div>
      <div class="w-full flex justify-end">
        <img
          class="image-width w-full h-36 object-cover rounded-xl"
          src="../../../images/image-3.jpg "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    processes: [
      {
        name: "Certificación de origen",
      },
      {
        name: "Certificación de calidad comercial (SOIVRE)",
      },
      {
        name: "Certificación fitosanitaria",
      },
      {
        name: "Certificación CITES",
      },
    ],
  }),
};
</script>

<style scoped>
.image-width {
  width: 300px;
}
@media only screen and (min-device-width: 640px) and (max-device-width: 822px) {
  .image-width {
    width: 14.5rem;
    height: 26.563rem;
  }
}
@media only screen and (min-device-width: 823px) {
  .image-width {
    width: 25.75rem;
    height: 25.938rem;
  }
}
.background-card {
  background: rgba(200, 225, 225, 0.5);
}
</style>
