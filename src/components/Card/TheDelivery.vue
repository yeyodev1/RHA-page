<template>
    <div class="w-full flex justify-center relative -top-4 md:-top-16">
        <div
            class="w-4/5 bg-whiteRHA py-10 rounded-2xl flex flex-col sm:flex-row sm:justify-around"
        >
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 md:py-0"
            >
                <Icons
                    class="w-11 md:w-14 md:h-11 h-8 sm:w-11 text-primaryRHA"
                    :name="truck"
                ></Icons>
                <p class="font-principal text-xs md:text-base">
                    Envios terrestres
                </p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <Icons class="w-11 h-8 text-primaryRHA" :name="plane"></Icons>
                <p class="font-principal text-xs md:text-base">Envios aereos</p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <Icons class="w-11 h-8 text-primaryRHA" :name="boat"></Icons>
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
