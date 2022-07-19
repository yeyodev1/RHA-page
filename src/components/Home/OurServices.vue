<template>
    <div class="w-full flex justify-center flex-col items-center pb-16">
        <!-- PLACE WITH THE TITLE -->
        <div class="w-4/5 mt-44 flex flex-col justify-center">
            <div class="flex justify-center">
                <h2
                    class="border-l-2 border-secondaryRHA pl-3 text-2xl sm:text-4xl"
                >
                    Nuestros Servicios
                </h2>
            </div>
            <div class="w-full mt-16">
                <p class="text-sm sm:text-3xl text-center">
                    Siempre aseguramos la satisfacción del cliente con una
                    atención de calidad, siendo eficientes y transparentes en
                    todo lo relacionado a los procesos que conllevan la
                    actividad de comercio exterior
                </p>
            </div>
        </div>
        <!-- CARDS WITH THE SERVICES -->
        <div
            class="mt-12 flex flex-col sm:flex-row sm:w-full overflow-scroll lg:overflow-hidden justify-center sm:items-start sm:justify-start"
        >
            <div
                class="sm:flex sm:px-8 lg:mx-auto"
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
            <router-link to="/servicios">
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
        // SERVICES WITH THE CORRECT PROPS ESTABLISHED
        services: [
            {
                image: "../../../images/image-1.png",
                name: "Agendamiento de aduana",
                description:
                    "Asesoramiento en aplicación de partidas arancelarias, consultas legales y de aforo para todos nuestros clientes",
            },
            {
                image: "../../../images/image-2.png",
                name: "Agendamiento de aduana",
                description:
                    "Asesoramiento en aplicación de partidas arancelarias, consultas legales y de aforo para todos nuestros clientes",
            },
            {
                image: "../../../images/image-3.png",
                name: "Agendamiento de aduana",
                description:
                    "Asesoramiento en aplicación de partidas arancelarias, consultas legales y de aforo para todos nuestros clientes",
            },
        ],
    }),
};
</script>
