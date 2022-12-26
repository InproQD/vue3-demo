<template>
  <div class="login-box">
    <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="80px"
        class="demo-ruleForm"
    >
      <h2>Marvel Managing System</h2>
      <el-form-item label="Account" prop="account">
        <el-input v-model="ruleForm.username" type="password" autocomplete="off"/>
      </el-form-item>

      <el-form-item label="password" prop="password">
        <el-input
            v-model="ruleForm.password"
            type="password"
            autocomplete="off"
        />
      </el-form-item>

      <el-form-item>
        <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)"
        >Login
        </el-button
        >
        <el-button class="resetBtn" @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";
import { loginData } from "@/type/login";
import type { FormInstance } from 'element-plus'

export default defineComponent({
  setup () {
    // reactive 定义的响应式数据，适用于双向绑定
    const data = reactive(new loginData())
    // rules是一成不变的，所以不用reactive，直接定义，需要return
    const rules = {
      account: [
        {
          required: true,
          message: 'Please enter your account number',
          trigger: 'blur'
        },
        {
          min: 5,
          max: 15,
          message: 'Account number length between 5 and 15',
          trigger: 'blur'
        }
      ],
      password: [
        {
          required: true,
          message: 'Please enter your password',
          trigger: 'blur'
        },
        {
          min: 8,
          message: 'Password length not less than 8',
          trigger: 'blur'
        }
      ],
    }
    const ruleFormRef = ref<FormInstance>()
    return {...toRefs(data), rules, ruleFormRef};
  }
})
</script>

<style lang="scss" scoped>
.login-box {
  width: 100%;
  height: 100%;
  background: url("../assets/bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .demo-ruleForm {
    background: rgba(255, 255, 255, 1);
    padding: 25px;
    width: 420px;
    border-radius: 20px;
  }

  .loginBtn {
    width: 48%;
  }

  .resetBtn {
    width: 48%;
  }

  h2 {
    margin-bottom: 30px;
    color: #79bbff;
  }
}
</style>
