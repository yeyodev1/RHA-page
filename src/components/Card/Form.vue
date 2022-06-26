<template>
    <div class="w-full bg-grayRHA bg-bottom flex justify-center items-center">
        <div class="w-4/5 bg-whiteRHA rounded-xl pt-5 relative -top-16">
            <h2 class="text-xs sm:text-2xl ml-6 sm:ml-12 sm:mb-8 mb-4 lg:mb-8">
                Empecemos a charlar
            </h2>
            <div class="flex flex-col sm:flex-row">
                <div class="flex flex-col ml-6 sm:ml-12 mb-3">
                    <label
                        for="name"
                        class="font-principal text-xs sm:text-base font-semibold"
                        >Nombre:</label
                    >
                    <input
                        type="text"
                        id="name"
                        v-model="userName"
                        placeholder="Diego Reyes"
                        class="w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
                    />
                </div>
                <div class="flex flex-col ml-6 sm:ml-12 mb-3">
                    <label
                        for="email"
                        class="font-principal text-xs sm:text-base font-semibold"
                        >Correo:</label
                    >
                    <input
                        type="email"
                        id="email"
                        v-model="userEmail"
                        placeholder="nadie@nada.com"
                        class="w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
                    />
                </div>
            </div>
            <div class="ml-6 sm:ml-12 mb-3">
                <label for="email" class="font-principal text-xs sm:text-base">
                    mensaje:
                </label>
                <textarea
                    type=""
                    id="email"
                    v-model="userMessage"
                    placeholder="nadie@nada.com"
                    class="w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
                />
            </div>
            <div
                class="ml-6 sm:ml-12 w-28 h-9 sm:w-36 sm:h-12 bg-secondaryRHA flex justify-center items-center rounded-md mt-12 mb-4 sm:mb-6 lg:mb-9"
            >
                <a href="">
                    <button
                        class="w-full h-9 text-whiteRHA flex justify-center items-center"
                    >
                        Ver más
                        <Icons
                            class="w-4 h-4 text-whiteRHA"
                            :name="arrowRight"
                        />
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        arrowRight: "arrowRight",
        userName: "",
        userEmail: "",
        userMessage: "",
    }),
};
</script>
