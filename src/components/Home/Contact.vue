<template>
    <div class="w-full bg-blackRHA mx-auto flex flex-col">
        <div
            class="max-w-7xl flex justify-center items-center flex-col sm:justify-start sm:items-start ml-24 pb-40"
        >
            <div class="w-4/5 sm:w-1/3 pt-16 lg:w-1/3">
                <h6
                    class="pl-4 border-l-2 border-secondaryRHA text-whiteRHA text-3xl sm:text-4xl"
                >
                    Contactemos
                </h6>
                <p class="pt-14 text-whiteRHA text-base">
                    Ser una empresa líder que brinda servicios aduaneros, de
                    logística y tranporte con la flexibilidad pertinente a la
                    necesidad de cada uno de nuestros clientes.
                </p>
            </div>
        </div>
        <Form />
    </div>
</template>

<script>
import Form from "../Card/Form.vue";
import Icons from "../Global/Icons.vue";
export default {
    components: { Icons, Form },
    data: () => ({
        arrowRight: "arrowRight",
        userName: "",
        userEmail: "",
        userMessage: "",
    }),
};
</script>
