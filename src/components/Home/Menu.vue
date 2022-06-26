<template>
    <div
        class="w-full h-screen bg-blackRHA fixed top-0 transition-all duration-300 z-30"
        :class="isShown"
    >
        <header
            class="flex justify-between mx-5 my-2 sm:mx-12 sm:my-9 max-w-7xl"
        >
            <div class="w-16 h-9">
                <img src="../../assets/logo.png" alt="" />
            </div>
            <button class="w-7 h-7" @click="closeMenu">
                <Icons class="w-7 h-7 text-whiteRHA" :name="close" />
            </button>
        </header>
        <div
            class="w-full flex flex-col mt-7 justify-center items-center max-w-7xl"
        >
            <div
                class="w-full pt-12 flex justify-center pr-9 sm:pr-16"
                v-for="(item, index) in menu"
                :key="index"
            >
                <a :href="item.link">
                    <button class="w-16 h-9 text-whiteRHA text-2xl sm:text-4xl">
                        {{ item.name }}
                    </button>
                </a>
            </div>
            <div class="w-full pt-12 flex justify-center items-center">
                <a href="">
                    <button
                        class="w-20 h-6 sm:w-40 sm:h-14 bg-secondaryRHA text-whiteRHA font-principal text-xs sm:text-2xl rounded-md"
                    >
                        Cotizar
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from "../../components/Global/Icons.vue";
import { mapGetters, mapActions } from "vuex";
export default {
    components: {
        Icons,
    },
    data: () => ({
        close: "close",
        menu: [
            {
                name: "nosotros",
                link: "",
            },
            {
                name: "servicios",
                link: "",
            },
            {
                name: "contacto",
                link: "",
            },
        ],
    }),

    computed: {
        ...mapGetters("menu", [showMenu]),
        isShown() {
            return this.showMenu === false ? "left-full" : "left-0";
        },
        isClosed() {
            return this.showMenu === true;
        },
    },
};
</script>
