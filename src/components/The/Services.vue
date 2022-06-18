<template>
    <div class="w-full">
        <!-- SERVICE DETAILS SECTION -->
        <div :class="getClass" class="w-2/5">
            <p>{{ service }}</p>
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
        getClass() {
            return this.id;
        },
    },
};
</script>
