<template>
    <div class="pt-96 pb-72">
        <div class="font-secondary max-w-7xl w-full mx-auto px-10 py-5 slider">
            <div
                class="w-full h-20 flex justify-center items-center"
                v-for="(service, index) in services"
                :key="index"
            >
                <the-services
                    :service="service.service"
                    :id="service.id"
                    class=""
                >
                </the-services>
            </div>
        </div>
        <div class="menu w-2/5 px-10 py-5">
            <li>
                <a href="#item-1" class="w-6">1</a>
            </li>
            <li>
                <a href="#item-2">2</a>
            </li>
            <li>
                <a href="#item-3">3</a>
            </li>
            <li>
                <a href="#item-4">4</a>
            </li>
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

<style scoped>
div,
li {
    list-style: none;
}
div.slider {
    position: relative;
}
div.slider div {
    position: absolute;
    opacity: 0;
    width: inherit;
    height: inherit;
    transition: opacity 0.5s;
}
div.slider div:first-child {
    opacity: 1;
}

div.slider div the-services:target {
    opacity: 1;
}
</style>
