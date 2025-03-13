<template>
    <div>
      <me-form :model="model" :rules="rules" ref="formRef">
        <me-form-item prop="email" label="the email">
          <me-input v-model="model.email" />
        </me-form-item>
        <me-form-item prop="password" label="the password">
          <me-input v-model="model.password" type="password" />
        </me-form-item>
        <me-form-item prop="agreement" label="agreement">
          <me-switch v-model="model.agreement" />
        </me-form-item>
        <me-form-item prop="zone" label="zone">
          <me-select v-model="model.zone" :options="options" />
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
    agreement: false,
    zone: ''
  })
  
  const rules = {
    email: [{ type: 'email', required: true, trigger: 'blur' }],
    password: [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' } ],
    agreement: [{ type: 'enum', required: true, enum: [true], message: '请同意协议'} ],
    zone: [{ type: 'string', required: true, trigger: 'change' }],
  }
  
  const options = [
    { label: 'zone 1', value: 'one' },
    { label: 'zone 2', value: 'two' },
    { label: 'zone 3', value: 'three' }
  ]
  
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