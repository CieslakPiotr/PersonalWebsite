<script setup>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { marked } from "marked";
import { fmt } from "../data";
import { useProjects } from "../composables/projects";

const route = useRoute();
const { projects, loaded } = useProjects();
const post = computed(() => projects.value.find((p) => p.slug === route.params.slug));
const html = ref("");

watch([post, loaded], async () => {
  if (!post.value) return;
  html.value = "";
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}projects/${encodeURIComponent(post.value.slug)}.md`);
    html.value = marked.parse(await res.text());
  } catch (e) { html.value = "<p>Couldn't load this project.</p>"; }
}, { immediate: true });
</script>

<template>
  <div v-if="post">
    <router-link class="back" to="/projects">← all projects</router-link>
    <h1 class="h1 post-title">{{ post.title }}</h1>
    <p class="note">{{ fmt(post.date) }}</p>
    <div class="prose" v-html="html" />
  </div>
  <div v-else-if="loaded">
    <h1 class="h1">Project not found</h1>
    <div class="actions"><v-btn color="primary" to="/projects">All projects</v-btn></div>
  </div>
</template>
