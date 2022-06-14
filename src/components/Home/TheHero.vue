<template>
    <div class="font-secondary">
        <div
            class="w-full h-20 flex justify-center items-center"
            v-for="(service, index) in services"
            :key="index"
        >
            <the-services :service="service.service" :id="service.id" class="">
            </the-services>
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
                id: "item-1",
            },
            {
                service: "integracion tecnólogica de servicios",
                id: "item-2",
            },
            {
                service: "asesoria personalizada",
                id: "item-3",
            },
            {
                service: "elaboracion de consultas de aduana",
                id: "item-4",
            },
        ],
    }),
};
</script>

<style></style>
