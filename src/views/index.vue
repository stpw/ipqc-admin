<template>
    <div>
        <h1>首頁</h1>
        <div>
            <el-botton @click = "logout">退出登入</el-botton>
        </div>
            
        <div>
            <p>用戶信息：{{ userStore.userinfo }}</p>
        </div>


    </div>
</template>

<script setup lang="ts">
import { confirm } from '../composables/util';
import { useUserStore } from '../store';
const userStore = useUserStore()

import { useRouter } from 'vue-router'
const router = useRouter()

function logout() {
    confirm('確定要退出登入嗎？').then(res => {
        // 清除token
        userStore.logoutUserInfo()
        // 跳轉到登入頁面
        router.push('/login')
    })
}
</script>