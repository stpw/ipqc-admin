import {defineStore} from 'pinia'

import { removeToken } from '~/composables/auth'

export const useUserStore = defineStore('user', {
    state: () => ({
        userinfo: {}
    }),
    persist: true, // 开启持久化,关掉电脑重启后数据还在，默认是localStorage
    actions: {
        setUserInfo(userinfo: any) {
            this.userinfo = userinfo
        }
        ,logoutUserInfo() {  
            this.$reset()  // 重置状态为初始值
            localStorage.removeItem('user')  // 移除 localStorage 中的用户信息
            //移除Cookie中的token
            removeToken()
        }
    }
})
