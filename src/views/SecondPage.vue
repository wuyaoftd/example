<template>
    <div>
        this is SecondPage
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        created() {
            console.log('this.$route', this.$route)
            console.log('this.$router', this.$router)
        }
    }
</script>>