<template>
  <div class="bg">
    <div class="theme-container">
      <div class="grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4">
        <div class="counter fancy text-center flex justify-center items-center flex-col">
          <div class="text-sm flex justify-center items-center flex-col">
            <span class="text-xl font-bold">1600</span>
            <label class="text-xs">Total Members</label>
          </div>
        </div>

        <div class="counter fancy text-center flex justify-center items-center flex-col">
          <div class="text-sm flex justify-center items-center flex-col">
            <span class="text-xl font-bold">1600</span>
            <label class="text-xs">Total Members</label>
          </div>
        </div>

        <div class="counter fancy text-center flex justify-center items-center flex-col">
          <div class="text-sm flex justify-center items-center flex-col">
            <span class="text-xl font-bold">1600</span>
            <label class="text-xs">Total Members</label>
          </div>
        </div>

        <div class="counter fancy text-center flex justify-center items-center flex-col">
          <div class="text-sm flex justify-center items-center flex-col">
            <span class="text-xl font-bold">1600</span>
            <label class="text-xs">Total Members</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeBanner',
}
</script>

<style scoped>
.bg {
  background: url('@/assets/image/bg-2.jpg');
  background-color: rgba(0, 0, 0, 0);
  background-origin: initial;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover !important;
  position: relative;
  z-index: 1;
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
  color: #ddd;
  min-height: 250px;
}

.counter.fancy::before {
  color: green;
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
