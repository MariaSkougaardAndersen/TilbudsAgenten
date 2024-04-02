<template>
    <q-layout view="lHh Lpr lFf" class="">
        <h4 class="text-center  q-mt-xl q-pt-xl q-pb-xl q-mt-xl q-mb-lg">
      Beregn tilbudsprisen
    </h4>
    <div
      class="fit row justify-center content-start text-weight-medium text-dark"
    >
    <q-input
            outlined
            bottom-slots
            v-model.number="procentbesparelsen"
            type="number"
            class="col-10 col-md-5 q-mb-xl"
          >
            <template v-slot:prepend>
              <q-icon name="percent" />
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="procentbesparelsen = ''" class="cursor-pointer" />
            </template>
            <template v-slot:hint>
              Procenten du sparer
            </template>
          </q-input>
    </div>
    <div
      class="fit row justify-center content-start text-weight-medium text-dark"
    >

    <q-input
            outlined
            bottom-slots
            v-model.number="førprisen"
            type="number"
            class="col-10 col-md-5 q-mb-xl"
          >
            <template v-slot:prepend>
              <q-icon name="local_offer"/>
            </template>
            <template v-slot:append>
              <q-icon name="close" @click="førprisen = ''" class="cursor-pointer" />
            </template>

            <template v-slot:hint>
              Førprisen på varen
            </template>
          </q-input>
    </div>
    <div  class="fit row justify-center content-start  text-weight-medium text-dark">
      <div class="col-10 col-md-5 ">
         <h6 class="q-mb-xl">Tilbudsprisen: {{ calculateNewPrice().toFixed(2) }} kr.</h6>
         <h6 class="q-mb-xl">Penge sparret: {{  calculateSavings().toFixed(2)}} kr.</h6>
      </div>
    </div>
    </q-layout>
  </template>

<script>
import { ref } from 'vue'

import { useRouter } from 'vue-router' // Import useRouter from vue-router
export default {

  name: 'HomePage',

  setup () {
    const router = useRouter()

    const procentbesparelsen = ref(0)
    const førprisen = ref(0)

    const leftDrawerOpen = ref(false)

    function toggleLeftDrawer () {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function calculateNewPrice () {
      if (procentbesparelsen.value !== null && førprisen.value !== null) {
        return førprisen.value * (1 - procentbesparelsen.value / 100)
      }
      return null
    }

    function calculateSavings () {
      if (procentbesparelsen.value !== null && førprisen.value !== null) {
        return førprisen.value * (procentbesparelsen.value / 100)
      }
      return null
    }

    return {
      router,
      leftDrawerOpen,
      toggleLeftDrawer,
      procentbesparelsen,
      førprisen,
      calculateNewPrice,
      calculateSavings

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
