<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <p>{{ quote }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      quote: '', // Initialize the quote as an empty string
    }
  },
  async created() {
    try {
      const response = await axios.get('/fake.json')
      console.log('Quote Data:', response.data)
      this.quote = response.data.quote
    } catch (error) {
      console.error('Error fetching the quote:', error)
    }
  },
}
</script>

<style>
/* Add your styles here */
</style>
