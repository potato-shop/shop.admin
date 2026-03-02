<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-3">土豆後台</h3>

    <div class="text-start mb-3">
      <div class="d-grid mb-2">
        <b-button variant="primary" @click="handleLogin({ Email: `potato@gmail.com`, Password: `potato` })"
          >土豆先生登入</b-button
        >
      </div>

      <div class="d-grid mb-2">
        <b-button variant="primary" @click="handleLogin({ Email: `penguin@gmail.com`, Password: `penguin` })"
          >企鵝先生登入</b-button
        >
      </div>

      <div class="d-grid mb-2">
        <b-button variant="primary" @click="isShowLoginForm = true">手動登入</b-button>
      </div>

      <div v-if="isShowLoginForm">
        <b-form-group label="信箱" class="mb-3">
          <b-form-input
            v-model="loginForm.email"
            type="email"
            id="example-email"
            name="email"
            placeholder="請輸入信箱"
          />
        </b-form-group>

        <b-form-group label="密碼" class="mb-4">
          <b-form-input
            v-model="loginForm.password"
            type="password"
            id="example-password"
            name="password"
            placeholder="請輸入密碼"
            @keyup.enter="loginFormSubmit"
          />
        </b-form-group>
      </div>
    </div>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '@/router';
import { loginAPI } from '@/api/index';

const route = useRoute();
const query = route.query;

const error = ref('');

const handleLogin = async (payload: { Email: string; Password: string }) => {
  const res = await loginAPI(payload);
  localStorage.setItem('token', res.data);
  redirectUser();
};

const redirectUser = () => {
  if (query.redirectedFrom) {
    return router.push(`${query.redirectedFrom}`);
  }
  return router.push('/apps/products');
};

// 手動登入
const isShowLoginForm = ref(false);
const loginForm = ref({
  email: '',
  password: '',
});

async function loginFormSubmit() {
  await handleLogin({ Email: loginForm.value.email, Password: loginForm.value.password });
}
</script>
