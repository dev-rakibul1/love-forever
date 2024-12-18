<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="theme-container w-full" style="z-index: 500">
    <div class="flex items-center justify-center w-full">
      <div
        class="max-auto w-full md:w-[70%] flex items-center justify-center flex-col text-white min-h-full py-24 md:py-44 h-screen"
      >
        <h1 class="text-3xl md:text-8xl meta__title" style="font-family: 'Dancing Script', cursive">
          Suntina & Famico
        </h1>
        <p class="mt-6 landing__para text-white tracking-wider" style="letter-spacing: 3px">
          Under the same moon we once admired together, now I sit in silence, holding onto memories
          that feel too far away.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
.landing__para {
  position: relative;
}
.landing__para::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 1%;
  background: #fff;
  top: -15%;
  left: 0;
}
.landing__para::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  background: #fff;
  bottom: -15%;
  left: 0;
}
</style>
