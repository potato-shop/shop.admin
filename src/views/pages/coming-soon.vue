<template>
  <AuthLayout>
    <div>
      <h3 class="fw-semibold mb-2">We Are Launching Soon !</h3>
      <p class="text-muted mb-0">something exciting is coming your way soon</p>
    </div>

    <img :src="comingSoon" alt="Coming Soon Img" class="mb-2" height="200">

    <b-row class="text-center justify-content-center mb-4 g-2">
      <b-col cols="6" sm="4" md="3" class="col-lg">
        <div class="bg-body-secondary border border-primary-subtle border-dashed p-2 rounded">
          <h3 id="days" class="fw-bold text-primary fs-35">{{ days }}</h3>
          <p class="fw-semibold fs-12 mb-0">Days</p>
        </div>
      </b-col>
      <b-col cols="6" sm="4" md="3" class="col-lg">
        <div class="bg-body-secondary border border-primary-subtle border-dashed p-2 rounded">
          <h3 id="hours" class="fw-bold text-primary fs-35">{{ hours }}</h3>
          <p class="fw-semibold fs-12 mb-0">Hours</p>
        </div>
      </b-col>
      <b-col cols="6" sm="4" md="3" class="col-lg">
        <div class="bg-body-secondary border border-primary-subtle border-dashed p-2 rounded">
          <h3 id="minutes" class="fw-bold text-primary fs-35">{{ minutes }}</h3>
          <p class="fw-semibold fs-12 mb-0">Minutes</p>
        </div>
      </b-col>
      <b-col cols="6" sm="4" md="3" class="col-lg">
        <div class="bg-body-secondary border border-primary-subtle border-dashed p-2 rounded">
          <h3 id="seconds" class="fw-bold text-primary fs-35">{{ seconds }}</h3>
          <p class="fw-semibold fs-12 mb-0">Seconds</p>
        </div>
      </b-col>
    </b-row>

    <b-row class="row justify-content-center">
      <b-col cols="12">
        <div class="position-relative mb-3">
          <form class="m-0">
            <input type="email" id="email" name="email" class="form-control rounded border w-100 px-2 py-2"
                   placeholder="Enter Your Email">
            <button type="submit"
                    class="btn btn-primary position-absolute top-50 translate-middle-y translate-middle-x end-0 fw-semibold me-1">
              Subscribe
            </button>
          </form>
        </div>
      </b-col>
    </b-row>

    <p class="text-muted">Sign up now to get early launch notification of our launch date !</p>

    <div class="d-flex justify-content-center gap-2">
      <a href="#!" class="btn btn-danger d-inline-flex align-items-center justify-content-center rounded avatar-md "><i
          class="ti ti-brand-google-filled fs-20"></i></a>
      <a href="#!" class="btn btn-primary d-inline-flex align-items-center justify-content-center rounded avatar-md "><i
          class="ti ti-brand-facebook fs-20"></i></a>
      <a href="#!" class="btn btn-info d-inline-flex align-items-center justify-content-center rounded avatar-md "><i
          class="ti ti-brand-linkedin fs-20"></i></a>
      <a href="#!" class="btn btn-warning d-inline-flex align-items-center justify-content-center rounded avatar-md "><i
          class="ti ti-brand-github fs-20"></i></a>
      <a href="#!" class="btn btn-danger d-inline-flex align-items-center justify-content-center rounded avatar-md "><i
          class="ti ti-brand-youtube fs-20"></i></a>
    </div>

    <p class="mt-3 mb-0">
      {{ currentYear }}
      © {{ appName }} - By <span class="fw-bold text-decoration-underline text-uppercase text-reset fs-12">
      {{ author }}
    </span>
    </p>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";

import comingSoon from "@/assets/images/png/coming-soon.png"
import {appName, author, currentYear} from "@/helpers";
import {ref, onMounted} from 'vue'

const currentDate = new Date()
const countDown = currentDate.setDate(currentDate.getDate() + 5)
const timeRemaining = ref(countDown - currentDate.getTime())

const updateCountdown = () => {
  timeRemaining.value = countDown - new Date().getTime()
}

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const calculateTime = () => {
  days.value = Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24))
  hours.value = Math.floor((timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  minutes.value = Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60))
  seconds.value = Math.floor((timeRemaining.value % (1000 * 60)) / 1000)
}

onMounted(() => {
  const intervalId = setInterval(() => {
    updateCountdown()
    calculateTime()
  }, 1000)

  return () => clearInterval(intervalId)
})
</script>
