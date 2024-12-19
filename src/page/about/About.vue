<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SectionBanner
      title="About of your story"
      dColor="#fff"
      tColor="#fff"
      desc="Discover heartfelt love stories that explore connection, growth, and the beauty of relationships through every chapter."
    />

    <FinanceConsultingSection />
    <MarketResearchSection />
    <CreativeSolutions />
  </div>
</template>

<script>
import CreativeSolutions from '@/components/about/CreativeSolutions.vue'
import FinanceConsultingSection from '@/components/about/FinanceConsultingSection.vue'
import MarketResearchSection from '@/components/about/MarketResearchSection.vue'
import SectionBanner from '@/shared/banner/SectionBanner.vue'

export default {
  components: {
    SectionBanner,
    MarketResearchSection,
    FinanceConsultingSection,
    CreativeSolutions,
  },
}
</script>

<style></style>
