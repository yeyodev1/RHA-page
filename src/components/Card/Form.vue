<template>
    <div
        id="form"
        class="w-full bg-grayRHA bg-bottom flex justify-center items-center"
    >
        <div
            class="max-w-7xl w-4/5 bg-whiteRHA rounded-xl pt-5 relative -top-16 sm:ml-36 lg:w-2/3 lg:-top-24 lg:left-12"
        >
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
                        class="outline-none w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
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
                        class="outline-none w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
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
                    placeholder="Hola, necesito información acerca de..."
                    class="px-4 outline-none w-4/5 border-b border-secondaryRHA bg-whiteRHA placeholder:text-xs placeholder:text-grayRHA p-3"
                />
            </div>
            <div
                class="ml-6 sm:ml-12 w-28 h-9 sm:w-36 sm:h-12 bg-secondaryRHA flex justify-center items-center rounded-md mt-12 mb-4 sm:mb-6 lg:mb-9"
            >
                <a href="">
                    <button
                        class="w-full h-9 text-whiteRHA flex justify-center items-center"
                        @click.prevent="sendEmail"
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
import emailjs from "emailjs-com";
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons },
    data: () => ({
        arrowRight: "arrowRight",
        userName: "",
        userEmail: "",
        userMessage: "",
    }),
    // GETTING NAME VALID
    methods: {
        // FUNCTION TO GET THE MAIL
        async sendEmail() {
            const mail = {
                from_name: this.userName,
                from_email: this.userEmail,
                message: this.userMessage,
            };
            try {
                await emailjs.send(
                    process.meta.env.VITE_APP_SERVICE,
                    process.meta.env.VITE_APP_TEMPLATE,
                    mail,
                    process.meta.env.VITE_APP_ID
                );
                alert("Correo enviado");
            } catch (error) {
                console.error("CANNOT_SEND_EMAIL", error);
            }
        },
    },
};
</script>
