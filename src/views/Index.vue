<template>
    <div class="wrapper">
        index

        <button @click="handleClick">first</button>
        <button @click="handleClick2">second</button>
        <button @click="handleClick404">404</button>
        <button @click="handleFetch">fetch</button>

        <button @click="handleChild">child</button>

        <div v-for="item in 100"
             :key="item">{{item}}</div>

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
            },
            handleClick2() {
                this.$router.push({ name: "secondpage", params: { testId: 1, id: 2 } })
            },
            handleClick404() {
                this.$router.push({ path: '/someone' })
            },
            handleFetch() {

                let url = 'https://srzp-api.st4.test.lanxinka.com/1.0/member/job/list?job_id=1'

                let config = {
                    // body: {
                    //     myId: 2,
                    // },
                    method: "GET",
                    mode: 'cors',
                    headers: {
                        'user-agent': 'Mozilla/4.0 MDN Example',
                        'content-type': 'application/json'
                    },
                }
                fetch(url, config).then((res) => {
                    console.log('res', res)
                    console.log('res', URL.createObjectURL(res.body))
                    // console.log('res.data.json()', res.data.json())
                }, rej => {
                    console.log('rej', rej)
                })
            },
            handleChild() {
                this.$router.push({ name: "child" })
            }

        }

    }
</script>

<style>
    .wrapper > * {
        display: block;
        text-align: center;
        margin: 10px auto;
    }
</style>