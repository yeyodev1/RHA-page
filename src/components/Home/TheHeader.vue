<template>
    <header
        class="h-16 w-full flex justify-between max-w-7xl mx-auto hover:bg-whiteRHA"
    >
        <figure class="w-16 h-9 flex justify-center relative top-5 left-10">
            <img
                src="../../assets/logo.png"
                alt="logo de reyes, hijos y asociados"
            />
        </figure>
        <div class="flex w-1/4 justify-between">
            <button>
                <p class="text-blackRHA">Nosotros</p>
            </button>
            <button>
                <p class="text-blackRHA">Servicios</p>
            </button>
            <button>
                <p class="text-blackRHA">Contacto</p>
            </button>
        </div>
        <div
            class="bg-secondaryRHA hover:bg-tertiaryRHA w-36 h-11 relative rounded-xl top-4 right-10"
        >
            <button
                class="w-full h-11 flex justify-center items-center text-whiteRHA"
                v-for="(icon, index) in icons"
                :key="index"
            >
                Cotizar
                <Icons
                    :name="icon.name"
                    class="w-4 h-4 hover:w-8 hover:h-6 text-whiteRHA"
                />
            </button>
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

<style></style>
