<template>
  <section class="bg bg-pink-500 text-white py-10 md:py-16 rounded-t-lg">
    <div class="container mx-auto px-6 lg:px-12">
      <!-- Top Content -->
      <div class="text-center lg:text-left">
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 meta__title">
          Perform Market Research to gain <br />
          Insights into Industry Trends
        </h2>
      </div>

      <!-- Stats and Button -->
      <div class="lg:flex lg:items-center lg:justify-between mt-8 text-white">
        <!-- Statistics -->
        <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 sm:gap-12">
          <!-- Statistic 1 -->
          <div class="text-center">
            <p class="text-3xl md:text-4xl text-white font-bold">12K+</p>
            <p class="text-sm md:text-base text-white">Total Projects Completed</p>
          </div>
          <!-- Divider -->
          <div class="hidden sm:block h-8 border-l border-white opacity-50"></div>
          <!-- Statistic 2 -->
          <div class="text-center">
            <p class="text-3xl md:text-4xl text-white font-bold">950+</p>
            <p class="text-sm md:text-base text-white">Satisfied Active Customers</p>
          </div>
          <!-- Divider -->
          <div class="hidden sm:block h-8 border-l border-white opacity-50"></div>
          <!-- Statistic 3 -->
          <div class="text-center">
            <p class="text-3xl md:text-4xl text-white font-bold">4.7★</p>
            <p class="text-sm md:text-base text-white">Average Client Ratings</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <button
            class="bg-pink-500 hover:bg-pink-600 text-white font-semibold text-sm md:text-base py-3 px-6 rounded-full"
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MarketResearchSection',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.bg {
  background: url('@/assets/image/couple-7.jpeg');
  background-color: rgba(0, 0, 0, 0);
  background-origin: initial;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover !important;
  position: relative;
  z-index: 1;
  background-attachment: fixed;
}
.bg::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: #000;
  opacity: 0.5;
}
</style>
