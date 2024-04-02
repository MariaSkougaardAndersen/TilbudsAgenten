<template>
    <q-layout view="lHh Lpr lFf" class="bg-white">

        <h4 class="text-center text-dark bg-info q-ma-none q-pa-xl">
     Gode tilbud
    </h4>

    </q-layout>
  </template>

<script>
import { ref } from 'vue'

import { useRouter } from 'vue-router' // Import useRouter from vue-router
export default {

  name: 'SalePage',

  setup () {
    const router = useRouter()

    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    return {
      router,
      leftDrawerOpen,
      toggleLeftDrawer

    }
  },
  data () {
    return {

    }
  },

  methods: {

  },
  mounted () {

  }
}
</script>
