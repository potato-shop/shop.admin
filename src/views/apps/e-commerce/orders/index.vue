<template>
  <VerticalLayout>
    <PageTitle title="訂單列表" subtitle="eCommerce" />

    <b-row>
      <b-col cols="12">
        <b-card no-body>
          <b-card-header class="border-bottom border-light">
            <b-row class="justify-content-between gy-2 position-relative">
              <b-col lg="3">
                <div class="position-relative">
                  <input
                    v-model="searchName"
                    @keyup.enter="setOrderList"
                    type="text"
                    class="form-control ps-4"
                    placeholder="搜尋收件人名稱"
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
                <b-th>訂單 ID</b-th>
                <b-th>收件人信名</b-th>
                <b-th>收件人電話</b-th>
                <b-th>收件地址</b-th>
                <b-th>訂單狀態</b-th>
                <b-th>建立時間</b-th>
                <b-th class="text-center" style="width: 120px">操作</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr v-for="(item, idx) in orderList" :key="idx">
                <b-td class="ps-3">
                  <b-form-checkbox />
                </b-td>

                <b-td>{{ item.ID }}</b-td>
                <b-td>{{ item.RecipientName }}</b-td>
                <b-td>{{ item.RecipientPhone }}</b-td>
                <b-td>{{ item.RecipientAddress }}</b-td>
                <b-td>{{ item.Status }}</b-td>
                <b-td>{{ formatDateTime(item.CreatedAt) }}</b-td>
                <b-td class="pe-3">
                  <div class="hstack gap-1 justify-content-end">
                    <!-- 更新 -->
                    <div @click="openUpdateModal(item)" class="btn btn-soft-success btn-icon btn-sm rounded-circle">
                      <i class="ti ti-edit fs-16"></i>
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

    <!-- 編輯種類 Modal -->
    <b-modal
      v-model="updateLogic.isShowModal"
      title="編輯訂單"
      title-tag="h4"
      ok-title="儲存"
      cancel-title="取消"
      @ok="updateOrder"
    >
      <div class="mb-3">
        <p style="color: #4c4c5c; font-weight: 500; margin-bottom: 8px">訂單狀態</p>
        <VueSelect v-model="updateLogic.form.Status" :options="updateLogic.statusOptions" placeholder="請選擇狀態" />
      </div>
    </b-modal>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from '@/layouts/VerticalLayout.vue';
import PageTitle from '@/components/PageTitle.vue';
import { watch, ref, onMounted } from 'vue';
import { updateOrderAPI, getOrderListAPI } from '@/api/index';
import { formatDateTime } from '@/helpers/formatDate';
import VueSelect from 'vue3-select-component';
import { showToast } from '@/helpers/toast';

export interface Order {
  ID: number;
  UserID: number;
  RecipientName: string;
  RecipientPhone: string;
  RecipientEmail: string;
  RecipientAddress: string;
  TotalAmount: number;
  PaymentMethod: string;
  Status: string;
  CreatedAt: string;
  UpdatedAt: string;
  OrderItems: OrderItem[];
}

export interface OrderItem {
  ID: number;
  OrderID: number;
  ProductID: number;
  Quantity: number;
  UnitPrice: number;
  CreatedAt: string;
  UpdatedAt: string;
  Product: ProductType;
}

export interface ProductType {
  ID: number;
  CategoryID: number;
  Name: string;
  Description: string;
  Price: number;
  StockQuantity: number;
  ImageURL: string;
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
const orderList = ref<Order[]>([]);

async function setOrderList() {
  const res = await getOrderListAPI({
    currentPage: pagination.value.currentPage,
    perPage: pagination.value.perPage,
  });
  console.log('🚀 ~ setOrderList ~ res:', res.data);
  orderList.value = res.data?.List;
  pagination.value.totalRows = res.data.Total;
}

onMounted(() => {
  setOrderList();
});

watch(
  () => pagination.value.currentPage,
  async () => {
    await setOrderList();
  }
);

// 編輯種類
const updateLogic = ref({
  form: {
    Status: '',
    OrderID: 0,
  },
  statusOptions: [
    { label: 'pending', value: 'pending' },
    { label: 'confirmed', value: 'confirmed' },
    { label: 'processing', value: 'processing' },
    { label: 'shipped', value: 'shipped' },
    { label: 'delivered', value: 'delivered' },
    { label: 'completed', value: 'completed' },
    { label: 'cancelled', value: 'cancelled' },
    { label: 'refunded', value: 'refunded' },
  ],
  isShowModal: false,
});

function openUpdateModal(order: Order) {
  updateLogic.value.form.OrderID = order.ID;
  updateLogic.value.form.Status = order.Status;
  updateLogic.value.isShowModal = true;
}

async function updateOrder(event: any) {
  try {
    event.preventDefault();
    await updateOrderAPI(updateLogic.value.form);
    updateLogic.value.isShowModal = false;
    showToast('更新成功');
    await setOrderList();
  } catch (err) {
    console.log('🚀 ~ updateOrder ~ err:', err);
  }
}
</script>
