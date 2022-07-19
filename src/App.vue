<template>
    <main id="app" class="w-screen h-screen">
        <router-view></router-view>
        <TheFooter></TheFooter>
    </main>
</template>

<script>
import TheHeader from "./components/Home/TheHeader.vue";
import TheFooter from "./components/Home/TheFooter.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
    },
};
</script>

<style>
#app {
    overflow-x: hidden;
}
</style>
