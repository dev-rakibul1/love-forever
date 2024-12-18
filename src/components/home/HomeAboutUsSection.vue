<template>
  <section class="py-12 theme-container">
    <div class="md:flex relative">
      <!-- Left Image -->
      <div class="w-full md:w-1/2 relative">
        <img src="@/assets/image/couple-5.jpeg" alt="Couple Image" class="rounded-lg" />
        <!-- Background Shape -->
        <!-- <div class="absolute top-6 left-6 w-full h-full bg-gray-300 rounded-lg -z-10"></div> -->
      </div>

      <!-- Right Content -->
      <div class="w-full md:w-1/2 bg-white p-8 z-10">
        <!-- Title -->
        <div class="md:ml-[-120px] top-0 bg-white p-5 rounded-lg">
          <h2
            class="text-4xl font-semibold italic text-gray-800 mb-2"
            style="font-family: 'Dancing Script', cursive"
          >
            Dating Better Than Ever Before
          </h2>

          <!-- Heart Underline -->
          <div class="flex items-center mb-6">
            <span class="w-16 h-px bg-red-800 inline-block"></span>
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
            <span class="w-16 h-px bg-red-800 inline-block"></span>
          </div>
          <!-- Paragraph -->
          <p class="text-gray-600 mb-4 leading-relaxed">
            This theme extends default WordPress profiles. User can edit profile fields, upload
            photos, add favorites, view gifts and read messages, edit privacy settings without even
            seeing the WordPress back end.
          </p>
          <p class="text-gray-600 mb-6 leading-relaxed">
            This theme extends default WordPress profiles. User can edit profile fields, upload
            photos.
          </p>

          <!-- Name Section -->
          <div class="mb-6">
            <p class="font-semibold text-gray-800">Ethan Valentine</p>
            <p class="text-red-800 font-medium">Sophia Rosewood</p>
          </div>
        </div>

        <!-- Features Section -->
        <div class="flex justify-around mt-7">
          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mb-2"
            >
              <i class="fas fa-user-shield text-red-800 text-2xl"></i>
            </div>
            <p class="font-semibold text-gray-700">100% Privacy</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mb-2"
            >
              <i class="fas fa-check-circle text-red-800 text-2xl"></i>
            </div>
            <p class="font-semibold text-gray-700">Verified Profile</p>
          </div>

          <div class="text-center">
            <div
              class="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mb-2"
            >
              <i class="fas fa-shield-alt text-red-800 text-2xl"></i>
            </div>
            <p class="font-semibold text-gray-700">100% Privacy</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeAboutUsSection',
}
</script>

<style scoped>
/* For FontAwesome Icons */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
</style>
