<template>
  <section class="bg-beige py-7">
    <div class="theme-container">
      <div class="flex justify-center items-center">
        <!-- Card Container -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-7"
        >
          <div
            v-for="qt in quote"
            :key="qt.id"
            @click="viewDetails(qt?.id)"
            class="relative p-8 rounded-lg shadow-lg overflow-hidden bg-white cursor-pointer"
          >
            <!-- Top Floral Decoration -->
            <img
              src="@/assets/image/card/flower-1.png"
              alt="Top Floral"
              class="absolute top-0 right-0 w-40 shape-1"
            />

            <div class="md:flex justify-between">
              <!-- Polaroid Photo -->
              <div class="relative bg-white rounded-lg shadow-lg transform -rotate-3">
                <img
                  :src="qt.imageUrl"
                  alt="Couple"
                  class="w-full h-full object-cover rounded-md"
                />
                <!-- Gold Pin -->
                <div
                  class="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-pink-500 rounded-full border-4 border-white"
                ></div>
              </div>

              <!-- Right Content -->
              <div class="ml-10 pt-12 md:pt-0">
                <!-- Heading -->
                <h2 class="text-xs font-semibold text-pink-500 tracking-wide mb-2 leading-none">
                  Happy 1st
                </h2>
                <h1 class="text-3xl font-bold text-pink-500 mb-6 meta__title">
                  {{ qt.title }}
                </h1>

                <!-- Description -->
                <p class="text-gray-600 text-xs leading-relaxed">
                  {{ truncateText(qt.des1) }}
                </p>

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
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
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

                <!-- date Link -->
                <div class="text-center">
                  <span class="text-pink-500 text-xs font-normal hover:underline text-center">
                    {{ formatDateWrapper(qt?.eventTime) }}</span
                  >
                </div>
              </div>
            </div>

            <!-- Bottom Floral Decoration -->
            <img
              src="@/assets/image/card/flower-2.png"
              alt="Bottom Floral"
              class="absolute bottom-0 left-0 w-40 shape-2"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-7">
      <HomeLastBanner />
    </div>
  </section>
</template>

<script>
import { formatDate } from '@/utils/DateConvert'
import HomeLastBanner from '../home/HomeLastBanner.vue'

export default {
  name: 'LCart',
  components: { HomeLastBanner },
  props: {
    quote: {
      type: Array,
      required: true, // The quote prop must be passed
    },
  },
  mounted() {
    // Log the prop value when the component is mounted
    console.log('Received quote:', this.quote)
  },

  methods: {
    // Method to truncate text to 120 characters
    truncateText(text) {
      if (text.length > 120) {
        return text.slice(0, 120) + '...'
      }
      return text
    },
    viewDetails(id) {
      this.$router.push({ name: 'CartDetails', params: { id } })
    },

    formatDateWrapper(date) {
      // Log or process if needed
      return formatDate(date)
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.bg-beige {
  background-color: #f2e9e2; /* Beige Background */
}

.shape-2 {
  left: -40px;
  bottom: -20px;
  transform: rotate(45deg);
}
.shape-1 {
  right: -40px;
  top: -33px;
  transform: rotate(45deg);
}
</style>
