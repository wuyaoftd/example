<template>
    <div>
        this is child
        <!-- <button @click="handleChildChild">childchild</button>
        <router-view></router-view> -->

        <slot name='test'
              :objA="a"
              objB='123'
              objC="()=>{console.log(123)}"></slot>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                a: 1,
                b: 2,
                c: this.handleChildChild
            }
        },
        methods: {
            handleChildChild() {
                this.$router.push({ name: "child-child" })
            }
        }
    }
</script>>