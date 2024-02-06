<script setup>
import { useStore } from '@/stores/store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const store = useStore()
const router = useRouter()

const instrumento = store.instrumentoSelected
const nombre = ref('Alberto')
const nombreRegex = /[A-Za-z]/

function comprobarInput() {
  if (nombreRegex.test(nombre)) {
    store.nombreUser = nombre
    router.push({ path: '/tercera' })
  }
}
</script>

<template>
  <h1>Introduce tus datos</h1>
  <h4>Tu instrumento: {{ instrumento.name }}</h4>
  <input type="text" v-model="nombre" />
  <p>{{ nombre }}</p>
  <button type="button" @click="comprobarInput()">Enviar</button>
</template>
