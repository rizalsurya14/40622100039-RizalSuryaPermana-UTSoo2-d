<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LeftNav from '@/components/navbar/LeftNav.vue'
import DosenView from '@/components/DosenView.vue';
import RuanganView from './components/RuanganView.vue';
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar color="blue" title="Aplikasi Penjadwalan Kuliah"></v-app-bar>


    <LeftNav></LeftNav>

    <v-main class="d-flex align-center justify-center" style="min-height: 300px">
      <RouterView></RouterView>
    </v-main>
  </v-layout>
</template>
