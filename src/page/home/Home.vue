<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="landing-background overflow-hidden">
    <!-- The canvas -->
    <!-- <canvas id="loveCanvas" ref="loveCanvas"></canvas> -->
    <!-- Overlay content -->
    <div class="canvas-overlays flex justify-center items-center w-full relative">
      <LandingPage />
      <img src="@/assets/image/love.png" alt="shape" class="w-[250px] home-love-shape" />
    </div>
  </div>
  <FeaturesSection />
  <BetterDatingSection />
  <HomeBanner />
  <BlogSection />
  <HomeAboutUsSection />
  <HomeLastBanner />
  <ContactForm />
</template>

<script>
import BetterDatingSection from '@/components/home/BetterDatingSection.vue'
import BlogSection from '@/components/home/BlogSection.vue'
import ContactForm from '@/components/home/ContactForm.vue'
import FeaturesSection from '@/components/home/FeaturesSection.vue'
import HomeAboutUsSection from '@/components/home/HomeAboutUsSection.vue'
import HomeBanner from '@/components/home/HomeBanner.vue'
import HomeLastBanner from '@/components/home/HomeLastBanner.vue'
import LandingPage from '@/components/home/Landing.vue'

export default {
  components: {
    LandingPage,
    BetterDatingSection,
    FeaturesSection,
    HomeBanner,
    BlogSection,
    HomeAboutUsSection,
    HomeLastBanner,
    ContactForm,
  },
}
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
  background-color: #ffe6f0;
}

canvas {
  display: block;
}

.landing-background {
  background-image: url('@/assets/image/couple-.jpeg');
  background-size: cover;
  background-position: center top;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  width: 100%;
  position: relative;
  z-index: 1;
}

.landing-background::before {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(180deg, rgba(2, 0, 36, 0.28) 0%, rgba(255, 192, 203, 0.65) 100%);
}
</style>
