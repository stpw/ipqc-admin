<template>
    <el-row class="min-h-screen bg-indigo-500">
        <!-- 設置到lg，那麼隱藏選項選小: hidden-md-and-down -->
        <el-col  :xl = "16" :lg="16"  class="flex items-center justify-center hidden-md-and-down">
            <div>
                <div class="font-bold text-5xl text-light-50 mb-4">
                    IPQC量測自動化
                </div>
                <div class="text-gray-200 text-sm ">
                    請輸入您的帳號密碼以繼續
                </div>
            </div>
        </el-col>
        <el-col :xl = "8" :lg="8"  class="bg-light-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-3xl text-gray-800 ">
                登入
            </h2>
            <div class="flex items-center justify-center my-5 text-gray-300 space-x-2">
                <span class="h-[1px] w-16 bg-gray-200">

                </span>
                <span>賬號密碼登錄</span>
                <span class="h-[1px] w-16 bg-gray-200">

                </span>
            </div>
            <el-form ref="ruleFormRef" :rules="rules" :model="form" class="w-[250px]">
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
                    <el-input v-model="form.password" placeholder="請輸入密碼" type="password" show-password>
                        <template #prefix>
                            <el-icon class="text-gray-400">
                                <Lock />
                            </el-icon>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary"
                        @click="onSubmit(ruleFormRef)">登入</el-button>
                </el-form-item>

            </el-form>

        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { ElNotification } from 'element-plus'
import { login } from '~/api/manager'

import { useRouter } from 'vue-router'

const router = useRouter()

interface RuleForm {
    username: string
    password: string
}

const form = ref<RuleForm>({
    username: '',
    password: ''
})

// const form = ref({
//     username: '',
//     password: ''
// })

const rules = ref<FormRules<RuleForm>>({
    username: [
        {
            required: true, //必填項
            message: '請輸入賬號', //驗證提示
            trigger: 'blur'  //失去焦點時觸發驗證
        }
    ],
    password: [
        { required: true, message: '請輸入密碼', trigger: 'blur' }
    ]
})

const ruleFormRef = ref<FormInstance>()

const onSubmit = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            //驗證通過，提交表單
            login(form.value.username, form.value.password).then(res => {
                //登入成功
                ElNotification({
                    title: 'Success',
                    message: '登入成功',
                    type: 'success',
                    duration: 2000
                })
                console.log('submit!', fields)
                //跳轉到首頁
                router.push('/')

            })
                .catch(err => {
                    console.log(err)
                    ElNotification({
                        title: 'Error',
                        message: err.response.data.msg || "登入失敗",
                        type: 'error',
                        duration: 2000
                    })
                })
        } else {
            console.log('error submit!', fields)
        }
    })
}


</script>
