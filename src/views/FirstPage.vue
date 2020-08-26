<template>
    <div>
        this is firstpage
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        created() {
            console.log('created===')
        },
        mounted() {
            console.log('mounted===')
        },
        beforeRouteEnter(to, from, next) {
            console.log('beforeRouteEnter', to)
            console.log('beforeRouteEnter', from)
            console.log('beforeRouteEnter', next)
            next((vm) => {
                console.log('vm', vm)
            })
        },
        beforeRouteLeave(to, from, next) {
            console.log('beforeRouteLeave', to)
            console.log('beforeRouteLeave', from)
            console.log('beforeRouteLeave', next)
            next()
        }
    }
</script>>