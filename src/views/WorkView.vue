<script setup>
import { ref } from "vue";
import { jobs } from "../data";
const open = ref(0);
</script>

<template>
  <div>
    <h1 class="h1">Work</h1>
    <p class="lead">Click a card to see what I did there.</p>
    <v-expansion-panels v-model="open" variant="accordion" flat class="timeline" elevation="0">
      <v-expansion-panel v-for="j in jobs" :key="j.role + j.when" class="brut-card job" rounded="xl" bg-color="surface">
        <v-expansion-panel-title class="job-head" hide-actions>
          <div class="job-main">
            <h3>{{ j.role }}</h3>
            <span class="org">{{ j.org }}</span>
          </div>
          <v-chip :color="j.now ? 'mint' : 'sun'" class="when" variant="flat">{{ j.when }}</v-chip>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <ul><li v-for="b in j.bullets" :key="b">{{ b }}</li></ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
