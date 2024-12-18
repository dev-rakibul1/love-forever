<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="banner">
    <SectionBanner
      title="Recent love story"
      d-color="#fff"
      t-color="#fff"
      desc="Emma and Liams chance meeting on a rainy evening turned into an unbreakable bond, proving love finds us when we least expect it."
    />
    <LoveCard />
  </div>
</template>

<script>
import LoveCard from '@/components/love/LoveCard.vue'
import SectionBanner from '@/shared/banner/SectionBanner.vue'

export default {
  components: {
    SectionBanner,
    LoveCard,
  },
}
</script>

<style scoped></style>
