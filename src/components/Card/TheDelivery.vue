<template>
    <div class="w-full flex justify-center relative -top-16 shadow-xl z-20">
        <div
            class="w-4/5 bg-whiteRHA py-10 rounded-2xl flex flex-col sm:flex-row sm:justify-around"
        >
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0"
            >
                <Icons
                    class="w-12 h-12 text-primaryRHA sm:mr-2"
                    :name="truck"
                ></Icons>
                <p class="font-principal text-xs md:text-base">
                    Envios terrestres
                </p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <Icons
                    class="w-12 h-12 text-primaryRHA sm:mr-2"
                    :name="plane"
                ></Icons>
                <p class="font-principal text-xs md:text-base">Envios aereos</p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <Icons
                    class="w-12 h-12 text-primaryRHA sm:mr-2"
                    :name="boat"
                ></Icons>
                <p class="font-principal text-xs md:text-base">
                    Envios marítimos
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        plane: "plane",
        boat: "boat",
        truck: "truck",
    }),
};
</script>
