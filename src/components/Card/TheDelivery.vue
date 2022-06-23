<template>
    <div class="w-full flex justify-center relative -top-16 z-20 box-shadow">
        <div
            class="w-4/5 bg-whiteRHA py-10 rounded-2xl flex flex-col sm:flex-row sm:justify-around"
        >
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0"
            >
                <div class="md:pr-3">
                    <truck />
                </div>
                <p class="font-principal text-xs md:text-base">
                    Envios terrestres
                </p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <div>
                    <plane class="md:pr-3" />
                </div>
                <p class="font-principal text-xs md:text-base">Envios aereos</p>
            </div>
            <div
                class="flex flex-wrap justify-around items-center py-4 md:py-0 sm:"
            >
                <div>
                    <boat class="md:pr-3" />
                </div>
                <p class="font-principal text-xs md:text-base">
                    Envios marítimos
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import truck from "../Global/Icons/Truck.vue";
import plane from "../Global/Icons/Plane.vue";
import boat from "../Global/Icons/Boat.vue";
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons, boat, plane, truck },
};
</script>

<style scoped>
box-shadow {
    box-shadow: 0px 2.90625px 17.4375px rgba(0, 0, 0, 0.09);
}
</style>
