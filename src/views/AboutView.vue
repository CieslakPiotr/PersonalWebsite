<script setup>
import { skills } from "../data";
const colors = ["sun", "mint", "sky", "lilac"];
</script>

<template>
  <div>
    <h1 class="h1">About</h1>
    <div class="about">
      <p>Software Engineer and Technical Consultant with commercial experience developing enterprise applications in <b>Java</b> and <b>TypeScript</b>, delivering custom plugins, and providing technical consultancy for <b>IBM Guardium</b> solutions.</p>
      <p>Experienced in designing scalable software, developing backend functionality, extending enterprise platforms, and producing high-quality technical documentation.</p>
      <p>Skilled at collaborating with cross-functional teams, troubleshooting complex technical issues, and translating business requirements into maintainable software solutions. Passionate about clean code, software architecture, automation, and continuous learning.</p>
    </div>
    <h2 class="h2 toolbox">My toolbox</h2>
    <section v-for="(items, group) in skills" :key="group" class="skillgroup">
      <h3>{{ group }}</h3>
      <div class="chips">
        <v-chip v-for="(s, i) in items" :key="s" :color="colors[i % 4]" class="chip" variant="flat">{{ s }}</v-chip>
      </div>
    </section>
  </div>
</template>
