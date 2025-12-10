<template>
  <VerticalLayout>
    <PageTitle title="Links" subtitle="Base UI" />
    <b-row>
      <b-col xl="6">
        <UICard title="Colored links">
          <p><router-link to="#" class="link-primary">Primary link</router-link></p>
          <p><router-link to="#" class="link-secondary">Secondary link</router-link></p>
          <p><router-link to="#" class="link-success">Success link</router-link></p>
          <p><router-link to="#" class="link-danger">Danger link</router-link></p>
          <p><router-link to="#" class="link-warning">Warning link</router-link></p>
          <p><router-link to="#" class="link-info">Info link</router-link></p>
          <p><router-link to="#" class="link-light">Light link</router-link></p>
          <p><router-link to="#" class="link-dark">Dark link</router-link></p>
          <p class="mb-0"><router-link to="#" class="link-body-emphasis">Emphasis link</router-link></p>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Link utilities">
          <p><router-link to="#" class="link-primary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Primary link</router-link></p>
          <p><router-link to="#" class="link-secondary text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Secondary link</router-link></p>
          <p><router-link to="#" class="link-success text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Success link</router-link></p>
          <p><router-link to="#" class="link-danger text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Danger link</router-link></p>
          <p><router-link to="#" class="link-warning text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Warning link</router-link></p>
          <p><router-link to="#" class="link-info text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Info link</router-link></p>
          <p><router-link to="#" class="link-light text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Light link</router-link></p>
          <p><router-link to="#" class="link-dark text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Dark link</router-link></p>
          <p><router-link to="#" class="link-body-emphasis text-decoration-underline link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover">Emphasis link</router-link></p>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Link opacity">
          <p><router-link class="link-opacity-10" to="#">Link opacity 10</router-link></p>
          <p><router-link class="link-opacity-25" to="#">Link opacity 25</router-link></p>
          <p><router-link class="link-opacity-50" to="#">Link opacity 50</router-link></p>
          <p><router-link class="link-opacity-75" to="#">Link opacity 75</router-link></p>
          <p class="mb-0"><router-link class="link-opacity-100" to="#">Link opacity 100</router-link></p>
        </UICard>
      </b-col>

      <b-col xl="6">
        <UICard title="Link hover opacity">
          <p><router-link class="link-opacity-10-hover" to="#">Link hover opacity 10</router-link></p>
          <p><router-link class="link-opacity-25-hover" to="#">Link hover opacity 25</router-link></p>
          <p><router-link class="link-opacity-50-hover" to="#">Link hover opacity 50</router-link></p>
          <p><router-link class="link-opacity-75-hover" to="#">Link hover opacity 75</router-link></p>
          <p class="mb-0"><router-link class="link-opacity-100-hover" to="#">Link hover opacity 100</router-link></p>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Underline color">
          <p><router-link to="#" class="text-decoration-underline link-underline-primary">Primary underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-secondary">Secondary underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-success">Success underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-danger">Danger underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-warning">Warning underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-info">Info underline</router-link></p>
          <p><router-link to="#" class="text-decoration-underline link-underline-light">Light underline</router-link></p>
          <p class="mb-0"><router-link to="#" class="text-decoration-underline link-underline-dark">Dark underline</router-link></p>
        </UICard>
      </b-col>
      <b-col xl="6">
        <UICard title="Underline opacity">
          <p><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-0" to="#">Underline opacity 0</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-10" to="#">Underline opacity 10</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-25" to="#">Underline opacity 25</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-50" to="#">Underline opacity 50</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-75" to="#">Underline opacity 75</router-link></p>
          <p class="mb-0"><router-link class="text-decoration-underline link-offset-2 link-underline link-underline-opacity-100" to="#">Underline opacity 100</router-link></p>
        </UICard>
      </b-col>
    </b-row>

    <b-row>
      <b-col xl="6">
        <UICard title="Underline offset">
          <p><router-link to="#">Default link</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-1" to="#">Offset 1 link</router-link></p>
          <p><router-link class="text-decoration-underline link-offset-2" to="#">Offset 2 link</router-link></p>
          <p class="mb-0"><router-link class="text-decoration-underline link-offset-3" to="#">Offset 3 link</router-link></p>
        </UICard>
      </b-col>
      <b-col xl="6">
        <UICard title="Hover variants">
          <router-link class="link-offset-2 link-offset-3-hover text-decoration-underline link-underline link-underline-opacity-0 link-underline-opacity-75-hover" to="#"> Underline opacity 0 </router-link>
        </UICard>
      </b-col>
    </b-row>
  </VerticalLayout>
</template>
<script setup lang="ts">
import VerticalLayout from "@/layouts/VerticalLayout.vue";
</script>