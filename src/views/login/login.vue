<template>
    <el-row class = "min-h-screen bg-indigo-500">
        <!-- 設置到lg，那麼隱藏選項選小: hidden-md-and-down -->
        <el-col  :xl="16" :lg="16" class = "flex items-center justify-center hidden-md-and-down">
            <div >
                <div class = "font-bold text-5xl text-light-50 mb-4">
                    IPQC量測自動化
                </div>
                <div class = "text-gray-200 text-sm ">
                    請輸入您的帳號密碼以繼續
                </div>
            </div>
        </el-col>
        <el-col :xl="8" :lg="8"  class = "bg-light-50 flex items-center justify-center flex-col">
            <h2 class = "font-bold text-3xl text-gray-800 ">
                登入
            </h2>
            <div class = "flex items-center justify-center my-5 text-gray-300 space-x-2" >
                <span class = "h-[1px] w-16 bg-gray-200">
                    
                </span>
                <span>賬號密碼登錄</span>
                <span class = "h-[1px] w-16 bg-gray-200">

                </span>
                </div>
                <el-form :model="form" class = "w-[250px]">
                    <el-form-item label="賬號" prop="username">
                        <el-input v-model="form.username" placeholder="請輸入賬號">
                            <template #prefix>
                                <el-icon class="text-gray-400">
                                    <User />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密碼" prop="password">
                        <el-input v-model="form.password" placeholder="請輸入密碼" type="password">
                            <template #prefix>
                                <el-icon class="text-gray-400">
                                    <Lock />
                                </el-icon>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit">登入</el-button>
                    </el-form-item>

                </el-form>
            
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
    username: '',
    password: ''
})

const onSubmit = () => {
    console.log(form.value)
}
</script>
