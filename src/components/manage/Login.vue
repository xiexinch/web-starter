<template>
    <div>
        <common-header></common-header>
            <div>
                <div>
                    用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名"/>
                </div>
                <div>
                    密码:<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码"/>
                </div>
                <div>
                    <button v-on:click="login">登陆</button>
                </div>
                <div>
                    登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
                </div>
            </div>
        <common-footer></common-footer>
    </div>
</template>

<script>
import commonHeader from '@/components/commons/CommonHeader.vue'
import commonFooter from '@/components/commons/CommonFooter.vue'
//import axios from '@/api/index.js'
export default {
    name: 'Login',
    components: {
        commonHeader,
        commonFooter
    },
    data() {
        return {
            loginInfoVo: {
                username: '',
                password: ''
            },
            responseResult: []
        }
    },
    methods: {
        login() {
            this.axios.post('/login', {
                username: this.loginInfoVo.username,
                password: this.loginInfoVo.password
            }).then(success => {
                this.responseResult = JSON.stringify(success.data)
                if(success.data.code === 200) {
                    this.$router.replace({
                        path: '/index'
                    })
                }
            }).catch(failResponse => {
                console.log(failResponse)
            })
        }
    }
}
</script>


<style>

</style>