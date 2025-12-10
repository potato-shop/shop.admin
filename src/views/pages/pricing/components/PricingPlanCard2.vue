<template>
  <b-card no-body class="card-pricing h-100">
    <b-card-header class="p-3 border-bottom border-dashed">
      <h3 class=" fw-semibold">{{ plan.name }}</h3>
      <h5 class="mt-2 mb-0 text-muted fw-normal">{{ plan.description }}</h5>
    </b-card-header>
    <b-card-body class="p-3">
      <div class="d-flex align-items-center gap-2">
        <span class="text-muted fs-3 fw-bold">{{ currency }}</span>
        <h1 class="display-5  fw-bold mb-0"> {{ plan.price }}</h1>
        <div class="d-block">
          <p class=" fw-semibold fs-5 mb-0">One-time payment</p>
          <p class="text-muted fw-semibold fs-5 mb-0">plus local taxes</p>
        </div>
      </div>
      <template v-if="plan.features">
        <h4 class="text-primary fw-semibold my-3">What's Included :</h4>
        <ul class="d-flex flex-column gap-2 list-unstyled fs-16 fw-medium">
          <li v-for="feature in plan.features">
            <i class="ti ti-checks text-primary fs-4 align-middle me-1"></i>
            {{ feature.label }}
          </li>
        </ul>
      </template>
    </b-card-body>

    <b-card-footer>
      <a href="#!" :class="plan.isPopular ? 'btn-primary' : 'btn-outline-primary' " class="btn w-100">Buy Now</a>
    </b-card-footer>

    <span v-if="plan.isPopular"
          class="position-absolute top-0 translate-middle start-50 bg-primary-subtle px-3 py-1 text-primary rounded-pill fw-semibold">
      Most Popular
    </span>
  </b-card>
</template>

<script setup lang="ts">
import type {PropType} from "vue";
import type {PricingPlanType} from "@/views/pages/pricing/components/data";
import {currency} from "@/helpers";

defineProps({
  plan: {
    type: Object as PropType<PricingPlanType>,
    required: true
  }
})
</script>