<template>
  <TheSidebar @closeSidebar="sidebarOpen = false" :sidebarOpen="sidebarOpen" />
  <div class="md:pl-64 flex flex-col">
    <TheTopBar @openSidebar="sidebarOpen = true" />
    <TheMainContent />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TheSidebar from "./components/Layout/TheSidebar.vue";
import TheTopBar from "./components/Layout/TheTopBar.vue";
import TheMainContent from "./components/Layout/TheMainContent.vue";

const sidebarOpen = ref(false);
</script>
