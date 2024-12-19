<template>
  <div class="bg text-white py-12 px-4 md:px-16 lg:px-32">
    <div class="theme-container">
      <SoulMateHeader
        description-color="#fff"
        title-color="#fff"
        title="Contact us"
        description="Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu"
      />
      <!-- Top Icons and Info -->
      <div
        class="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-8"
      >
        <!-- Email -->
        <div class="flex flex-col items-center mb-6 md:mb-0">
          <div class="text-pink-500 text-3xl mb-2">
            <i class="fas fa-desktop"></i>
          </div>
          <p class="text-gray-300">somemail@mail.com</p>
        </div>
        <!-- Address -->
        <div class="flex flex-col items-center mb-6 md:mb-0">
          <div class="text-pink-500 text-3xl mb-2">
            <i class="fas fa-home"></i>
          </div>
          <p class="text-gray-300">
            1317 Timber Oak Drive <br />
            Sundown, TX 79372
          </p>
        </div>
        <!-- Phone -->
        <div class="flex flex-col items-center mb-6 md:mb-0">
          <div class="text-pink-500 text-3xl mb-2">
            <i class="fas fa-phone"></i>
          </div>
          <p class="text-gray-300">+000 - 123 - 456 - 789</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="text-center">
        <h2 class="text-lg font-semibold tracking-wide mb-2">WE LOVE TALKING</h2>
        <div class="w-12 h-1 bg-pink-500 mx-auto mb-6"></div>
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <!-- Name Field -->
          <div>
            <input
              v-model="formData.name"
              type="text"
              placeholder="Your name here"
              class="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-red-600 p-2 text-white placeholder-gray-400"
            />
          </div>
          <!-- Email Field -->
          <div>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Your mail here"
              class="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-red-600 p-2 text-white placeholder-gray-400"
            />
          </div>
        </div>
        <!-- Message Field -->
        <div>
          <textarea
            v-model="formData.message"
            placeholder="Your message here*"
            rows="4"
            class="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-red-600 p-2 text-white placeholder-gray-400"
          ></textarea>
        </div>
        <!-- Submit Button -->
        <div class="text-center mt-6">
          <button
            type="submit"
            class="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-400 hover:to-red-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'
export default {
  name: 'ContactForm',
  components: {
    SoulMateHeader,
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form Submitted:', this.formData)
      alert('Thank you for contacting us!')
    },
  },
}
</script>

<style scoped>
/* Font Awesome Support */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

.bg {
  background: url('@/assets/image/04.png');
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
