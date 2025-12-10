<template>
  <VerticalLayout>
    <PageTitle title="FAQs" subtitle="Pages"/>

    <b-row>
      <b-col lg="12">
        <b-card no-body>
          <b-card-body>
            <b-row class="justify-content-between g-3">
              <b-col xl="3" lg="6">
                <div>
                  <div class="avatar-lg bg-primary rounded d-flex align-items-center justify-content-center mb-3">
                    <i class="ti ti-question-mark fs-32 text-white"></i>
                  </div>
                  <h3 class="mb-1">Frequently Asked Questions</h3>
                  <p class="mb-3">Browse Through The Most Frequently Asked Questions</p>

                  <div class="d-flex align-items-center gap-2 border p-2 rounded mb-3 ms-0">
                    <div class="avatar-lg bg-light rounded d-flex align-items-center justify-content-center">
                      <i class="ti ti-search fs-23 text-primary"></i>
                    </div>
                    <div>
                      <a href="#!" class="fw-medium fs-15">Visit Help Center</a>
                      <p class="mb-0 mt-1">Check Out Tutorials</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-2 border p-2 rounded mb-3 ms-0">
                    <div class="avatar-lg bg-light rounded d-flex align-items-center justify-content-center">
                      <i class="ti ti-phone fs-23 text-primary"></i>
                    </div>
                    <div>
                      <a href="#!" class="fw-medium fs-15">Book a Demo</a>
                      <p class="mb-0 mt-1">1:1 Talk With A Tax Specialist.</p>
                    </div>
                  </div>
                  <div class="d-flex align-items-center gap-2 border p-2 rounded ms-0">
                    <div class="avatar-lg bg-light rounded d-flex align-items-center justify-content-center">
                      <i class="ti ti-brand-hipchat fs-23 text-primary"></i>
                    </div>
                    <div>
                      <a href="#!" class="fw-medium fs-15">Live Chat Support</a>
                      <p class="mb-0 mt-1">24/7 available. No chatbots.</p>
                    </div>
                  </div>
                  <div class="mt-3">
                    <a href="#!" class="btn btn-primary">Show More</a>
                  </div>
                </div>
              </b-col>
              <b-col xl="5" lg="6" class="text-center">
                <img :src="faq" alt="" class="img-fluid mt-3">
                <div class="app-search app-search-lg py-1 mt-3">
                  <input type="text" class="form-control rounded py-2" placeholder="Search...">
                  <i class="app-search-icon ti ti-search fs-18 text-muted"></i>
                </div>
                <div class="d-flex flex-wrap align-items-center gap-1 mt-2">
                  <h5 class="mb-0">Popular Searched : </h5>
                  <b-badge :variant="null" pill class="text-bg-light fw-normal px-2 py-1 fs-6">Apps</b-badge>
                  <b-badge :variant="null" pill class="text-bg-light fw-normal px-2 py-1 fs-6">Developers</b-badge>
                  <b-badge :variant="null" pill class="text-bg-light fw-normal px-2 py-1 fs-6">Repair</b-badge>
                  <b-badge :variant="null" pill class="text-bg-light fw-normal px-2 py-1 fs-6">Billing</b-badge>
                  <b-badge :variant="null" pill class="text-bg-light fw-normal px-2 py-1 fs-6">Payment</b-badge>
                </div>
              </b-col>
              <b-col xl="3" lg="6">
                <div>
                  <b-card-title tag="h4" class="mb-3">Write Your Question :</b-card-title>
                  <div class="border p-3 rounded bg-light-subtle">
                    <b-form>
                      <FormInput label="Your Name" placeholder="Full Name" group-class="mb-2"/>

                      <FormInput type="email" label="Email" placeholder="Email" group-class="mb-2"/>

                      <FormInput type="number" label="Phone number" placeholder="Number" group-class="mb-2"/>

                      <FormTextarea label="Enter Your Question" :rows="3" placeholder="Message"/>
                    </b-form>
                    <div class="mt-2">
                      <a href="#!" class="btn btn-primary w-100">Send</a>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="3">
        <div class="bg-body-secondary shadow rounded docs-nav">
          <ul class="nav bg-transparent flex-column fs-15 ps-2">
            <li class="nav-item">
              <a href="#general" class="nav-link">General</a>
            </li>
            <li class="nav-item">
              <a href="#integration" class="nav-link">Integration</a>
            </li>
            <li class="nav-item">
              <a href="#payment" class="nav-link">Payment</a>
            </li>
            <li class="nav-item">
              <a href="#shipping" class="nav-link">Shipping</a>
            </li>
            <li class="nav-item">
              <a href="#return" class="nav-link">Return</a>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col xl="9">
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h4" class="mb-3 anchor" id="general">General FAQ's</b-card-title>

            <b-accordion>
              <b-accordion-item v-for="(item,idx) in generalFAQs" :key="idx" :title="item.question" :visible="idx==0">
                {{ item.answer }}
              </b-accordion-item>
            </b-accordion>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h4" class="mb-3 anchor" id="integration">Integration</b-card-title>

            <b-accordion>
              <b-accordion-item v-for="(item,idx) in integrationFAQs" :key="idx" :title="item.question"
                                :visible="idx==0">
                {{ item.answer }}
              </b-accordion-item>
            </b-accordion>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h4" class="mb-3 anchor" id="payment">Payment</b-card-title>

            <b-accordion>
              <b-accordion-item v-for="(item,idx) in paymentFAQs" :key="idx" :title="item.question"
                                :visible="idx==0">
                {{ item.answer }}
              </b-accordion-item>
            </b-accordion>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h4" class="mb-3 anchor" id="shipping">Shipping</b-card-title>

            <b-accordion>
              <b-accordion-item v-for="(item,idx) in shippingFAQs" :key="idx" :title="item.question"
                                :visible="idx==0">
                {{ item.answer }}
              </b-accordion-item>
            </b-accordion>
          </b-card-body>
        </b-card>
        <b-card no-body>
          <b-card-body>
            <b-card-title tag="h4" class="mb-3 anchor" id="return">Return</b-card-title>

            <b-accordion>
              <b-accordion-item v-for="(item,idx) in returnFAQs" :key="idx" :title="item.question"
                                :visible="idx==0">
                {{ item.answer }}
              </b-accordion-item>
            </b-accordion>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>

  </VerticalLayout>
</template>

<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
import PageTitle from "@/components/PageTitle.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormTextarea from "@/components/form/FormTextarea.vue";

import faq from "@/assets/images/png/faq.png"
import {generalFAQs, integrationFAQs, paymentFAQs, returnFAQs, shippingFAQs} from "@/views/pages/faqs/components/data";
</script>