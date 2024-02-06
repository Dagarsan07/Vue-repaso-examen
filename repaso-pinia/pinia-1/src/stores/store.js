import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('store', () => {
  let instrumentoSelected = ref({})
  let nombreUser = ref('')
})
