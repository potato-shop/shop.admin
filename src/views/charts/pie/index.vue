<template>
  <VerticalLayout>
    <PageTitle title="Pie Charts" subtitle="Apex" />
    <b-row>
      <b-col xl="6">
        <UICard title="Simple Pie Chart">
          <ApexChart id="simple-pie" class="apex-charts" :chart="simplePie" />
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Simple Donut Chart">
          <ApexChart id="simple-donut" class="apex-charts" :chart="simpleDonut" />
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Monochrome Pie Chart">
          <ApexChart id="monochrome-pie" class="apex-charts" :chart="monochromePie" />
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Gradient Donut Chart">
          <ApexChart id="gradient-donut" class="apex-charts" :chart="gradientDonut" />
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Patterned Donut Chart">
          <ApexChart id="patterned-donut" class="apex-charts" :chart="patternedDonut" />
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Pie Chart with Image fill">
          <ApexChart id="image-pie" class="apex-charts" :chart="imageFill" />
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Donut Update">
          <apexchart type="donut" height="320" :options="donutUpdate" :series="series" class="apex-charts" />
          <div class="text-center mt-2">
            <b-button variant="primary" size="sm" id="randomize" @click="randomize"> RANDOMIZE</b-button> {{ ' ' }}
            <b-button variant="primary" size="sm" id="add" @click="appendData"> ADD</b-button> {{ ' ' }}
            <b-button variant="primary" size="sm" id="remove" @click="removeData"> REMOVE</b-button> {{ ' ' }}
            <b-button variant="primary" size="sm" id="reset" @click="reset"> RESET</b-button>
          </div>
        </UICard>
      </b-col>
    </b-row>
  </VerticalLayout>
</template>
<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import { ref } from "vue";
import { simplePie, simpleDonut, monochromePie, gradientDonut, patternedDonut, imageFill, donutUpdate } from "@/views/charts/pie/data";

const series = ref([44, 55, 13, 33]);

const appendData = () => {
  let arr = series.value.slice();
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  series.value = arr;
};

const removeData = () => {
  if (series.value.length === 1) return;
  let arr = series.value.slice();
  arr.pop();
  series.value = arr;
};

const randomize = () => {
  series.value = series.value.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  });
};

const reset = () => {
  series.value = [44, 55, 13, 33];
};
</script>