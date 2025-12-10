<template>
  <VerticalLayout>
    <PageTitle title="Polar Area Charts" subtitle="Apex" />
    <b-row>
      <b-col xl="6">
        <UICard title="Basic Polar Area Chart">
          <div dir="ltr">
            <ApexChart id="basic-polar-area" class="apex-charts" :chart="basicPolarAreaChart" />
          </div>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Monochrome Polar Area">
          <div dir="ltr">
            <ApexChart id="monochrome-polar-area" class="apex-charts" :chart="monochromePolarAreaChart" />
          </div>
        </UICard>
      </b-col>
    </b-row>
  </VerticalLayout>
</template>
<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import { basicPolarAreaChart, monochromePolarAreaChart } from "@/views/charts/polar/data";
</script>