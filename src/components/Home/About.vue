<template>
    <the-delivery />
    <div
        class="flex flex-col md:flex-row-reverse md:w-4/5 md:mx-auto md:justify-start md:items-center max-w-6xl md:relative"
    >
        <div
            class="w-full flex justify-center md:justify-start items-center md:absolute"
        >
            <div
                class="w-2/3 md:w-1/2 lg:w-1/4 background flex justify-center items-center flex-col rounded-md md:h-80 lg:h-72 md:ml-24"
            >
                <div class="pt-5">
                    <p
                        class="text-7xl lg:text-9xl sm:text-8xl font-semibold font-principal text-whiteRHA"
                    >
                        40
                    </p>
                </div>
                <div class="pt-3 pb-3">
                    <p
                        class="text-whiteRHA font-principal text-2xl sm:text-3xl md:text-4xl"
                    >
                        años
                    </p>
                </div>
            </div>
        </div>
        <div
            class="mx-auto md:mx-0 w-4/5 md:w-1/2 lg:w-2/3 flex justify-end bg-blackRHA flex-col rounded-xl z-20 relative -top-2 lg:pt-16 lg:pb-16"
        >
            <div class="w-full px-10 md:pl-20 my-8">
                <div
                    class="mt-2 border-l-2 border-secondaryRHA w-4/5 flex flex-wrap"
                >
                    <p
                        class="pl-3 text-whiteRHA uppercase text-base my-2 sm:text-2xl md:text-3xl font-principal"
                    >
                        la experiencia, importa
                    </p>
                </div>
                <div class="w-4/5">
                    <h3
                        class="font-semibold text-xs sm:text-lg text-whiteRHA font-principal"
                    >
                        Luis Reyes Obando
                    </h3>
                    <p
                        class="font-principal text-xs sm:text-sm md:text-base text-whiteRHA"
                    >
                        Agente de aduana
                    </p>
                </div>
                <div class="w-full mt-4">
                    <p class="text-xs text-whiteRHA sm:text-base">
                        Ser una empresa líder que brinda servicios aduaneros, de
                        logístiva y transporte con la flexibilidad pertinente a
                        la necesidad de cada uno de nuestros clientes
                    </p>
                </div>
                <div
                    class="w-28 h-9 sm:w-36 sm:h-12 bg-secondaryRHA flex justify-center items-center rounded-md mt-12"
                >
                    <a href="">
                        <button
                            class="w-full h-9 text-whiteRHA flex justify-center items-center"
                        >
                            Ver más
                            <Icons
                                class="w-4 h-4 text-whiteRHA"
                                :name="arrowRight"
                            />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from "../Global/Icons.vue";
import TheDelivery from "../Card/TheDelivery.vue";
export default {
    components: { TheDelivery, Icons },
    data: () => ({
        arrowRight: "arrowRight",
    }),
};
</script>

<style scoped>
.background {
    background-repeat: no-repeat;
    background: linear-gradient(
            0deg,
            rgba(4, 21, 31, 0.5),
            rgba(4, 21, 31, 0.5)
        ),
        url("../../../static/containers.png");
    background-size: cover;
}
</style>
