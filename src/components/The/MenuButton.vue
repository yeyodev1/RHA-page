<template>
    <!-- HEADER TO SMALL ADVICES  -->
    <div
        class="w-full h-8 flex lg:hidden justify-between items-center mx-5 sm:hidden"
    >
        <!-- SPACE WHERE IS THE LOGO -->
        <div class="w-6 h-4 flex justify-center small-logo"></div>
        <!-- SPACE WHERES THE BUTTON -->
        <button @click="getMenu">
            <div class="flex w-5 h-5 flex-col">
                <div class="w-full h-5 border-b border-whiteRHA"></div>
                <div class="w-full h-5 border-b border-whiteRHA"></div>
                <div class="w-full h-5 border-b border-whiteRHA"></div>
            </div>
        </button>
    </div>
    <!-- HEADER IS SM ADVICES -->
    <div
        class="w-full h-28 hidden lg:hidden sm:flex items-center mx-10 justify-between"
    >
        <!-- SPACE WHERE IS THE LOGO -->
        <div class="w-16 h-8 small-logo"></div>
        <!-- SPACE WHERES THE BUTTON -->
        <button @click="getMenu">
            <div class="flex w-9 h-7 flex-col">
                <div class="w-full h-7 border-b border-whiteRHA"></div>
                <div class="w-full h-7 border-b border-whiteRHA"></div>
                <div class="w-full h-7 border-b border-whiteRHA"></div>
            </div>
        </button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    methods: {
        ...mapActions("menu", [activeMenu]),
        getMenu() {
            console.log("hola");
            this.activeMenu(true);
        },
    },
};
</script>
