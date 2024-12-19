<template>
  <section>
    <SectionBanner
      title="Story details view"
      d-color="#fff"
      t-color="#fff"
      desc="Two strangers cross paths, and despite life's obstacles, they fall deeply in love. Together, they navigate heartbreak, growth, and sacrifice, realizing their bond is unbreakable and transformative."
    />
    <div class="box-container mt-16">
      <div>
        <div v-if="item">
          <div>
            <h2 class="text-pink-500 text-3xl font-semibold">Post by-{{ item.author }}</h2>
            <span>{{ dateConvertMethod(item?.eventTime) }}</span>
          </div>
          <img
            :src="item.imageUrl"
            alt="Item image"
            class="w-full max-w-full max-h-[250px] object-cover"
          />
          <h2 class="text-center py-3 font-semibold text-xl">{{ item.title }}</h2>
          <!-- Divider with Leaf -->
          <div class="flex items-center justify-center my-1">
            <span class="w-16 h-px bg-pink-500 inline-block"></span>
            <span class="mx-2 text-lg s-meta-lave">
              <svg
                fill="#ff0000"
                height="64px"
                width="64px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512.289 512.289"
                xml:space="preserve"
                stroke="#ff0000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path
                        d="M477.051,72.678c-32.427-36.693-71.68-55.467-111.787-55.467c-45.227,0-85.333,27.307-109.227,72.533 c-23.04-45.227-64-72.533-108.373-72.533c-40.96,0-78.507,18.773-111.787,55.467c-39.253,43.52-61.44,141.653,15.36,215.04 c35.84,33.28,197.12,203.093,198.827,204.8s3.413,2.56,5.973,2.56s5.12-0.853,6.827-3.413 c1.707-1.707,163.84-170.667,198.827-204.8C537.637,213.478,515.451,115.344,477.051,72.678z M448.891,275.771 c-31.573,29.867-162.987,167.253-192.853,198.827c-29.867-32.427-160.427-168.96-192.853-199.68 c-69.12-65.707-49.493-151.893-14.507-190.293c29.867-32.427,64-49.493,98.987-49.493c42.667,0,81.067,29.867,100.693,79.36 c0.853,2.56,4.267,5.12,7.68,5.12s6.827-2.56,7.68-5.12c19.627-48.64,58.027-79.36,101.547-79.36 c35.84,0,69.12,16.213,98.133,50.347C497.531,123.024,517.157,210.064,448.891,275.771z"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span class="w-16 h-px bg-pink-500 inline-block"></span>
          </div>
          <p class="mt-3">{{ item.des1 }}</p>
          <p class="mt-3">{{ item.des2 }}</p>
          <p class="mt-3">{{ item.des3 }}</p>
          <p class="mt-3">{{ item.des4 }}</p>
          <p class="mt-3">{{ item.price }}</p>
        </div>
        <div v-else>
          <p>Item not found</p>
        </div>
      </div>
    </div>
    <div class="mt-7">
      <HomeLastBanner />
    </div>
  </section>
</template>

<script>
import SectionBanner from '@/shared/banner/SectionBanner.vue'
import { formatDate } from '@/utils/DateConvert'
import axios from 'axios'
import HomeLastBanner from '../home/HomeLastBanner.vue'

export default {
  props: ['id'], // Assuming 'id' is passed as a prop to the component
  name: 'CartDetails',
  components: {
    SectionBanner,
    HomeLastBanner,
  },
  data() {
    return {
      item: null, // Initialize item as null
    }
  },
  async created() {
    try {
      // Fetch data from fake.json
      const response = await axios.get('/fake.json')
      console.log('Quote Data:', response.data?.data)

      // Filter the quote data based on the 'id' prop
      const itemId = this.id // Access the 'id' prop
      this.item = response.data?.data.find((item) => item.id === itemId) // Filter by ID

      // Handle case where no item was found
      if (!this.item) {
        console.log('Item not found for ID:', itemId)
      }
    } catch (error) {
      console.error('Error fetching the quote:', error)
    }
  },

  methods: {
    dateConvertMethod(date) {
      return formatDate(date)
    },
  },
}
</script>

<style>
/* Add styles here if needed */
</style>
