<template>
    <div class="pt-28 pb-28 lg:pt-48 flex flex-col-reverse w-full max-w-3xl">
        <div
            class="w-full mx-auto lg:px-10 lg:py-5 flex mask overflow-x-hidden overflow-y-hidden lg:pb-40 lg:pl-24 max-w-4xl"
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
                    class="mx-11 sm:mx-14 md:mx-12 lg:mx-11"
                >
                </the-services>
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
/* DEFINING THE ANIMATION */
#container div {
    animation: slide 15s infinite;
}

/* SLIDEEEEEEE */

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
@media only screen and (min-device-width: 1024px) {
    @keyframes slide {
        0% {
            padding-right: 0%;
        }
        20% {
            padding-right: 0%;
        }
        25% {
            padding-right: 300%;
        }
        45% {
            padding-right: 300%;
        }
        50% {
            padding-right: 445%;
        }
        70% {
            padding-right: 445%;
        }
        75% {
            padding-right: 700%;
        }
        95% {
            padding-right: 700%;
        }
    }
}
@media only screen and (min-device-width: 354px) and (max-device-width: 768px) {
    @keyframes slide {
        0% {
            padding-right: 0%;
        }
        20% {
            padding-right: 0%;
        }
        25% {
            padding-right: 220%;
        }
        45% {
            padding-right: 220%;
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
}

/* MASK TO SHOW ONLY THE SERVICES  */
.mask {
    clip-path: inset(0 29% 0 0);
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .mask {
        clip-path: inset(0 56% 0 6%);
    }
}

@media only screen and (min-device-width: 354px) and (max-device-width: 398px) {
    .mask {
        clip-path: inset(0 36% 0 12%);
    }
}
@media only screen and (min-device-width: 399px) and (max-device-width: 425px) {
    .mask {
        clip-path: inset(0 41% 0 8%);
    }
}
@media only screen and (min-device-width: 425px) and (max-device-width: 489px) {
    .mask {
        clip-path: inset(0 48% 0 8%);
    }
}
@media only screen and (min-device-width: 490px) and (max-device-width: 550px) {
    .mask {
        clip-path: inset(0 54% 0 4%);
    }
}
@media only screen and (min-device-width: 550px) and (max-device-width: 639px) {
    .mask {
        clip-path: inset(0 61% 0 3%);
    }
}
@media only screen and (min-device-width: 640px) and (max-device-width: 658px) {
    .mask {
        clip-path: inset(0 45% 0 6%);
    }
}
@media only screen and (min-device-width: 659px) and (max-device-width: 696px) {
    .mask {
        clip-path: inset(0 48% 0 7%);
    }
}
@media only screen and (min-device-width: 696px) and (max-device-width: 710px) {
    .mask {
        clip-path: inset(0 49% 0 6%);
    }
}
@media only screen and (min-device-width: 711px) and (max-device-width: 767px) {
    .mask {
        clip-path: inset(0 53% 0 6%);
    }
}
@media only screen and (min-device-width: 1024px) {
    .mask {
        clip-path: inset(0 38% 0 6%);
    }
}
</style>
