<template>
  <section class="bg-white py-12">
    <div class="theme-container">
      <SoulMateHeader title="Step to Find Your Soul Mate" />
      <div class="container mx-auto px-4">
        <!-- Grid Layout -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <!-- Card 1 -->
          <div class="feature-card">
            <div class="flex justify-center mb-4">
              <img
                src="@/assets/image/01.png"
                alt="Create Profile"
                class="w-24 h-24 rounded-full bg-yellow-200 p-4"
              />
            </div>
            <h3 class="text-lg font-bold uppercase mb-2">Create Profile</h3>
            <div class="separator mb-3"></div>
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis
            </p>
          </div>

          <!-- Card 2 -->
          <div class="feature-card">
            <div class="flex justify-center mb-4">
              <img
                src="@/assets/image/01.png"
                alt="Find Match"
                class="w-24 h-24 rounded-full bg-pink-200 p-4"
              />
            </div>
            <h3 class="text-lg font-bold uppercase mb-2">Find Match</h3>
            <div class="separator mb-3"></div>
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis
            </p>
          </div>

          <!-- Card 3 -->
          <div class="feature-card">
            <div class="flex justify-center mb-4">
              <img
                src="@/assets/image/01.png"
                alt="Start Dating"
                class="w-24 h-24 rounded-full bg-red-800 p-4"
              />
            </div>
            <h3 class="text-lg font-bold uppercase mb-2">Start Dating</h3>
            <div class="separator mb-3"></div>
            <p class="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'
export default {
  name: 'FeaturesSection',
  components: {
    SoulMateHeader,
  },
}
</script>

<style scoped>
/* Separator styling */
.separator {
  width: 40px;
  height: 2px;
  background: linear-gradient(to right, #d81919, #b8559a);
  margin: 0 auto;
}
</style>
