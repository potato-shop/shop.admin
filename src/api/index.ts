import axios from 'axios';
import type { User } from '@/types/productType';

// export const apiBase = 'https://api.potatoshop.tw';
export const apiBase = 'http://127.0.0.1:8000';
export const assetUrl = 'https://storage.googleapis.com/potato-shop';

axios.defaults.baseURL = apiBase;
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  () => {}
);

export async function signup() {
  try {
    const res = await axios.post('/api/signup', {
      Name: 'gary002',
      Email: 'gary002@gmail.com',
      Password: 'ss159159',
    });
  } catch (err) {}
}

export async function loginAPI(payload: { Email: string; Password: string }) {
  return await axios.post(`/api/admin/login`, payload);
}

export async function getUserAPI(): Promise<User> {
  const res = await axios.get(`/api/me`);
  return res.data;
}

// 種類
export async function addCategoryAPI(payload: { Name: string; Description: string }) {
  return await axios.post('/api/category', payload);
}
export async function updateCategoryAPI(payload: { CategoryID: number; Name: string; Description: string }) {
  return await axios.put(`/api/category/${payload.CategoryID}`, {
    Name: payload.Name,
    Description: payload.Description,
  });
}
export async function getCategoryListAPI(payload: { currentPage: number; perPage: number; name: string }) {
  return await axios.get(
    `/api/categories?currentPage=${payload.currentPage}&perPage=${payload.perPage}&name=${payload.name}`
  );
}

export async function deleteCategoryAPI(categoryId: number) {
  return await axios.delete(`/api/category/${categoryId}`);
}

// 商品
export async function addProductAPI(payload: FormData) {
  return await axios.post('/api/product', payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
export async function updateProductAPI(payload: {
  ProductID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
}) {
  return await axios.put(`/api/product/${payload.ProductID}`, {
    CategoryID: payload.CategoryID,
    Name: payload.Name,
    Description: payload.Description,
    Price: payload.Price,
    StockQuantity: payload.StockQuantity,
  });
}
export async function updateProductImageAPI(payload: FormData, productId: number) {
  return await axios.put(`/api/product/${productId}/image`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export async function getProductListAPI(payload: {
  currentPage: number;
  perPage: number;
  name: string;
  categoryId: number;
}) {
  return await axios.get(
    `/api/products?currentPage=${payload.currentPage}&perPage=${payload.perPage}&name=${payload.name}&categoryId=${payload.categoryId}`
  );
}

export async function deleteProductAPI(productId: number) {
  return await axios.delete(`/api/product/${productId}`);
}

// 客戶
export async function getUserListAPI(payload: { CurrentPage: number; PerPage: number; Name: string; Role: string }) {
  return await axios.get(
    `/api/users?CurrentPage=${payload.CurrentPage}&PerPage=${payload.PerPage}&Name=${payload.Name}&Role=${payload.Role}`
  );
}

export async function updateUserImageAPI(payload: FormData, userId: number) {
  return await axios.put(`/api/user/${userId}/image`, payload, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

// 訂單
export async function getOrderListAPI(payload: { currentPage: number; perPage: number }) {
  return await axios.get(`/api/order?currentPage=${payload.currentPage}&perPage=${payload.perPage}`);
}

export async function updateOrderAPI(payload: { OrderID: number; Status: string }) {
  return await axios.put(`/api/order/${payload.OrderID}`, {
    Status: payload.Status,
  });
}
