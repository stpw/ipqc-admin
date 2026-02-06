<template>
    <div>
        <el-result
        icon="warning"
        title="404 提示"
        sub-title="你找的頁面走丟了~"
      >
        <template #extra>
          <el-button type="primary" @click="$router.push('/')">回到首頁</el-button>
        </template>
      </el-result>
    </div>
</template>