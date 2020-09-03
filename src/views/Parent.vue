<template>
    <div>
        this is parent
        <button @click="showChildData">showChildData</button>
        <Child>
            <template v-slot:test="scopeDate">this is parent test slot
                <div>this is scopeDate{{scopeDate}}</div>
                <div>{{typeof scopeDate.objC}}</div>

                <button @click="scopeDateC(scopeDate.objC)">emmitscopeDate</button>
            </template>
        </Child>
    </div>
</template>
<script>
    import Child from './Child'
    export default {
        components: {
            Child
        },
        data() {
            return {
            }
        },
        created() {

        },
        methods: {
            showChildData() {
                console.log('123', 123)
            },
            scopeDateC(str) {
                console.log('eval(str)', eval(str))
                let fn = eval(str)
                console.log('typeof fn', typeof fn)
                fn()

            }
        }
    }
</script>>