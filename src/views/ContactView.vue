<script setup>
import { mdiEmailOutline, mdiLinkedin, mdiGithub } from "@mdi/js";
import { EMAIL, LINKEDIN, GITHUB, CV } from "../data";

const emit = defineEmits(["notify"]);
const copyEmail = async () => {
  try { await navigator.clipboard.writeText(EMAIL); emit("notify", "Email copied"); }
  catch (e) { emit("notify", "Couldn't copy: " + EMAIL); }
};

const cards = [
  { icon: mdiEmailOutline, title: "Email", text: EMAIL, href: `mailto:${EMAIL}` },
  { icon: mdiLinkedin, title: "LinkedIn", text: "piotr-cieslak", href: LINKEDIN, external: true },
  { icon: mdiGithub, title: "GitHub", text: "CieslakPiotr", href: GITHUB, external: true },
];
</script>

<template>
  <div>
    <h1 class="h1">Contact</h1>
    <p class="lead">Got a project, a role, or a question about Guardium? I'd love to hear from you.</p>
    <v-row class="contact">
      <v-col v-for="c in cards" :key="c.title" cols="12" sm="6" md="4">
        <v-card :href="c.href" :target="c.external ? '_blank' : undefined" :rel="c.external ? 'noopener' : undefined"
                class="hoverable h-100">
          <v-card-text>
            <v-icon :icon="c.icon" size="34" />
            <h3>{{ c.title }}</h3>
            <p>{{ c.text }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="actions">
      <v-btn color="primary" size="large" :href="CV" download="Piotr-Cieslak-CV.pdf">Download my CV</v-btn>
      <v-btn color="surface" size="large" @click="copyEmail">Copy my email</v-btn>
    </div>
  </div>
</template>
