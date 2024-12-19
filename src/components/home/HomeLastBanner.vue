<template>
  <div class="bg py-7">
    <div class="flex items-center justify-center flex-col">
      <SoulMateHeader
        description-color="#fff"
        title-color="#fff"
        title="Get The Best Dating Team Now"
        description="Want to hear more story, subscribe for our newsletter"
      />
      <button class="px-12 py-3 bg-white rounded-full">subscribe</button>
    </div>
  </div>
</template>

<script>
import SoulMateHeader from '@/shared/navbar/S-Meta.vue'
export default {
  name: 'HomeLastBanner',
  components: {
    SoulMateHeader,
  },
}
</script>

<style scoped>
.bg {
  background: url('@/assets/image/couple-7.jpeg');
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

.counter.fancy {
  color: #ffffff;
  margin: 40px 0;
}

.text-white .counter,
.text-white .counter label {
  color: #ffffff;
}

.counter {
  position: relative;
  font-family: 'Montserrat', sans-serif;
  color: #3d3d3d;
  min-height: 250px;
}

.counter.fancy::before {
  color: #ffbc05;
  content: '';
  background-image: url('https://www.svgrepo.com/show/501921/love.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 165px; /* Set the size of the icon */
  height: 165px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -moz-transform: translateY(-50%) translateX(-50%);
  -ms-transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);

  /* Apply filter to change color */
  filter: hue-rotate(60deg); /* Adjust hue to change the color */
  z-index: -1;
}
</style>
