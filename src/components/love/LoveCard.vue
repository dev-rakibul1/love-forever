<template>
  <section>
    <SoulMateHeader
      title="Love in a Rainy Moment"
      description="Emma and Liam's paths crossed on a rainy evening, sparking an unexpected connection that grew into a deep and lasting love, proving that true love often begins in the most surprising ways."
    />
    <p>{{ someQuote }}</p>
    <LCart :quote="quote" />
    <!-- Passing the array of quotes to the child -->
  </section>
</template>

<script>
import LCart from '@/components/love/Cart.vue'
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'
import axios from 'axios'

export default {
  name: 'LoveCard',
  components: {
    SoulMateHeader,
    LCart,
  },

  data() {
    return {
      quote: [], // Initialize as an empty array
    }
  },
  async created() {
    try {
      const response = await axios.get('/fake.json')
      console.log('Quote Data:', response.data?.data)
      this.quote = response.data?.data // Assuming response.data is an array
    } catch (error) {
      console.error('Error fetching the quote:', error)
    }
  },
}
</script>

<style scoped>
/* Add styles here */
</style>
