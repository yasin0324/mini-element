<template>
    <div>
      <me-form :model="model" :rules="rules" ref="formRef">
        <me-form-item prop="email" label="the email">
          <me-input v-model="model.email" />
        </me-form-item>
        <me-form-item prop="password" label="the password">
          <me-input v-model="model.password" type="password" />
        </me-form-item>
        <me-form-item prop="confirmPwd" label="confirm password">
          <me-input v-model="model.confirmPwd" type="password" />
        </me-form-item>
        <me-form-item>
          <me-button @click.prevent="submit" type="primary">Submit</me-button>
          <me-button @click.prevent="reset">Reset</me-button>
        </me-form-item>
      </me-form>
    
      <p>
        form value:
        <pre>{{model}}</pre>
      </p>
    </div>
    </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  
  const model = reactive({
    email: '',
    password: '',
    confirmPwd: ''
  })
  
  const rules = {
    email: [{ type: 'email', required: true, trigger: 'blur' }],
    password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
    confirmPwd: [{ type: 'string', required: true, trigger: 'blur' }, {  validator: (rule, value) => value === model.password, trigger: 'blur', message: '两个密码必须一致' } ],
  }
  
  const formRef = ref()
  
  const submit = async () => {
    try {
      await formRef.value.validate()
      console.log('passed!')
    } catch(e) {
      console.log('the promise', e)
    }
  }
  
  const reset = () => {
    formRef.value.resetFields()
  }
  </script>