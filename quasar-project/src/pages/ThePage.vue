<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">
      <q-header>
        <q-toolbar class="bg-white q-py-md justify-between shadow-1">
          <q-btn flat dense round @click="toggleLeftDrawer" aria-label="Menu" icon="menu" class="text-dark" />
        </q-toolbar>
      </q-header>

   <!-- The drawer -->
   <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      class="bg-deep-orange-6 text-white shadow-1"
    >
      <q-list class="text-body1 text-weight-medium">
        <!-- DEIF Logo -->
        <div class="row justify-around q-pb-xl">
          <q-img clickable  @click="changeView('/')"
            class="q-ma-sm"
            src="~assets/TilbudLogobig.png"
            alt="Logo"
            style="width: 130px; height: 58px"
          />
        </div>

        <q-item v-if="inSubRoute" clickable @click="changeView('/')">
          <q-item-section avatar>
            <q-icon name="arrow_back" />
          </q-item-section>
          <q-item-section> Back </q-item-section>
        </q-item>

        <q-item clickable  >
          <q-item-section avatar>
            <q-icon name="loyalty" />
          </q-item-section>
          <q-item-section>Online outlets</q-item-section>
        </q-item>

        <q-item clickable  >
          <q-item-section avatar>
            <q-icon name="card_giftcard" />
          </q-item-section>
          <q-item-section>Deals</q-item-section>
        </q-item>

        <q-item clickable @click="changeView('/tilbud')">
          <q-item-section avatar>
            <q-icon name="savings" />
          </q-item-section>
          <q-item-section>Tilbud </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

      <router-view></router-view>

      <SmallFooterComponent></SmallFooterComponent>
    </q-layout>
  </template>

<script setup>
import { ref } from 'vue'
import SmallFooterComponent from '../components/SmallFooterComponent.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const leftDrawerOpen = ref(false)
const inSubRoute = ref(false)
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
// Add an event listener to detect when the user navigates back
window.onpopstate = function (event) {
  // Check if the user is in a nested view and navigating back
  if (event.state && inSubRoute.value === true) {
    // Update the value or perform any actions you need
    console.log('hey')
    inSubRoute.value = false
  } else {
    inSubRoute.value = true
  }
}

// Function is for SPA -- It Make sure that the new route is added to webhistory
// And will update the back button show/hide
const changeView = (goToRoute) => {
  if (goToRoute === '/') {
    inSubRoute.value = false
  } else {
    inSubRoute.value = true
  }
  router.push({ path: goToRoute })
}

</script>
