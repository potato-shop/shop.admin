<template>
  <VerticalLayout>
    <PageTitle title="種類列表" subtitle="eCommerce" />

    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="border-bottom border-light">
            <b-row class="justify-content-between gy-2 position-relative">
              <b-col lg="3">
                <div class="position-relative">
                  <input
                    v-model="searchName"
                    @keyup.enter="setCategoryList"
                    type="text"
                    class="form-control ps-4"
                    placeholder="搜尋名稱"
                  />
                  <i class="ti ti-search position-absolute top-50 translate-middle-y ms-2"></i>
                </div>
              </b-col>

              <b-col sm="6" xl="4" xxl="3">
                <b-form>
                  <div class="d-flex flex-wrap flex-lg-nowrap gap-2">
                    <div class="flex-grow-1">
                      <ChoicesSelect @change="changePerPage" id="select" class="my-1 my-md-0 me-sm-3">
                        <option>10</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>50</option>
                      </ChoicesSelect>
                    </div>
                    <b-button type="button" variant="primary" @click="openAddModal">
                      <i class="ti ti-plus me-1"></i>新增種類
                    </b-button>
                  </div>
                </b-form>
              </b-col>
            </b-row>
          </b-card-header>

          <b-table-simple responsive hover class="text-nowrap mb-0">
            <b-thead class="bg-light-subtle">
              <b-tr>
                <b-th class="ps-3" style="width: 50px">
                  <b-form-checkbox />
                </b-th>
                <b-th>名稱</b-th>
                <b-th>描述</b-th>
                <b-th>建立時間</b-th>
                <b-th>更新時間</b-th>
                <b-th class="text-center" style="width: 120px">操作</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, idx) in categoryList" :key="idx">
                <b-td class="ps-3">
                  <b-form-checkbox />
                </b-td>

                <b-td>{{ item.Name }}</b-td>
                <b-td>{{ item.Description }}</b-td>
                <b-td>{{ formatDateTime(item.CreatedAt) }}</b-td>
                <b-td>{{ formatDateTime(item.UpdatedAt) }}</b-td>
                <b-td class="pe-3">
                  <div class="hstack gap-1 justify-content-end">
                    <!-- 更新 -->
                    <div @click="openUpdateModal(item)" class="btn btn-soft-success btn-icon btn-sm rounded-circle">
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

    <!-- 新增種類 Modal -->
    <b-modal
      v-model="addLogic.isShowModal"
      title="新增種類"
      title-tag="h4"
      ok-title="新增"
      cancel-title="取消"
      @ok="addCategory"
    >
      <div class="mb-3">
        <label for="name" class="form-label">名稱</label>
        <input v-model="addLogic.form.Name" class="form-control" id="name" required placeholder="酷玩意兒" />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">介紹</label>
        <textarea
          v-model="addLogic.form.Description"
          class="form-control"
          id="description"
          required
          placeholder="非常酷的玩意兒"
        ></textarea>
      </div>
    </b-modal>

    <!-- 編輯種類 Modal -->
    <b-modal
      v-model="updateLogic.isShowModal"
      title="編輯種類"
      title-tag="h4"
      ok-title="儲存"
      cancel-title="取消"
      @ok="updateCategory"
    >
      <div class="mb-3">
        <label for="name" class="form-label">名稱</label>
        <input v-model="updateLogic.form.Name" class="form-control" id="name" required placeholder="酷玩意兒" />
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">介紹</label>
        <textarea
          v-model="updateLogic.form.Description"
          class="form-control"
          id="description"
          required
          placeholder="非常酷的玩意兒"
        ></textarea>
      </div>
    </b-modal>

    <!-- 刪除 -->
    <b-modal
      v-model="deleteLogic.isShowModal"
      title="刪除種類"
      ok-title="刪除"
      cancel-title="取消"
      :noCloseOnBackdrop="true"
      @ok="deleteCategory"
    >
      將刪除種類『{{ deleteLogic.form.Name }}』
    </b-modal>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from '@/layouts/VerticalLayout.vue';
import PageTitle from '@/components/PageTitle.vue';
import { watch, ref, onMounted } from 'vue';
import ChoicesSelect from '@/components/ChoicesSelect.vue';
import { addCategoryAPI, updateCategoryAPI, getCategoryListAPI, deleteCategoryAPI } from '@/api/index';
import { formatDateTime } from '@/helpers/formatDate';
import { showToast } from '@/helpers/toast';

interface Category {
  ID: number;
  Name: string;
  Description: string;
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
const categoryList = ref<Category[]>([]);
async function setCategoryList() {
  console.log('called', pagination.value.perPage);
  const res = await getCategoryListAPI({
    currentPage: pagination.value.currentPage,
    perPage: pagination.value.perPage,
    name: searchName.value,
  });
  categoryList.value = res.data?.List;
  pagination.value.totalRows = res.data.Total;
}
async function changePerPage(event: Event) {
  pagination.value.currentPage = 1;
  const target = event.target as HTMLSelectElement;
  pagination.value.perPage = Number(target.value);
  await setCategoryList();
}

onMounted(() => {
  setCategoryList();
});

watch(
  () => pagination.value.currentPage,
  async () => {
    await setCategoryList();
  }
);

// 新增種類
const addLogic = ref({
  form: {
    Name: '',
    Description: '',
  },
  isShowModal: false,
});

function openAddModal() {
  addLogic.value.form = { Name: '', Description: '' };
  addLogic.value.isShowModal = true;
}

async function addCategory(event: any) {
  try {
    event.preventDefault();
    await addCategoryAPI(addLogic.value.form);
    addLogic.value.isShowModal = false;
    showToast('新增成功');
    await setCategoryList();
  } catch (err) {
    console.log('🚀 ~ addCategory ~ err:', err);
  }
}

// 編輯種類
const updateLogic = ref({
  form: {
    CategoryID: 0,
    Name: '',
    Description: '',
  },
  isShowModal: false,
});

function openUpdateModal(category: Category) {
  console.log('🚀 ~ openUpdateModal ~ category:', category);
  updateLogic.value.form.CategoryID = category.ID;
  updateLogic.value.form.Name = category.Name;
  updateLogic.value.form.Description = category.Description;
  updateLogic.value.isShowModal = true;
}

async function updateCategory(event: any) {
  try {
    event.preventDefault();
    await updateCategoryAPI(updateLogic.value.form);
    updateLogic.value.isShowModal = false;
    showToast('更新成功');
    await setCategoryList();
  } catch (err) {
    console.log('🚀 ~ addCategory ~ err:', err);
  }
}

// 刪除種類
const deleteLogic = ref<{ form: Partial<Category>; isShowModal: boolean }>({
  form: {},
  isShowModal: false,
});

function openDeleteModal(category: Category) {
  deleteLogic.value.form = category;
  deleteLogic.value.isShowModal = true;
}

async function deleteCategory(event: any) {
  event.preventDefault();
  await deleteCategoryAPI(deleteLogic.value.form.ID as number);
  showToast('已刪除');
  await setCategoryList();
  deleteLogic.value.isShowModal = false;
}
</script>
