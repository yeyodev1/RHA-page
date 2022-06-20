<template>
    <div class="w-full">
        <!-- SERVICE DETAILS SECTION -->
        <div :id="getId" class="w-4/5 lg:w-2/5">
            <p class="text-3xl sm:text-5xl text-whiteRHA font-principal">
                {{ service }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    //PROPS TO WRITE THE SERVICES THAT ARE PROVIDED
    props: {
        service: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    computed: {
        getId() {
            return this.id;
        },
    },
};
</script>
