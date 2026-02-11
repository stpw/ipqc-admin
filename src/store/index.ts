import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        userinfo: {}
    }),
    actions: {
        setUserInfo(userinfo: any) {
            this.userinfo = userinfo
        }
    }
})
