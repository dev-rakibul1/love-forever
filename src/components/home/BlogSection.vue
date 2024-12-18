<template>
  <section class="py-12 bg-white">
    <div class="theme-container">
      <SoulMateHeader
        title="Our Recent love story"
        description="Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.

"
      />

      <div
        class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-3 justify-center gap-6"
      >
        <!-- First Blog Card -->
        <div class="relative max-w-sm w-full bg-white rounded-md">
          <img
            src="@/assets/image/v2-01.jpg"
            alt="Blog Image"
            class="w-full h-48 object-cover rounded-t-md"
          />
          <div class="absolute top-0 right-0 bg-red-800 text-white p-3 text-center font-semibold">
            <span class="text-2xl">27</span><br />
            <span class="uppercase text-sm">Mar</span>
          </div>
          <div class="p-6">
            <div class="flex items-center text-gray-500 mb-2 text-sm">
              <span class="flex items-center mr-4">
                <span class="text-red-800 mr-1"><i class="fa-solid fa-lock"></i></span> Admin
              </span>
              <span class=""><i class="fa-regular fa-heart text-red-800"></i> 98 Like</span>
              <span class="ml-4"><i class="fa-regular fa-comments text-red-800"></i> Comments</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">INTENTIONS THAT ENERGIZE YOU</h3>
            <p class="text-gray-600 text-sm mb-4">
              Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim.
            </p>
            <a href="#" class="text-red-800 font-medium">Read More...</a>
          </div>
        </div>

        <!-- Second Blog Card -->
        <div class="relative max-w-sm w-full bg-white rounded-md">
          <img
            src="@/assets/image/v2-02.jpg"
            alt="Blog Image"
            class="w-full h-48 object-cover rounded-t-md"
          />
          <div class="absolute top-0 right-0 bg-red-800 text-white p-3 text-center font-semibold">
            <span class="text-2xl">27</span><br />
            <span class="uppercase text-sm">Mar</span>
          </div>
          <div class="p-6">
            <div class="flex items-center text-gray-500 mb-2 text-sm">
              <span class="flex items-center mr-4">
                <span class="text-red-800 mr-1"><i class="fa-solid fa-lock"></i></span> Admin
              </span>
              <span class=""><i class="fa-regular fa-heart text-red-800"></i> 98 Like</span>
              <span class="ml-4"><i class="fa-regular fa-comments text-red-800"></i> Comments</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">A BRIEF HISTORY OF CREATION</h3>
            <p class="text-gray-600 text-sm mb-4">
              Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim.
            </p>
            <a href="#" class="text-red-800 font-medium">Read More...</a>
          </div>
        </div>

        <!-- Second Blog Card -->
        <div class="relative max-w-sm w-full bg-white rounded-md">
          <img
            src="@/assets/image/v2-02.jpg"
            alt="Blog Image"
            class="w-full h-48 object-cover rounded-t-md"
          />
          <div class="absolute top-0 right-0 bg-red-800 text-white p-3 text-center font-semibold">
            <span class="text-2xl">27</span><br />
            <span class="uppercase text-sm">Mar</span>
          </div>
          <div class="p-6">
            <div class="flex items-center text-gray-500 mb-2 text-sm">
              <span class="flex items-center mr-4">
                <span class="text-red-800 mr-1"><i class="fa-solid fa-lock"></i></span> Admin
              </span>
              <span class=""><i class="fa-regular fa-heart text-red-800"></i> 98 Like</span>
              <span class="ml-4"><i class="fa-regular fa-comments text-red-800"></i> Comments</span>
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-2">A BRIEF HISTORY OF CREATION</h3>
            <p class="text-gray-600 text-sm mb-4">
              Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia
              in, elementum id enim.
            </p>
            <a href="#" class="text-red-800 font-medium">Read More...</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'
export default {
  name: 'BlogSection',
  components: {
    SoulMateHeader,
  },
}
</script>

<style scoped>
/* Custom styling if needed */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
</style>
