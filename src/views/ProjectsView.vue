<script setup>
import { fmt } from "../data";
import { useProjects } from "../composables/projects";
const { projects, loaded, error } = useProjects();
</script>

<template>
  <div>
    <h1 class="h1">Projects</h1>
    <p v-if="error" class="lead">There are no posts yet.</p>
    <p v-else-if="loaded && !projects.length" class="lead">No projects yet. Check back soon!</p>
    <div class="posts">
      <v-card v-for="p in projects" :key="p.slug" :to="`/projects/${p.slug}`" class="post-card hoverable">
        <v-card-text>
          <time>{{ fmt(p.date) }}</time>
          <h3>{{ p.title }}</h3>
          <p>{{ p.summary }}</p>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
