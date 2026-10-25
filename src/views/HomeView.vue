<script setup>
import { CV, PHOTO } from "../data";
</script>

<template>
  <v-row class="hero" align="center">
    <v-col cols="12" md="7" class="hero-text">
      <v-chip class="status" size="large">
        <template #prepend><span class="dot" /></template>
        now: Technical Consultant
      </v-chip>
      <h1 class="h1 hero-title">Hi, I'm Piotr</h1>
      <p class="lead">Software Engineer and Technical Consultant with commercial experience developing enterprise applications in Java and TypeScript, delivering custom plugins, and providing technical consultancy for IBM Guardium solutions.</p>
      <div class="actions">
        <v-btn color="primary" to="/work" size="large">See where I worked →</v-btn>
        <v-btn color="surface" :href="CV" download="Piotr-Cieslak-CV.pdf" size="large">Download CV</v-btn>
      </div>
      <v-card class="code" max-width="520">
        <div class="bar"><i /><i /><i /></div>
        <pre><span class="k">const</span> piotr = {
  role:       <span class="s">"Software Engineer"</span>,
  based:      <span class="s">"London, UK"</span>,
  coreSkills: [<span class="s">"Java"</span>, <span class="s">"Guardium"</span>, <span class="s">"Vue"</span>],
};</pre>
      </v-card>
    </v-col>
    <v-col cols="12" md="5" class="photo-col">
      <v-img :src="PHOTO" alt="Portrait of Piotr Cieslak" :aspect-ratio="4 / 4.4" cover position="50% 20%"
             class="photo" rounded="lg" />
    </v-col>
  </v-row>
</template>
