<template>
    <div>
        index

        <button @click="handleClick">router push</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            handleClick() {
                this.$router.push({ name: "firstpage" })
            }
        }

    }
</script>

<style>
</style>