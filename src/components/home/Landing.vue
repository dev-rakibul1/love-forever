<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="theme-container w-full" style="z-index: 500">
    <div class="flex items-center justify-center w-full">
      <div
        class="max-auto w-full md:w-[70%] flex items-center justify-center flex-col text-white min-h-full py-24 md:py-44 h-screen"
      >
        <h1 class="text-5xl md:text-8xl meta__title">Two Souls, One Love</h1>
        <p
          class="mt-6 landing__para text-white tracking-wider meta__title text-2xl md:text-3xl text-center"
          style="letter-spacing: 3px"
        >
          Under the same moon, I cherish distant memories in silence.
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
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');
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
