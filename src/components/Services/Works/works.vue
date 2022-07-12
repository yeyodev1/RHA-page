<template>
    <div class="w-full">
        <div class="w-4/5 mx-auto">
            <div class="">
                <h4
                    class="text-blackRHA font-principal font-semibold text-base sm:text-3xl lg:"
                >
                    {{ name }}
                </h4>
            </div>
            <div>
                <p class="font-principal text-blackRHA text-base">
                    {{ description }}
                </p>
            </div>
        </div>
        <div class="h-36 w-full flex justify-end">
            <img
                :src="image"
                alt=""
                class="image-width w-full h-36 object-cover"
            />
        </div>
    </div>
</template>

<script>
export default {
    // PROPS TO WRITE THE WORKS
    props: {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
};
</script>

<style scoped>
.image-width {
    width: 300px;
}
</style>
