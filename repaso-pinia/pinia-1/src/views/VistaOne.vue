<script setup>
import { useStore } from '@/stores/store'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const instrumentos = [
  { name: 'Guitarra', value: 'guitarra', type: 'Cuerda' },
  { name: 'Piano', value: 'piano', type: 'Cuerda' },
  { name: 'Oboe', value: 'oboe', type: 'Aire' },
  { name: 'Maracas', value: 'maracas', type: 'Percusión' },
  { name: 'Ocarina', value: 'ocarina', type: 'Aire' }
]

function saveInstrumento(instrumento) {
  store.instrumentoSelected = instrumento
  router.push({ path: `/segunda` })
}
</script>

<template>
  <main>
    <h1>Tienda de Música</h1>
    <table>
      <thead>
        <th>Instrumento</th>
        <th>Tipo</th>
      </thead>
      <tbody>
        <tr v-for="instrumento of instrumentos">
          <td @click="saveInstrumento(instrumento)">{{ instrumento.name }}</td>
          <td>{{ instrumento.type }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
