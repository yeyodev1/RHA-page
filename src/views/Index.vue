<template>
    <div id="background" class="w-full mx-auto bg-no-repeat bg-center bg-cover">
        <TheHeader />
        <TheHero />
    </div>
    <Menu />
    <section id="second-background">
        <About />
        <OurServices />
    </section>
    <Contact />
</template>

<script>
import Menu from "../components/Home/Menu.vue";
import TheHero from "../components/Home/TheHero.vue";
import About from "../components/Home/About.vue";
import OurServices from "../components/Home/OurServices.vue";
import Contact from "../components/Home/Contact.vue";
import TheHeader from "../components/Home/TheHeader.vue";
export default {
    components: {
        TheHero,
        About,
        OurServices,
        Contact,
        Menu,
        TheHeader,
    },
};
</script>

<style scoped>
/* BACKGROUND CORRESPONDENT AT THE HERO */
#background {
    background: linear-gradient(
            150.52deg,
            #04151f 16.66%,
            rgba(4, 21, 31, 0.526586) 58.47%,
            rgba(4, 21, 31, 0.191211) 73.65%,
            rgba(4, 21, 31, 0) 91.09%
        ),
        url("../assets/Images/Backgrounds/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
/* BACKGROUND CORRESPONDENT FROM THE ABOUT TO THE SERVICES */
#second-background {
    background: url("../assets/Images/Backgrounds/second-background.png") fixed
        50% 50%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
