<template>
  <div class="flex items-center justify-center">
    <div class="relative w-40 h-40 flex items-center justify-center rounded-full">
      <!-- Central Icon -->
      <div
        class="absolute w-14 h-14 flex items-center justify-center rounded-full bg-pink-600 rotate-center"
      >
        <i class="fas fa-thumbs-up text-white text-2xl"></i>
      </div>
      <!-- Circular Text -->
      <svg
        class="absolute w-full h-full rotate-text"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path id="circlePath" d="M 50,50 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"></path>
        </defs>
        <text font-size="8" font-family="Arial" font-weight="bold">
          <textPath href="#circlePath" startOffset="50%" text-anchor="middle">
            2024 LOVE STORY DESTINED HEARTS ETERNAL JOURNEY
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoundedBadge',
}
</script>

<style scoped>
/* Include Font Awesome for Icons */
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';

/* Styling for smooth circular text */
svg text {
  letter-spacing: 1px;
}

/* Animation for smooth rotation */
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Apply rotation animation to the text */
.rotate-text {
  animation: rotate 10s linear infinite;
  transform-origin: center;
}

/* Apply rotation animation to the central icon */
.rotate-center {
  animation: rotate 10s linear infinite reverse;
}
</style>
