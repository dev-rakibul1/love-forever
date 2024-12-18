<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- Drawer -->
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li><RouterLink to="/love-story">stories</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/service">Service</RouterLink></li>
      </ul>
    </div>
  </div>

  <header class="navbar bg-pink-200">
    <div class="theme-container">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl text text-red-800 logo"
          ><div class="flex items-center justify-center">
            <svg
              fill="#ff0000"
              width="64px"
              height="64px"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ff0000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

              <g id="SVGRepo_iconCarrier">
                <path
                  d="M715.086 175.231c84.209 83.541 84.209 219.068 0 302.609L473.844 717.177c-27.011 26.808-70.757 26.808-97.766.003L134.834 477.841c-84.209-83.541-84.209-219.068 0-302.609 79.465-78.834 205.507-83.196 290.126-13.085 84.619-70.111 210.661-65.749 290.126 13.085zm-304.55 29.078c-68.15-67.609-178.704-67.609-246.854 0-68.059 67.519-68.059 176.933 0 244.453l241.247 239.342c11.041 10.958 29.021 10.958 40.064-.003l241.244-239.34c68.059-67.519 68.059-176.933 0-244.453-68.15-67.609-178.704-67.609-246.854 0-7.985 7.921-20.863 7.921-28.847 0zm512.659 447.719c41.568 41.25 41.568 108.188-.002 149.427L817.049 906.759c-16.362 16.242-42.825 16.242-59.183.004L651.718 801.455c-41.57-41.239-41.57-108.177 0-149.429 36.964-36.67 94.329-40.671 135.737-11.999 41.408-28.671 98.773-24.671 135.739 12.001zM773.03 681.102c-25.51-25.315-66.943-25.315-92.462 0-25.423 25.228-25.423 66.056-.002 91.275l106.152 105.312c.391.388 1.084.388 1.479-.004l106.148-105.308c25.42-25.218 25.42-66.046 0-91.272-25.52-25.318-66.953-25.318-92.464-.002-7.985 7.924-20.867 7.924-28.852 0z"
                />
              </g>
            </svg>
            <span>Forever</span>
          </div></a
        >
      </div>
      <li class="block md:hidden">
        <div class="drawer-content">
          <!-- Page content here -->
          <label for="my-drawer" class="btn btn-primary drawer-button">
            <v-icon name="bi-list" />
          </label>
        </div>
      </li>
      <div class="hidden md:block md:flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li><RouterLink to="/love-story">stories</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li><RouterLink to="/service">Service</RouterLink></li>
        </ul>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <!-- eslint-disable-next-line vue/no-reserved-component-names -->
    <Footer />
  </footer>
</template>

<script>
import Footer from '../footer/Footer.vue'
export default {
  components: {
    // eslint-disable-next-line vue/no-reserved-component-names
    Footer,
  },
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.drawer {
  z-index: 1000;
}
</style>
