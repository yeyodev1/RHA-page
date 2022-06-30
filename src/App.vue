<template>
    <main id="app" class="w-screen h-screen">
        <router-view></router-view>
    </main>
</template>

<script>
import home from "./views/Home.vue";

export default {
    components: {
        home,
    },
};
</script>
