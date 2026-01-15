import type { User } from '@/types/productType';
import { getUserAPI } from '../api';
import { ref } from 'vue';
import {  assetUrl } from '../api';
import { useRouter } from 'vue-router';

export const globalUserState = ref<User>({
  ID: 0,
  Email: '',
  Name: '',
  Password: '',
  Avatar: '',
  Role: '',
  Phone: '',
  Address: '',
  CreatedAt: '',
  UpdatedAt: '',
  CartItems: [],
});

export async function setGlobalUserState() {
  const router = useRouter();
  if (localStorage.getItem('token') == null) {
    localStorage.removeItem('token');
    router.push({ name: 'auth.login' });
  }

  const user = await getUserAPI();
  if (user.ID) {
    user.Avatar = `${assetUrl}/${user.Avatar}`;
    globalUserState.value = user;
  } else {
    localStorage.removeItem('token');
    router.push({ name: 'auth.login' });
  }
}

export async function clearGlobalUserState() {
  globalUserState.value = {
    ID: 0,
    Email: '',
    Name: '',
    Password: '',
    Avatar: '',
    Role: '',
    Phone: '',
    Address: '',
    CreatedAt: '',
    UpdatedAt: '',
    CartItems: [],
  };
  localStorage.removeItem('token');
}
