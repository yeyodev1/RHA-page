<template>
    <!-- SERVICES CARD -->
    <div
        class="w-full bg-whiteRHA flex justify-center flex-col items-center rounded-xl m-2"
    >
        <div class="w-64 h-64">
            <div class="m-4">
                <img :src="image" alt="" class="object-cover" />
            </div>
            <div class="flex flex-col mx-4">
                <h5
                    class="text-base font-principal font-semibold text-blackRHA"
                >
                    {{ name }}
                </h5>
                <p class="font-principal">
                    {{ description }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //PROPS TO WRITE THE SERVICES
    props: {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
};
</script>
