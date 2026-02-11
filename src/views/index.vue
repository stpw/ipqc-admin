<template>
    <div>
        <h1>首頁</h1>
        <div>
            <p>用戶信息：{{ userStore.userinfo }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store'
const userStore = useUserStore()
</script>