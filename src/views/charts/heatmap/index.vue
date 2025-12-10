<template>
  <VerticalLayout>
    <PageTitle title="HeatMap Charts" subtitle="Apex" />
    <b-row>
      <b-col xl="6">
        <UICard title="Basic Heatmap - Single Series">
          <div dir="ltr">
            <ApexChart id="basic-heatmap" class="apex-charts" :chart="basicHeatmapChart" />
          </div>
        </UICard>
      </b-col>
      <b-col xl="6">
        <UICard title="Heatmap - Multiple Series">
          <div dir="ltr">
            <ApexChart id="multiple-series-heatmap" class="apex-charts" :chart="multipleHeatmapChart" />
          </div>
        </UICard>
      </b-col>
    </b-row>
    <b-row>
      <b-col xl="6">
        <UICard title="Heatmap - Color Range">
          <div dir="ltr">
            <ApexChart id="color-range-heatmap" class="apex-charts" :chart="colorRangeHeatmapChart" />
          </div>
        </UICard>
      </b-col>
      <b-col xl="6">
        <UICard title="Heatmap - Range without Shades">
          <div dir="ltr">
            <ApexChart id="rounded-heatmap" class="apex-charts" :chart="rangeHeatmapChart" />
          </div>
        </UICard>
      </b-col>
    </b-row>
  </VerticalLayout>
</template>
<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import { basicHeatmapChart, multipleHeatmapChart, colorRangeHeatmapChart, rangeHeatmapChart } from "@/views/charts/heatmap/data";
</script>