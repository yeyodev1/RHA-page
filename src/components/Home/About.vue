<template>
    <the-delivery />
    <div class="mx-auto w-4/5 flex justify-center bg-blackRHA flex-col">
        <div></div>
        <div class="w-4/5 px-4 sm:px-14 md:px-20">
            <div class="border-l-2 border-secondaryRHA w-4/5 flex flex-wrap">
                <p class="pl-3 text-whiteRHA uppercase text-base my-2">
                    la experiencia, importa
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
