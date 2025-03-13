<template>
  <div>
    <me-form :model="model" ref="formRef">
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
import { reactive, ref } from 'vue';

const model = reactive({
  email: '',
  password: '',
  confirmPwd: '',
  agreement: false,
  zone: ''
})

const options = [
  { label: 'zone 1', value: 'one' },
  { label: 'zone 2', value: 'two' },
  { label: 'zone 3', value: 'three' }
]

const formRef = ref()

const submit = async () => {
  alert('submitted!')
}

const reset = () => {
  formRef.value.resetFields()
}
</script>