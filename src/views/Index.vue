<template>
    <div class="wrapper">
        index

        <button @click="handleClick">first</button>
        <button @click="handleClick2">second</button>
        <button @click="handleClick404">404</button>
        <button @click="handleFetch">fetch</button>

        <button @click="handleParent">parent</button>
        <button @click="handleChild">child</button>
        <button @click="handleTryCatch">testTryCatch</button>

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

                }, rej => {
                    console.log('rej', rej)
                })
            },
            handleParent() {
                this.$router.push({ name: "parent" })
            },
            handleChild() {
                this.$router.push({ name: "child" })
            },
            async handleTryCatch() {
                try {
                    // setTimeout(() => {
                    //     throw new Error("this is Error")
                    // }, 1000);
                    try {
                        await this.returnPromise()


                    } catch (error) {
                        console.log('里面的catuch', error)
                    }

                } catch (error) {
                    console.log('catch error', error)
                }
                finally {
                    console.log('finally')
                }
                console.log('outside')
            },

            returnPromise() {
                return new Promise((res, rej) => {
                    setTimeout(() => {


                        rej(123)
                    }, 1000);
                })
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