<template>
  <AuthLayout show-footer>
    <h3 class="fw-semibold mb-3">土豆後台</h3>

    <div class="text-start mb-3">
      <div v-if="error.length > 0" class="mb-2 text-danger">{{ error }}</div>

      <!-- <b-form-group label="信箱" class="mb-3">
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
      </b-form-group> -->

      <div class="d-grid mb-2">
        <b-button variant="primary" @click="handleLogin({ Email: `potato@gmail.com`, Password: `potato` })"
          >土豆先生登入</b-button
        >
      </div>

      <div class="d-grid">
        <b-button variant="primary" @click="handleLogin({ Email: `penguin@gmail.com`, Password: `penguin` })">企鵝先生登入</b-button>
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
</script>
