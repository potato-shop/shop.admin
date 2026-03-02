<template>
  <VerticalLayout>
    <PageTitle title="商品列表" subtitle="eCommerce" />

    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="border-bottom border-light">
            <div class="d-flex gap-2">
              <div class="position-relative">
                <input
                  v-model="searchName"
                  @keyup.enter="setProductList"
                  type="text"
                  class="form-control ps-4"
                  placeholder="搜尋名稱"
                />
                <i class="ti ti-search position-absolute top-50 translate-middle-y ms-2"></i>
              </div>
              <div>
                <VueSelect
                  style="width: 200px"
                  v-model="searchCategoryId"
                  :options="categoryList"
                  placeholder="請選擇商品種類"
                />
              </div>
              <div style="margin-left: auto">
                <div class="btn btn-primary" @click="openAddProductModal"><i class="ti ti-plus me-1"></i>新增商品</div>
              </div>
            </div>
          </b-card-header>

          <b-table-simple responsive hover class="text-nowrap mb-0">
            <b-thead class="bg-light-subtle">
              <b-tr>
                <b-th class="ps-3" style="width: 50px">
                  <b-form-checkbox />
                </b-th>
                <b-th>圖片</b-th>
                <b-th>名稱</b-th>
                <b-th>描述</b-th>
                <b-th>定價</b-th>
                <b-th>庫存</b-th>
                <b-th>種類</b-th>
                <b-th class="text-center" style="width: 120px">操作</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, idx) in productList" :key="idx">
                <b-td class="ps-3">
                  <b-form-checkbox />
                </b-td>
                <b-td>
                  <div class="d-flex justify-content-start align-items-center gap-3">
                    <div @click="openUpdateProductImageModal(item)" class="avatar-md" style="cursor: pointer">
                      <img :src="`${assetUrl}/${item.ImageURL}`" alt="Product-1" class="img-fluid rounded-2" />
                    </div>
                  </div>
                </b-td>
                <b-td>{{ item.Name }}</b-td>
                <b-td>{{ item.Description }}</b-td>
                <b-td>{{ item.Price.toLocaleString() }}</b-td>
                <b-td>{{ item.StockQuantity.toLocaleString() }}</b-td>
                <b-td>{{ item.Category.Name }}</b-td>
                <b-td class="pe-3">
                  <div class="hstack gap-1 justify-content-end">
                    <!-- 更新 -->
                    <div
                      @click="openUpdateProductModal(item)"
                      class="btn btn-soft-success btn-icon btn-sm rounded-circle"
                    >
                      <i class="ti ti-edit fs-16"></i>
                    </div>
                    <!-- 刪除 -->
                    <div @click="openDeleteModal(item)" class="btn btn-soft-danger btn-icon btn-sm rounded-circle">
                      <i class="ti ti-trash"></i>
                    </div>
                  </div>
                </b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>

          <b-card-footer>
            <b-pagination
              v-model="pagination.currentPage"
              :total-rows="pagination.totalRows"
              :per-page="pagination.perPage"
              class="justify-content-end mb-0"
            />
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>

    <!-- 新增商品 Modal -->
    <b-modal
      v-model="addProductLogic.isShowModal"
      title="新增商品"
      title-tag="h4"
      size="lg"
      ok-title="新增"
      cancel-title="取消"
      @ok="addProduct"
    >
      <b-card-body>
        <b-row>
          <!-- 商品名稱 -->
          <b-col lg="6">
            <FormInput
              v-model="addProductLogic.form.Name"
              id="productName"
              label="商品名稱"
              placeholder="請輸入商品名稱"
              group-class="mb-3"
            />
          </b-col>

          <!-- 商品訂價 -->
          <b-col lg="6">
            <FormInput
              v-model="addProductLogic.form.Price"
              id="productCode"
              label="商品訂價"
              placeholder="請輸入商品訂價"
              group-class="mb-3"
            />
          </b-col>

          <!-- 庫存數量 -->
          <b-col lg="6">
            <FormInput
              v-model="addProductLogic.form.StockQuantity"
              id="quantity"
              label="庫存數量"
              placeholder="請輸入庫存數量"
              group-class="mb-3"
            />
          </b-col>

          <!-- 商品種類 -->
          <b-col lg="6">
            <div class="mb-3">
              <p style="color: #4c4c5c; font-weight: 500; margin-bottom: 8px">商品種類</p>
              <VueSelect
                v-model="addProductLogic.form.CategoryID"
                :options="addProductLogic.categoryList"
                placeholder="請選擇商品種類"
              />
            </div>
          </b-col>
          <!-- 商品介紹 -->
          <b-col lg="12">
            <FormTextarea
              v-model="addProductLogic.form.Description"
              id="description"
              label="商品介紹"
              placeholder="請輸入商品介紹"
              :rows="7"
              group-class="mb-3"
            />
          </b-col>
        </b-row>
      </b-card-body>

      <b-card-header class="d-flex align-items-center">
        <b-card-title tag="h4" style="margin-bottom: 0; font-size: 13px; margin-right: auto">商品圖片</b-card-title>
        <b-button
          v-if="globalUserState.Name == 'AI 測試機器人'"
          size="sm"
          variant="outline-primary"
          @click="analyzeImage"
        >
          AI 圖片分析
        </b-button>
      </b-card-header>
      <b-card-body>
        <b-col cols="12 mb-2">
          <FileUpload v-model="addProductLogic.form.UploadedFile" />
        </b-col>
      </b-card-body>
    </b-modal>

    <!-- 更新商品 Modal -->
    <b-modal
      v-model="updateProductLogic.isShowModal"
      title="編輯商品"
      ok-title="儲存"
      cancel-title="取消"
      @ok="updateProduct"
    >
      <b-card-body>
        <b-row>
          <!-- 商品名稱 -->
          <b-col lg="6">
            <FormInput
              v-model="updateProductLogic.form.Name"
              id="productName"
              label="商品名稱"
              placeholder="請輸入商品名稱"
              group-class="mb-3"
            />
          </b-col>

          <!-- 庫存數量 -->
          <b-col lg="6">
            <FormInput
              v-model="updateProductLogic.form.StockQuantity"
              id="quantity"
              label="庫存數量"
              placeholder="請輸入庫存數量"
              group-class="mb-3"
            />
          </b-col>

          <!-- 商品訂價 -->
          <b-col lg="6">
            <FormInput
              v-model="updateProductLogic.form.Price"
              id="productCode"
              label="商品訂價"
              placeholder="請輸入商品訂價"
              group-class="mb-3"
            />
          </b-col>

          <!-- 商品種類 -->
          <b-col lg="6">
            <div class="mb-3">
              <p style="color: #4c4c5c; font-weight: 500; margin-bottom: 8px">商品種類</p>
              <VueSelect
                v-model="updateProductLogic.form.CategoryID"
                :options="updateProductLogic.categoryList"
                placeholder="請選擇商品種類"
              />
            </div>
          </b-col>
          <!-- 商品介紹 -->
          <b-col lg="12">
            <FormTextarea
              v-model="updateProductLogic.form.Description"
              id="description"
              label="商品介紹"
              placeholder="請輸入商品介紹"
              :rows="7"
            />
          </b-col>
        </b-row>
      </b-card-body>
    </b-modal>

    <!-- 更新商品圖片 Modal -->
    <b-modal
      v-model="updateProductImageLogic.isShowModal"
      title="編輯圖片"
      ok-title="儲存"
      cancel-title="取消"
      @ok="updateProductImage"
    >
      <input ref="fileInput" type="file" accept="image/*" @change="handleFileChange" style="display: none" />
      <b-button
        style="width: 100%; margin-bottom: 24px"
        type="button"
        variant="outline-primary"
        @click="triggerFileInput"
      >
        上傳新圖片
      </b-button>
      <img style="width: 100%; border-radius: 4px" :src="updateProductImageLogic.form.ImageURL" />
    </b-modal>

    <!-- 刪除商品 Modal -->
    <b-modal v-model="deleteLogic.isShowModal" title="刪除種類" ok-title="刪除" cancel-title="取消" @ok="deleteProduct">
      將刪除商品『{{ deleteLogic.form.Name }}』
    </b-modal>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from '@/layouts/VerticalLayout.vue';
import PageTitle from '@/components/PageTitle.vue';
import { onMounted, watch, ref } from 'vue';
import VueSelect from 'vue3-select-component';
import {
  getProductListAPI,
  getCategoryListAPI,
  addProductAPI,
  deleteProductAPI,
  updateProductAPI,
  updateProductImageAPI,
  analyzeImageAPI,
  assetUrl,
} from '@/api/index';
import { showToast } from '@/helpers/toast';
import { globalUserState, setGlobalUserState } from '@/stores/globalState';
console.log('🚀 ~ globalUserState:', globalUserState.value.Name);

interface Category {
  ID: number;
  Name: string;
  Description: string;
  CreatedAt: string;
  UpdatedAt: string;
}

interface Product {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  ImageURL: string;
  CreatedAt: string;
  UpdatedAt: string;
  Category: Category;
}

// 列表狀態
const searchName = ref('');
const searchCategoryId = ref(0);
const pagination = ref({
  totalRows: 0,
  perPage: 10,
  currentPage: 1,
});
const productList = ref<Product[]>([]);
const categoryList = ref<{ label: string; value: number }[]>([{ label: '全種類', value: 0 }]);
async function setProductList() {
  const res = await getProductListAPI({
    currentPage: pagination.value.currentPage,
    perPage: pagination.value.perPage,
    name: searchName.value,
    categoryId: searchCategoryId.value,
  });
  productList.value = res.data?.List;
  pagination.value.totalRows = res.data.Total;
}

async function setCategoryList() {
  const res = await getCategoryListAPI({ currentPage: -1, perPage: -1, name: '' });
  const list = res.data.List.map((item: Category) => {
    return { label: item.Name, value: item.ID };
  });
  categoryList.value = [...categoryList.value, ...list];
}
async function changePerPage(event: Event) {
  pagination.value.currentPage = 1;
  const target = event.target as HTMLSelectElement;
  pagination.value.perPage = Number(target.value);
  await setProductList();
}

onMounted(() => {
  setCategoryList();
  setProductList();
});

watch(
  () => pagination.value.currentPage,
  async () => {
    await setProductList();
  },
);

watch(searchCategoryId, async () => {
  console.log('🚀 ~ searchCategoryId:', searchCategoryId);
  await setProductList();
});

// 新增商品
const addProductLogic = ref<{
  isShowModal: boolean;
  categoryList: [];
  form: {
    Name: string;
    CategoryID: number | null;
    Price: number | null;
    StockQuantity: number | null;
    UploadedFile: File[] | null;
    Description: string;
  };
}>({
  isShowModal: false,
  categoryList: [],
  form: {
    Name: '',
    CategoryID: null,
    Price: null,
    StockQuantity: null,
    UploadedFile: null,
    Description: '',
  },
});

async function openAddProductModal() {
  addProductLogic.value.isShowModal = true;
  const res = await getCategoryListAPI({ currentPage: -1, perPage: -1, name: '' });
  const list = res.data.List.map((item: Category) => {
    return { label: item.Name, value: item.ID };
  });
  addProductLogic.value.categoryList = list;
}

async function addProduct(event: Event) {
  event.preventDefault();
  const formData = new FormData();
  formData.append('Name', addProductLogic.value.form.Name);
  formData.append('CategoryID', addProductLogic.value.form.CategoryID?.toString() as string);
  formData.append('Price', addProductLogic.value.form.Price?.toString() as string);
  formData.append('StockQuantity', addProductLogic.value.form.StockQuantity?.toString() as string);
  formData.append('Description', addProductLogic.value.form.Description?.toString() as string);
  formData.append('UploadedFile', addProductLogic.value.form.UploadedFile?.[0]!);

  try {
    await addProductAPI(formData);
    addProductLogic.value.isShowModal = false;
    showToast('新增成功');
    await setProductList();
  } catch (err) {
    console.log('🚀 ~ addProduct ~ err:', err);
  }
}

// 更新商品（不含圖片）
const updateProductLogic = ref<{ isShowModal: boolean; categoryList: []; form: Partial<Product> }>({
  isShowModal: false,
  categoryList: [],
  form: {},
});

async function openUpdateProductModal(item: Product) {
  updateProductLogic.value.isShowModal = true;
  const res = await getCategoryListAPI({ currentPage: -1, perPage: -1, name: '' });
  const list = res.data.List.map((item: Category) => {
    return { label: item.Name, value: item.ID };
  });
  updateProductLogic.value.categoryList = list;

  updateProductLogic.value.form = { ...item };
}

async function updateProduct() {
  await updateProductAPI({
    ProductID: updateProductLogic.value.form.ID!,
    CategoryID: updateProductLogic.value.form.CategoryID!,
    Name: updateProductLogic.value.form.Name!,
    Description: updateProductLogic.value.form.Description!,
    Price: Number(updateProductLogic.value.form.Price!),
    StockQuantity: Number(updateProductLogic.value.form.StockQuantity!),
  });
  showToast('更新成功');
  await setProductList();
}

// 更新商品圖片
const fileInput = ref<HTMLInputElement>();
const triggerFileInput = () => {
  fileInput.value?.click();
};
const updateProductImageLogic = ref<{
  isShowModal: boolean;
  form: {
    ID: number;
    UploadedFile: File | null;
    ImageURL: string;
  };
}>({
  isShowModal: false,
  form: {
    ID: 0,
    UploadedFile: null,
    ImageURL: '',
  },
});

function openUpdateProductImageModal(item: Product) {
  updateProductImageLogic.value.isShowModal = true;
  updateProductImageLogic.value.form.ID = item.ID;
  updateProductImageLogic.value.form.ImageURL = `${assetUrl}/${item.ImageURL}`;
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files![0];
  if (file) {
    updateProductImageLogic.value.form.UploadedFile = file;
    updateProductImageLogic.value.form.ImageURL = URL.createObjectURL(file);
  }
}

async function updateProductImage() {
  const formData = new FormData();
  formData.append('UploadedFile', updateProductImageLogic.value.form.UploadedFile!);
  const res = await updateProductImageAPI(formData, updateProductImageLogic.value.form.ID);
  showToast('更新成功');
  await setProductList();
}

// 刪除商品
const deleteLogic = ref<{ form: Partial<Product>; isShowModal: boolean }>({
  form: {},
  isShowModal: false,
});

function openDeleteModal(category: Category) {
  deleteLogic.value.form = category;
  deleteLogic.value.isShowModal = true;
}

async function deleteProduct(event: any) {
  event.preventDefault();
  await deleteProductAPI(deleteLogic.value.form.ID as number);
  showToast('已刪除');
  await setProductList();
  deleteLogic.value.isShowModal = false;
}

// AI 圖片分析
async function analyzeImage() {
  const file = addProductLogic.value.form.UploadedFile?.[0];
  if (!file) return;
  const formData = new FormData();
  formData.append('UploadedFile', file);
  const res = await analyzeImageAPI(formData);
  addProductLogic.value.form.Name = res.data.title;
  addProductLogic.value.form.Price = res.data.price;
  addProductLogic.value.form.Description = res.data.description;
  showToast('分析成功');
}
</script>
