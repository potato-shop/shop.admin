<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-2">土豆後台</h3>

    <b-form @submit.prevent="handleLogin" class="text-start mb-3">
      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

      <b-form-group label="信箱" class="mb-3">
        <b-form-input type="email" id="example-email" name="email" v-model="v.email.$model" placeholder="請輸入信箱" />
        <div v-if="v.email.$error" class="text-danger">
          <span v-for="(err, idx) in v.email.$errors" :key="idx">
            {{ err.$message }}
          </span>
        </div>
      </b-form-group>

      <b-form-group label="密碼" class="mb-4">
        <b-form-input
          type="password"
          id="example-password"
          name="password"
          v-model="v.password.$model"
          placeholder="請輸入密碼"
        />
        <div v-if="v.password.$errors" class="text-000danger">
          <span v-for="(err, idx) in v.password.$errors" :key="idx">
            {{ err.$message }}
          </span>
        </div>
      </b-form-group>

      <div class="d-grid">
        <b-button variant="primary" type="submit">登入</b-button>
      </div>
    </b-form>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { required, email } from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { loginAPI } from '@/api/index';

const credentials = reactive({
  email: '',
  password: '',
});

const vuelidateRules = computed(() => ({
  email: { required, email },
  password: { required },
}));

const v = useVuelidate(vuelidateRules, credentials);

const route = useRoute();
const query = route.query;

const error = ref('');

const handleLogin = async () => {
  const result = await v.value.$validate();

  if (result) {
    try {
      const res = await loginAPI({ Email: credentials.email, Password: credentials.password });
      localStorage.setItem('token', res.data);
      redirectUser();
    } catch (e: any) {
      if (e.response?.data?.error) {
        if (error.value.length == 0) error.value = e.response?.data?.error;
      }
    }
  }
};

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`);
  }
  return router.push('/apps/products');
};
</script>
