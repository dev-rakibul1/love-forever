<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <SectionBanner
      title="Love support services"
      tColor="#fff"
      desc="It’s okay to feel sad right now. Healing takes time, but each day brings you closer to rediscovering your strength. You deserve the best kind of love, starting with self-love. 💖"
      dColor="#fff"
    />
  </div>
  <service-card />
</template>

<script>
import ServiceCard from '@/components/service/Service-card.vue'
import SectionBanner from '@/shared/banner/SectionBanner.vue'
export default {
  components: {
    ServiceCard,
    SectionBanner,
  },
}
</script>

<style></style>
