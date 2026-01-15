<template>
  <VerticalLayout>
    <PageTitle title="客戶列表" subtitle="eCommerce" />

    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="border-bottom border-light">
            <b-row class="justify-content-between gy-2 position-relative">
              <b-col lg="3">
                <div class="position-relative">
                  <input
                    v-model="searchName"
                    @keyup.enter="setCustomerList"
                    type="text"
                    class="form-control ps-4"
                    placeholder="搜尋名稱"
                  />
                  <i class="ti ti-search position-absolute top-50 translate-middle-y ms-2"></i>
                </div>
              </b-col>
            </b-row>
          </b-card-header>

          <b-table-simple responsive hover class="text-nowrap mb-0">
            <b-thead class="bg-light-subtle">
              <b-tr>
                <b-th class="ps-3" style="width: 50px">
                  <b-form-checkbox />
                </b-th>
                <b-th>圖片</b-th>
                <b-th>名稱</b-th>
                <b-th>信箱</b-th>
                <b-th>電話</b-th>
                <b-th>地址</b-th>
                <b-th class="text-center" style="width: 120px">操作</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, idx) in customerList" :key="idx">
                <b-td class="ps-3">
                  <b-form-checkbox />
                </b-td>
                <b-td>
                  <div class="d-flex justify-content-start align-items-center gap-3">
                    <div @click="openUpdateUserImageModal(item)" class="avatar-md" style="cursor: pointer">
                      <img :src="`${assetUrl}/${item.Avatar}`" class="img-fluid rounded-2" />
                    </div>
                  </div>
                </b-td>
                <b-td>{{ item.Name }}</b-td>
                <b-td>{{ item.Email }}</b-td>
                <b-td>{{ item.Phone }}</b-td>
                <b-td>{{ item.Address }}</b-td>
                <b-td class="pe-3">
                  <div class="hstack gap-1 justify-content-end">
                    <!-- 更新 -->
                    <div
                      @click="showToast('暫不開放操作管理員')"
                      class="btn btn-soft-success btn-icon btn-sm rounded-circle"
                    >
                      <i class="ti ti-edit fs-16"></i>
                    </div>
                    <!-- 刪除 -->
                    <div
                      @click="showToast('暫不開放操作管理員')"
                      class="btn btn-soft-danger btn-icon btn-sm rounded-circle"
                    >
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

    <!-- 更新商品圖片 Modal -->
    <b-modal
      v-model="updateUserImageLogic.isShowModal"
      title="編輯圖片"
      ok-title="儲存"
      cancel-title="取消"
      @ok="updateUserImage"
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
      <img style="width: 100%; border-radius: 4px" :src="updateUserImageLogic.form.ImageURL" />
    </b-modal>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from '@/layouts/VerticalLayout.vue';
import PageTitle from '@/components/PageTitle.vue';
import { watch, ref, onMounted } from 'vue';
import { getUserListAPI, updateUserImageAPI, apiBase, assetUrl } from '@/api/index';
import { showToast } from '@/helpers/toast';

export interface User {
  ID: number;
  Email: string;
  Name: string;
  Password: string;
  Avatar: string;
  Role: string;
  Address: string;
  Phone: string;
  CreatedAt: string;
  UpdatedAt: string;
}

// 列表狀態
const searchName = ref('');
const pagination = ref({
  totalRows: 0,
  perPage: 10,
  currentPage: 1,
});

const customerList = ref<User[]>([]);

async function changePerPage(event: Event) {
  pagination.value.currentPage = 1;
  const target = event.target as HTMLSelectElement;
  pagination.value.perPage = Number(target.value);
  await setCustomerList();
}

async function setCustomerList() {
  const res = await getUserListAPI({
    CurrentPage: pagination.value.currentPage,
    PerPage: pagination.value.perPage,
    Name: searchName.value,
    Role: 'admin',
  });
  customerList.value = res.data?.List;
  console.log('🚀 ~ setCustomerList ~ customerList.value:', customerList.value);
  pagination.value.totalRows = res.data.Total;
}

onMounted(() => {
  setCustomerList();
});

watch(
  () => pagination.value.currentPage,
  async () => {
    await setCustomerList();
  }
);

// 更新使用者圖片
const fileInput = ref<HTMLInputElement>();
const triggerFileInput = () => {
  fileInput.value?.click();
};
const updateUserImageLogic = ref<{
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

function openUpdateUserImageModal(item: User) {
  updateUserImageLogic.value.isShowModal = true;
  updateUserImageLogic.value.form.ID = item.ID;
  updateUserImageLogic.value.form.ImageURL = `${assetUrl}/${item.Avatar}`;
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  const file = target.files![0];
  if (file) {
    updateUserImageLogic.value.form.UploadedFile = file;
    updateUserImageLogic.value.form.ImageURL = URL.createObjectURL(file);
  }
}

async function updateUserImage() {
  const formData = new FormData();
  formData.append('UploadedFile', updateUserImageLogic.value.form.UploadedFile!);
  const res = await updateUserImageAPI(formData, updateUserImageLogic.value.form.ID);
  showToast('更新成功');
  await setCustomerList();
}
</script>
