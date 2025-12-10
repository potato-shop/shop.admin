<template>
  <b-card no-body>
    <b-card-body>
      <div class="d-flex flex-wrap align-items-center justify-content-between gap-2">
        <div class="avatar-lg bg-light d-flex align-items-center justify-content-center rounded  flex-shrink-0">
          <img :src="mastercard" alt="Card Img" class="img-fluid">
        </div>
        <div>
          <p class="text-dark fw-medium fs-16 mb-1">Master Card</p>
          <p class="mb-0">**** **** **** 3541 </p>
        </div>
        <div class="ms-auto">
          <b-badge :variant="null"
                   class="bg-success-subtle rounded-pill text-success border border-success fs-11 py-1 px-2  my-2">Paid
          </b-badge>
        </div>
      </div>
      <div class="d-flex flex-wrap align-items-center justify-content-between mt-5 pt-1">
        <div>
          <p class="fs-15 fw-medium mb-0 text-muted mb-1">Transaction ID</p>
          <p class="text-dark fw-semibold mb-0 fs-16">TR626788-MR</p>
        </div>
        <div>
          <p class="fs-15 fw-medium mb-0 text-muted mb-1">Payment Method</p>
          <p class="text-dark fw-semibold mb-0 fs-16">Master Card</p>
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import mastercard from "@/assets/images/cards/mastercard.svg"
</script>