import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
const initial = saved || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

// Palette lives in the Vuetify theme: every colour is exposed as --v-theme-<name>.
export default createVuetify({
  icons: { defaultSet: "mdi", aliases, sets: { mdi } },
  theme: {
    defaultTheme: initial,
    themes: {
      light: {
        dark: false,
        colors: {
          background: "#fff8ef", surface: "#ffffff", primary: "#ff6b4a", "on-primary": "#1d1a17",
          "on-background": "#1d1a17", "on-surface": "#1d1a17", dim: "#6d655c",
          mint: "#7be0b3", sun: "#ffd45c", sky: "#9ccbff", lilac: "#cdb8ff",
          keyword: "#d6336c", string: "#1c8a5b",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#17151a", surface: "#221f27", primary: "#ff6b4a", "on-primary": "#1d1a17",
          "on-background": "#f5efe6", "on-surface": "#f5efe6", dim: "#aaa297",
          mint: "#3fbf8a", sun: "#e6b73a", sky: "#5a9be0", lilac: "#8f74d6",
          keyword: "#ff8fb3", string: "#7be0b3",
        },
      },
    },
  },
  defaults: {
    VBtn: { variant: "flat", rounded: "pill", class: "brut", ripple: false },
    VCard: { variant: "flat", rounded: "xl", class: "brut-card" },
    VChip: { label: false, rounded: "pill", ripple: false },
    VSheet: { color: "transparent" },
  },
});
