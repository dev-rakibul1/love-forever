<template>
  <section class="relative bg-white py-12">
    <div class="theme-container mx-auto flex flex-col lg:flex-row items-center gap-8">
      <!-- Left Side - Image -->
      <div class="relative w-full lg:w-1/2">
        <div class="relative shadow-lg rounded-lg overflow-hidden">
          <img src="@/assets/image/couple-6.jpeg" alt="Couple on beach" class="w-full h-auto" />
        </div>
        <!-- Decorative Gradient Bar -->
        <div
          class="absolute -bottom-4 left-4 w-3/4 h-8 bg-gradient-to-r from-pink-500 to-red-400 rounded-lg -z-10"
        ></div>

        <!-- Circular Badge -->
        <div class="about-badge hidden md:block">
          <RoundedBadge />
        </div>
      </div>

      <!-- Right Side - Content -->
      <div class="w-full lg:w-1/2">
        <!-- Title -->
        <h2
          class="text-4xl font-semibold italic text-gray-800 mb-2"
          style="font-family: 'Dancing Script', cursive"
        >
          Dating Better Than Ever Before
        </h2>

        <!-- Heart Underline -->
        <div class="flex items-center mb-6">
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

        <!-- Paragraphs -->
        <p class="text-gray-600 mb-4 leading-relaxed">
          This theme extends default WordPress profiles. User can edit profile fields, upload
          photos, add favorites, view gifts and read messages, edit privacy settings without even
          seeing.
        </p>
        <p class="text-gray-600 mb-6 leading-relaxed">
          This theme extends default WordPress profiles. User can edit profile fields, upload
          photos, add favorites, view gifts and read messages, edit privacy settings without even
          seeing the WordPress back-end. This theme extends default WordPress profiles.
        </p>

        <!-- Signature -->
        <div>
          <p class="text-pink-500 font-bold text-lg italic meta__title">Joya Mike</p>
          <p class="text-gray-400 text-sm">Manager</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import RoundedBadge from '@/shared/batch/RoundedBadge.vue'

export default {
  name: 'BetterDatingSection',
  components: {
    RoundedBadge,
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
.about-badge {
  position: absolute;
  top: 0;
  right: 0;
  margin-right: -70px;
  margin-top: -70px;
}
</style>
