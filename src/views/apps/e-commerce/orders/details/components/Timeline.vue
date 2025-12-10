<template>
  <b-card no-body>
    <b-card-header class="border-bottom">
      <b-card-title tag="h5" class="mb-0">Timeline</b-card-title>
    </b-card-header>
    <b-card-body>
      <b-table-simple responsive borderless class="mb-0">
        <b-tbody>
          <b-tr>
            <b-td class="px-0">
              <p class="mb-1 fs-14 fw-medium">4 July (Now)</p>
              <p class="mb-0 fs-14 fw-medium">06:00</p>
            </b-td>
            <b-td class="fs-14 fw-medium">
              <p class="mb-1 fs-14 fw-medium">Your package is packed by the courier</p>
              <p class="mb-0 fs-14 fw-medium text-muted">613 Kuhl Avenue Jennifer Lane</p>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td class="px-0">
              <p class="mb-1 fs-14 fw-medium text-muted">2 July</p>
              <p class="mb-0 fs-14 fw-medium text-muted">10:00</p>
            </b-td>
            <b-td>
              <p class="mb-1 fs-14 fw-medium text-muted">Shipment has been created</p>
              <p class="mb-0 fs-14 fw-medium text-muted">613 Kuhl Avenue</p>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td class="px-0">
              <p class="mb-1 fs-14 fw-medium text-muted">2 July</p>
              <p class="mb-0 fs-14 fw-medium text-muted">04:00</p>
            </b-td>
            <b-td>
              <p class="mb-1 fs-14 fw-medium text-muted">Order Placed</p>
              <p class="mb-0 fs-14 fw-medium text-muted">Coderthemes
                <Icon icon="solar:verified-check-bold" class="align-middle text-success"/>
              </p>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-card-body>
  </b-card>
</template>

<script setup lang="ts">
import {Icon} from "@iconify/vue";
</script>