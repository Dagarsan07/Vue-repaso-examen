<script setup>
import { useStore } from '@/stores/store'

const store = useStore()

const instrumento = store.instrumentoSelected
const usuario = store.nombreUser
</script>

<template>
  <h1>Resumen</h1>
  <table>
    <thead>
      <th>Persona</th>
      <th>Instrumento</th>
    </thead>
    <tbody>
      <tr>
        <td>{{ usuario }}</td>
        <td>{{ instrumento.name }}</td>
      </tr>
    </tbody>
  </table>
</template>
