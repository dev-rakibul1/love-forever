<template>
  <section class="bg-pink-50 py-12">
    <div
      class="theme-container mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-8 items-center flex-row-reverse"
    >
      <!-- Right: Content -->
      <div>
        <h3 class="text-pink-500 font-semibold text-sm uppercase mb-2">Why Choose Us</h3>
        <!-- Title -->
        <h2 class="text-xl md:text-6xl font-bold text-gray-800 leading-tight mb-4 meta__title">
          A Heart That Belongs
        </h2>
        <p class="text-gray-600 mb-6">
          Globally engage cross-media leadership skills before cross-media innovation develops
          standardized platforms without robust applications. Conveniently go forward collaboration
          and idea-sharing.
        </p>
        <!-- Features Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-center gap-2 bg-white p-4 shadow rounded-lg hover:bg-pink-100"
          >
            <div class="w-10 h-10 bg-pink-200 flex items-center justify-center rounded-full">
              <i class="fas fa-check text-pink-500"></i>
            </div>
            <span class="text-gray-800 font-medium">{{ feature }}</span>
          </div>
        </div>
        <!-- Watch Video Button -->
        <button
          class="flex items-center gap-3 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow hover:bg-pink-600 transition"
        >
          <i class="fas fa-play text-lg"></i>
          Watch Video
        </button>
      </div>
      <!-- Left: Images -->
      <div class="relative flex flex-col gap-4">
        <!-- Bottom Image -->
        <img
          src="@/assets/image/couple-6.jpeg"
          alt="Happy Client"
          class="w-full rounded-xl shadow-lg"
        />
        <!-- Dots Decorations -->
        <div class="absolute -top-6 left-4">
          <svg width="40" height="40" fill="pink">
            <circle cx="10" cy="10" r="2" />
            <circle cx="20" cy="10" r="2" />
            <circle cx="30" cy="10" r="2" />
            <circle cx="10" cy="20" r="2" />
            <circle cx="20" cy="20" r="2" />
            <circle cx="30" cy="20" r="2" />
            <circle cx="10" cy="30" r="2" />
            <circle cx="20" cy="30" r="2" />
            <circle cx="30" cy="30" r="2" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CreativeSolutions',
  data() {
    return {
      features: [
        'Professional Team Member',
        'Implements Business',
        'Lifetime Free Services',
        'Affordable Pricing Plans',
      ],
    }
  },
}
</script>

<style scoped>
/* Font Awesome Support */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
</style>
