<template>
    <div>
        this is child
        <button @click="handleChildChild">childchild</button>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            handleChildChild() {
                this.$router.push({ name: "child-child" })
            }
        }
    }
</script>>