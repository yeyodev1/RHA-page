<template>
    <div class="font-secondary">
        <div
            class="w-full bg-primaryRHA h-20 flex justify-center items-center"
            v-for="(service, index) in services"
            :key="index"
        >
            <the-services :service="service.service"> </the-services>
        </div>
    </div>
</template>

<script>
import TheServices from "../The/Services.vue";
export default {
    components: {
        TheServices,
    },
    data: () => ({
        services: [
            {
                service: "boletines de senae",
            },
            {
                service: "integracion tecnólogica de servicios",
            },
            {
                service: "asesoria personalizada",
            },
            {
                service: "elaboracion de consultas de aduana",
            },
        ],
    }),
};
</script>

<style></style>
