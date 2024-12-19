<template>
  <div>
    <!-- Hero Section -->
    <section
      class="relative bg-love h-screen bg-cover bg-center flex items-center justify-center text-white"
    >
      <div class="overlay absolute inset-0"></div>
      <div class="z-10 text-center px-6">
        <h1 class="text-4xl font-bold leading-tight mb-4">Our Love Story</h1>
        <p class="text-xl mb-6">A tale of two hearts intertwined in the most unexpected way</p>
        <a
          href="#story"
          class="text-lg font-semibold py-2 px-4 bg-pink-500 hover:bg-pink-600 rounded-lg transition-all"
          >Read Our Story</a
        >
      </div>
    </section>

    <!-- The Love Story Section -->
    <section id="story" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Our Journey Together</h2>
        <div class="flex flex-col lg:flex-row items-center">
          <div class="lg:w-1/2 mb-6 lg:mb-0">
            <img
              src="https://www.example.com/your-love-story-image.jpg"
              alt="Love Story Image"
              class="w-full rounded-lg shadow-lg"
            />
          </div>
          <div class="lg:w-1/2 lg:pl-12">
            <p class="text-lg text-gray-700 leading-relaxed mb-4">
              Emma and Liam met on a rainy evening. It started with a shared umbrella and quickly
              turned into an unexpected connection. Their bond grew over time, and what was once a
              chance encounter blossomed into a love that continues to grow stronger each day.
            </p>
            <p class="text-lg text-gray-700 leading-relaxed">
              Their story is a reminder that sometimes, love is found in the most unexpected places,
              at the most unexpected times.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-pink-500 text-white py-6 text-center">
      <p>&copy; 2024 Our Love Story. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LoveStory',
}
</script>

<style scoped>
/* Custom background for the Hero section */
.bg-love {
  background: url('https://www.example.com/your-hero-image.jpg') no-repeat center center/cover;
}

.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
