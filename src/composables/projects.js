import { ref } from "vue";

const base = import.meta.env.BASE_URL;
const projects = ref([]);
const loaded = ref(false);
const error = ref(false);
let started = false;

// Shared across views: the index is fetched once.
export function useProjects() {
  if (!started) {
    started = true;
    fetch(`${base}projects/index.json`)
      .then((r) => { if (!r.ok) throw new Error("no index"); return r.json(); })
      .then((list) => { projects.value = list.sort((a, b) => b.date.localeCompare(a.date)); })
      .catch(() => { error.value = true; })
      .finally(() => { loaded.value = true; });
  }
  return { projects, loaded, error };
}
