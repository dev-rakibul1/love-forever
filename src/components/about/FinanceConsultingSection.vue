<template>
  <section class="relative bg-white md:mt-32 py-7">
    <div class="theme-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      <!-- Left Side: Images -->
      <div class="flex gap-4 justify-center lg:justify-start relative">
        <!-- Bottom Image -->
        <div class="w-full">
          <img
            src="@/assets/image/ind4-about-img.png"
            alt="Businessman"
            class="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <!-- Circular Badge -->
        <div class="about-badge hidden md:block">
          <RoundedBadge />
        </div>
      </div>

      <!-- Right Side: Text Content -->
      <div>
        <!-- Subtitle -->
        <p class="text-pink-500 font-semibold uppercase mb-2">Finance Consulting</p>

        <!-- Title -->
        <h2 class="text-xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 meta__title">
          A Heart That Belongs
        </h2>
        <!-- Description -->
        <p class="text-gray-600 mb-6">
          Globally engage cross-media leadership skills before cross-media innovation. Conveniently
          go forward collaboration and idea-sharing.
        </p>
        <!-- Features -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          <!-- Feature 1 -->
          <div class="flex items-center">
            <div
              class="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full text-pink-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0C5.372 0 0 5.372 0 12c0 5.899 4.245 10.834 9.817 11.843v-8.395H7.084v-3.448h2.733V9.763c0-2.707 1.607-4.213 4.064-4.213 1.178 0 2.41.212 2.41.212v2.637h-1.358c-1.337 0-1.751.832-1.751 1.683v2.031h3.126l-.5 3.448h-2.626v8.399C19.748 22.836 24 17.897 24 12c0-6.628-5.372-12-12-12z"
                />
              </svg>
            </div>
            <p class="ml-4 text-gray-700">Business Planning & Technologist</p>
          </div>
          <!-- Feature 2 -->
          <div class="flex items-center">
            <div
              class="w-12 h-12 bg-pink-100 flex items-center justify-center rounded-full text-pink-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5zm0 2c-3.59 0-10 1.794-10 5.4V22h20v-2.6c0-3.606-6.41-5.4-10-5.4z"
                />
              </svg>
            </div>
            <p class="ml-4 text-gray-700">Human Resources & Consulting</p>
          </div>
        </div>
        <!-- Buttons -->
        <div class="flex gap-4">
          <button
            class="px-6 py-2 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600"
          >
            More About
          </button>
          <a
            href="#"
            class="px-6 py-2 border border-pink-500 text-pink-500 font-semibold rounded-full hover:bg-pink-50"
          >
            Our Services
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RoundedBadge from '@/shared/batch/RoundedBadge.vue'

export default {
  name: 'FinanceConsultingSection',
  components: {
    RoundedBadge,
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.about-badge {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -70px;
  margin-top: -70px;
}
</style>
