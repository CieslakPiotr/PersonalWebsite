<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { nav } from "./data";

const theme = useTheme();
const year = new Date().getFullYear();
const dark = () => theme.name.value === "dark";

const toggleTheme = () => {
  const next = dark() ? "light" : "dark";
  theme.change(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
};

// Views emit "notify" to show the shared snackbar
const toast = ref(false);
const toastText = ref("");
const notify = (text) => { toastText.value = text; toast.value = true; };
</script>

<template>
  <v-app>
    <a class="skip" href="#view">Skip to content</a>

    <v-app-bar flat class="top" height="64">
      <router-link to="/" class="logo" aria-label="Home">piotr<span>.</span></router-link>
      <v-spacer />
      <nav aria-label="Main" class="nav">
        <v-btn v-for="l in nav" :key="l.to" :to="l.to" exact variant="text" class="navlink" active-class="on">
          {{ l.label }}
        </v-btn>
      </nav>
      <v-btn icon class="theme" aria-label="Toggle dark mode" @click="toggleTheme">◐</v-btn>
    </v-app-bar>

    <v-main>
      <v-container id="view" tabindex="-1" class="view">
        <router-view v-slot="{ Component, route }">
          <transition name="rise" mode="out-in">
            <component :is="Component" :key="route.path" @notify="notify" />
          </transition>
        </router-view>
      </v-container>
    </v-main>

    <v-footer class="foot">© {{ year }} Piotr Cieslak</v-footer>

    <v-snackbar v-model="toast" :timeout="2200" location="bottom" rounded="pill" color="on-background" class="toast">
      {{ toastText }}
    </v-snackbar>
  </v-app>
</template>
