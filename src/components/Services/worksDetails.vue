<template>
    <div class="w-full">
        <div v-for="(work, index) in works" :key="index">
            <works
                :image="work.image"
                :name="work.name"
                :description="work.description"
            />
        </div>
    </div>
</template>

<script>
import works from "./Works/works.vue";

export default {
    components: {
        works,
    },
    data: () => ({
        works: [
            {
                image: "../../../images/image-1.png",
                name: "lorem ipsum ",
                description:
                    "lorem ipsum lorem ipsummmajs faster herbsum ahdb ridsji sdfaisrohfk ribeye",
            },
            {
                image: "../../../images/image-2.png",
                name: "lorem ipsum ",
                description:
                    "lorem ipsum lorem ipsummmajs faster herbsum ahdb ridsji sdfaisrohfk ribeye",
            },
            {
                image: "../../../images/image-3.png",
                name: "lorem ipsum ",
                description:
                    "lorem ipsum lorem ipsummmajs faster herbsum ahdb ridsji sdfaisrohfk ribeye",
            },
        ],
    }),
};
</script>
