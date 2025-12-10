<template>
  <VerticalLayout>
    <PageTitle title="Order Details" subtitle="eCommerce"/>

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-body>
            <b-row class="align-items-start justify-content-between">
              <b-col lg="5">
                <p class="text-dark fw-medium fs-15 d-flex align-items-center gap-1 mb-2">
                  <Icon icon="solar:box-bold-duotone" class="text-danger"/>
                  Order
                  <i class="ti ti-arrow-right"></i>
                  <b-badge :variant="null" class="bg-light-subtle rounded-pill text-dark border fs-12 py-1 px-2">
                    #OC3142-EN
                  </b-badge>
                </p>

                <h3 class="mb-1 text-dark fw-semibold">Order ID : #OC3142-EN
                  <b-badge :variant="null" pill
                           class="bg-warning-subtle text-warning border border-warning fs-11 py-1 px-2 my-2 me-1">
                    Shipping
                  </b-badge>
                  <b-badge :variant="null" pill
                           class="bg-success-subtle rounded-pill text-success border border-success fs-11 py-1 px-2 my-2">
                    No Action Needed
                  </b-badge>
                </h3>

                <div class="d-flex flex-wrap align-items-center gap-2">
                  <p class="mb-0 fs-15">Order Date : 2 July 2024</p>
                  <div>|</div>
                  <div>
                    <p class="mb-0 fs-15 text-success fw-medium  d-flex align-items-center gap-1"><i
                        class="ti ti-plane-tilt"></i>Estimated delivery: July 9, 2024</p>
                  </div>
                </div>
              </b-col>

              <b-col lg="4" class="text-end">
                <div class="d-flex gap-2 flex-wrap justify-content-end my-2">
                  <a href="#!" class="btn btn-soft-primary">Invoice</a>
                  <a href="#!" class="btn btn-primary">Edit Details</a>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="3" lg="6">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex align-items-center justify-content-between">
              <div class="avatar-lg bg-light d-flex align-items-center justify-content-center rounded">
                <Icon icon="solar:delivery-bold-duotone" class="fs-32 text-primary"/>
              </div>
              <a href="#!" class="btn btn-primary btn-sm">Track Order</a>
            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between mt-5 pt-1">
              <div>
                <p class="fs-15 fw-medium mb-0 text-muted mb-1">Estimated Arrival</p>
                <p class="text-dark fw-semibold mb-0 fs-16">9 July 2024</p>
              </div>
              <div>
                <p class="fs-15 fw-medium mb-0 text-muted mb-1">Tracker ID</p>
                <p class="text-dark fw-semibold mb-0 fs-16">#TR73647</p>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="3" lg="6">
        <PaymentCard/>
      </b-col>

      <b-col xl="6" lg="12">
        <b-card no-body>
          <b-card-body>
            <div class="avatar-lg bg-light d-flex align-items-center justify-content-center rounded">
              <Icon icon="solar:scooter-bold-duotone" class="fs-32 text-primary"/>
            </div>
            <p class="my-3 text-dark fs-20 text-dark fw-medium">Be patient, package on deliver!</p>
            <div class="d-flex flex-wrap align-items-center mt-3 mb-2 justify-content-between gap-2">
              <div>
                <b-badge :variant="null"
                         class="bg-light-subtle rounded-pill text-dark border fs-13 fw-medium py-1 px-2 d-flex align-items-center gap-1">
                  <i class="ti ti-plane-tilt text-warning"></i> 613 Kuhl Avenue
                </b-badge>
              </div>
              <i class="ti ti-arrow-narrow-right fs-18 text-muted"></i>
              <div>
                <b-badge :variant="null"
                         class="bg-light-subtle rounded-pill text-dark border fs-13 fw-medium py-1 px-2 d-flex align-items-center gap-1">
                  <Icon
                      icon="solar:map-point-bold-duotone"
                      class="fs-18 text-warning"/>
                  1890 Uitsig St Grahamstad USA
                </b-badge>
              </div>
            </div>
            <b-progress variant="warning" :value="90" striped animated height="10px"/>
          </b-card-body>
        </b-card>
      </b-col>

    </b-row>

    <b-row>
      <b-col xl="4" lg="6">
        <Timeline/>
      </b-col>
      <b-col xl="4" lg="6">
        <ShipmentDetails/>
      </b-col>
      <b-col xl="4" lg="12">
        <b-card no-body>
          <b-card-body>
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe class="gmap_iframe rounded" width="100%" style="height: 264px;" frameborder="0" scrolling="no"
                        marginheight="0" marginwidth="0"
                        src="https://maps.google.com/maps?width=1980&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
              </div>
            </div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="8" lg="12">
        <b-card no-body>
          <b-card-header class="border-bottom">
            <b-card-title tag="h5" class="mb-0">Order Items</b-card-title>
          </b-card-header>
          <b-card-body>
            <b-row class="g-3">
              <b-col lg="6" v-for="(item,idx) in orderItems" :key="idx">
                <div class="d-flex align-items-center border border-dashed rounded p-2 gap-3">
                  <div class="rounded bg-light avatar-xl d-flex align-items-center justify-content-center">
                    <img :src="item.image" alt="" class="avatar-xl">
                  </div>
                  <div>
                    <a href="#!" class="text-dark fw-medium fs-15">{{ item.name }}</a>
                    <p class="text-muted fw-medium fs-14 my-1"><span class="text-dark">Price : </span>
                      {{ currency }}{{ item.price }}</p>
                    <p class="text-muted fw-medium fs-14 my-1"><span class="text-dark">Size : </span>
                      {{ item.size }}
                    </p>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col xl="4" lg="12">
        <b-card no-body>
          <b-card-header class="border-bottom">
            <b-card-title tag="h5" class="mb-0">Purchase Summary</b-card-title>
          </b-card-header>
          <b-card-body>
            <b-table-simple responsive borderless class="mb-0">
              <b-tbody>
                <b-tr>
                  <b-td class="px-0">
                    <p class="mb-0 fs-15 fw-medium"> Sub Total : </p>
                  </b-td>
                  <b-td class="text-end text-dark fs-14 fw-medium px-0">{{ currency }}1001.8</b-td>
                </b-tr>
                <b-tr>
                  <b-td class="px-0">
                    <p class="mb-0 fs-15 fw-medium">Discount : </p>
                  </b-td>
                  <b-td class="text-end text-dark fs-14 fw-medium px-0">-{{ currency }}120.00</b-td>
                </b-tr>
                <b-tr>
                  <b-td class="px-0">
                    <p class="mb-0 fs-15 fw-medium">Delivery Charge : </p>
                  </b-td>
                  <b-td class="text-end text-success fs-14 fw-medium px-0">Free</b-td>
                </b-tr>
                <b-tr>
                  <b-td class="px-0">
                    <p class="mb-0 fs-15 fw-medium">Estimated Tax (18.5%) : </p>
                  </b-td>
                  <b-td class="text-end text-dark fs-14 fw-medium px-0">{{ currency }}30.00</b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
          </b-card-body>
          <b-card-footer class="d-flex align-items-center justify-content-between border-top">
            <div>
              <p class="fw-medium text-dark mb-0 fs-15">Grand Amount</p>
            </div>
            <div>
              <p class="fw-medium fs-14 text-dark mb-0">{{ currency }}911.8</p>
            </div>
          </b-card-footer>
        </b-card>
      </b-col>
    </b-row>

    <div class="d-flex justify-content-end gap-2 text-end mb-3">
      <a href="#!" class="btn btn-primary">Contact To Seller</a>
      <a href="#!" class="btn btn-outline-primary">Invoice</a>
    </div>
  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import PaymentCard from "@/views/apps/e-commerce/orders/details/components/PaymentCard.vue";
import Timeline from "@/views/apps/e-commerce/orders/details/components/Timeline.vue";
import ShipmentDetails from "@/views/apps/e-commerce/orders/details/components/ShipmentDetails.vue";
import {Icon} from "@iconify/vue";
import {currency} from "@/helpers";
import {orderItems} from "@/views/apps/e-commerce/orders/details/components/data";

</script>