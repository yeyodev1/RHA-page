<template>
    <div class="pt-48 pb-72 flex flex-col">
        <div
            class="max-w-7xl w-full mx-auto lg:px-10 lg:py-5 flex lg:h-80 mask overflow-x-hidden"
        >
            <div
                id="container"
                class="w-full flex justify-center items-center"
                v-for="(service, index) in services"
                :key="index"
            >
                <the-services
                    :service="service.service"
                    :id="service.id"
                    class="mx-11"
                >
                </the-services>
            </div>
        </div>
        <div class="menu max-w-7xl w-full mx-auto px-10 py-5">
            <li class="">
                <a href="#item-1" class="">1</a>
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
#container div {
    animation: slide 15s infinite;
}

@keyframes slide {
    0% {
        padding-right: 0%;
    }
    20% {
        padding-right: 0%;
    }
    25% {
        padding-right: 230%;
    }
    45% {
        padding-right: 230%;
    }
    50% {
        padding-right: 400%;
    }
    70% {
        padding-right: 400%;
    }
    75% {
        padding-right: 650%;
    }
    95% {
        padding-right: 650%;
    }
}
.mask {
    clip-path: inset(0 29% 0 0);
}
</style>
