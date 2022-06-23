<template>
    <the-delivery />
    <div
        class="mx-auto w-4/5 flex justify-center bg-blackRHA flex-col rounded-xl"
    >
        <div></div>
        <div class="w-full sm:px-14 md:px-20 px-8">
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
                    logístiva y transporte con la flexibilidad pertinente a la
                    necesidad de cada uno de nuestros clientes
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import TheDelivery from "../Card/TheDelivery.vue";
export default {
    components: { TheDelivery },
    data: () => ({}),
};
</script>
