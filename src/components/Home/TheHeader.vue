<template>
    <header class="w-full flex justify-between hover:bg-whiteRHA header">
        <div class="max-w-7xl w-full mx-auto flex justify-between px-10 py-5">
            <!-- SPACE WHERE IS THE LOGO -->
            <div class="w-16 h-9 flex justify-center logo" />
            <!-- BUTTONS LINKED TO REST TO THE PAGE -->
            <div class="flex w-1/4 justify-between color-font">
                <button
                    class="border-b-0 hover:border-b hover:border-secondaryRHA hover:transition-all"
                >
                    <p class="color-font font-principal">Nosotros</p>
                </button>
                <button
                    class="border-b-0 hover:border-b hover:border-secondaryRHA hover:transition-all"
                >
                    <p class="color-font font-principal">Servicios</p>
                </button>
                <button
                    class="border-b-0 hover:border-b hover:border-secondaryRHA hover:transition-all"
                >
                    <p class="color-font font-principal">Contacto</p>
                </button>
            </div>
            <!-- BUTTON TO CONSULT THE COSTS -->
            <div class="bg-secondaryRHA hover:bg-tertiaryRHA w-36">
                <button
                    class="w-full h-11 flex justify-center items-center text-whiteRHA"
                    v-for="(icon, index) in icons"
                    :key="index"
                >
                    Cotizar
                    <Icons
                        :name="icon.name"
                        class="w-4 h-4 hover:w-8 hover:h-6 transition-all text-whiteRHA"
                    />
                </button>
            </div>
        </div>
    </header>
</template>

<script>
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        icons: [
            {
                name: "arrowRight",
            },
        ],
    }),
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
</style>
