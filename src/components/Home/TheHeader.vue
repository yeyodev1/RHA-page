<template>
    <header
        class="w-full flex justify-between header lg:hover:bg-backgroundRHA hover:transition-all"
    >
        <!-- HEADER TO SMALL ADVICES  -->
        <div
            class="w-full flex lg:hidden justify-between items-center px-5 sm:px-10 pt-2"
        >
            <!-- SPACE WHERE IS THE LOGO -->
            <router-link to="/">
                <button
                    class="w-10 h-10 sm:w-14 sm:py-14 flex justify-center small-logo"
                ></button>
            </router-link>
            <!-- SPACE WHERES THE BUTTON -->
            <button class="w-9 h-7 sm:w-14 sm:h-14" @click="getMenu">
                <Icons class="w-full h-7 text-whiteRHA" :name="menu" />
            </button>
        </div>

        <!-- HEADER TO LG ADVICES -->
        <div
            class="max-w-7xl w-full mx-auto justify-between px-10 py-5 lg:flex hidden"
        >
            <!-- SPACE WHERE IS THE LOGO -->
            <router-link to="/">
                <div class="px-16 py-4 flex justify-center logo" />
            </router-link>
            <!-- BUTTONS LINKED TO REST TO THE PAGE -->
            <div
                v-for="option in options"
                :key="option"
                class="flex items-center"
            >
                <router-link :to="{ name: option.route, hash: option.hash }">
                    <button
                        class="border-b-0 hover:border-b hover:border-secondaryRHA hover:transition-all"
                    >
                        <p class="color-font font-principal">
                            {{ option.name }}
                        </p>
                    </button>
                </router-link>
            </div>
            <!-- BUTTON TO CONSULT THE COSTS -->
            <div class="bg-secondaryRHA hover:bg-tertiaryRHA w-36 rounded-xl">
                <a href="#form">
                    <button
                        class="w-full h-11 flex justify-center items-center text-whiteRHA"
                        v-for="(icon, index) in icons"
                        :key="index"
                    >
                        Cotizar
                        <Icons
                            :name="icon.name"
                            class="w-4 h-4 hover:w-7 hover:h-7 transition-all text-whiteRHA"
                        />
                    </button>
                </a>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions } from "vuex";
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        menu: "menu",
        icons: [
            {
                name: "arrowRight",
            },
        ],
        options: [
            {
                name: "Nosotros",
                route: "home",
                hash: "#second-background",
            },
            {
                name: "Servicios",
                route: "servicios",
                hash: "",
            },
            {
                name: "Contacto",
                route: "home",
                hash: "#form",
            },
        ],
    }),

    methods: {
        ...mapActions("menu", ["activeMenu"]),
        getMenu() {
            this.activeMenu(true);
        },
    },
    mounted() {
        const anchor = this.$router.currentRoute._value.hash;
        this.$nextTick(() => {
            if (anchor && document.querySelector(anchor)) {
                location.href = anchor;
            }
        });
    },
    watch: {
        $route(to, from) {
            if (to.hash) {
                if (to.hash !== from.hash) {
                    const anchor = to.hash;
                    this.$nextTick(() => {
                        if (anchor && document.querySelector(anchor)) {
                            location.href = anchor;
                        }
                    });
                }
            }
        },
    },
};
</script>

<style scoped>
/* CLASS WITH THE INITIAL LOGO */
.logo {
    background: url("../../assets/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
/* CLASS TO CHANGE THE LOGO */
.header:hover .logo {
    background: url("../../assets/logoHover.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
/* CLASS WITH THE INITIAL FONT COLOR */
.color-font {
    color: #f0f2f2;
}
.header:hover .color-font {
    color: #04151f;
}
/* CLASS WITH THE LOGO IN SMALL ADVICES */
.small-logo {
    background: url("../../assets/logo.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
}
</style>
