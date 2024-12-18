<template>
  <div class="bg py-7">
    <div class="flex items-center justify-center flex-col">
      <!-- Use v-bind or shorthand : to pass data as props -->
      <SoulMateHeader
        :description-color="dColor"
        :title-color="tColor"
        :title="title"
        :description="desc"
      />
    </div>
  </div>
</template>

<script>
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'

export default {
  props: ['desc', 'title', 'dColor', 'tColor'],
  name: 'SectionBanner',
  components: {
    SoulMateHeader,
  },
}
</script>

<style scoped>
.bg {
  background: url('@/assets/image/couple-4.jpeg');
  background-color: rgba(0, 0, 0, 0);
  background-origin: initial;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  z-index: 1;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
  padding: 120px 0;
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
