<template>
    <div class="w-full">
        <!-- SERVICE DETAILS SECTION -->
        <div class="w-2/5 bg-backgroundRHA">
            <p>{{ service }}</p>
        </div>
    </div>
</template>

<script>
import { stringifyStyle } from "@vue/shared";

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
};
</script>
