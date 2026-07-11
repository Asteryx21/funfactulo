<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <div class="logo-bubble">
        ✨
      </div>

      <div>
        <h2>Funfactulo</h2>
        <p>Swipe • Learn • Smile</p>
      </div>
    </div>

   <div class="section">
      <h3>Categories</h3>

      <button
        v-for="category in categories"
        :key="category"
        class="category-btn"
        :class="{ active: category === 'All Facts' }"
      >
        {{ category }}
      </button>
    </div>

    <div class="section">
      <h3>Stats</h3>

      <div class="category-btn">
        ❤️ Liked Facts
      </div>

      <div class="category-btn">
        👎 Skipped Facts
      </div>
    </div>
  </aside>
</template>


<script setup>
import { computed } from 'vue'

const props = defineProps({
  cards: {
    type: Array,
    required: true
  }
})

const categories = computed(() => [
  'All Facts',
  ...new Set(props.cards.map(card => card.category))
])
</script>

<style scoped>
.sidebar {
  width: 300px;
  min-width: 300px;
  height: 100vh;

  background: white;

  border-right: 6px solid #f1aed8;

  box-shadow:
    0 0 40px rgba(0,0,0,.08);

  padding: 24px;

  overflow-y: auto;
}

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 16px;

  margin-bottom: 32px;
}

.logo-bubble {
  width: 60px;
  height: 60px;

  border-radius: 20px;

  background: linear-gradient(
    135deg,
    #f1aed8,
    #ce6ac7
  );

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;

  box-shadow:
    0 10px 20px rgba(206,106,199,.25);
}

.sidebar-header h2 {
  margin: 0;
  color: #ce6ac7;
}

.sidebar-header p {
  margin: 4px 0 0;
  color: #999;
  font-size: .9rem;
}

.section {
  margin-bottom: 32px;
}

.section h3 {
  margin-bottom: 16px;

  color: #eba909;

  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.category-btn {
  width: 100%;

  border: none;

  background: #fff8dc;

  padding: 14px 16px;

  border-radius: 18px;

  text-align: left;

  margin-bottom: 10px;

  cursor: pointer;

  font-size: 1rem;
  font-weight: 600;

  transition: all .2s ease;
}

.category-btn:hover {
  transform: translateX(4px);
}

.category-btn.active {
  background: linear-gradient(
    135deg,
    #f1aed8,
    #ce6ac7
  );

  color: white;
}

.stat-card {
  background: #dbdb3b;

  color: #3d3d3d;

  padding: 16px;

  border-radius: 18px;

  font-weight: 700;

  margin-bottom: 12px;

  box-shadow:
    0 8px 16px rgba(0,0,0,.08);
}

.sidebar-footer {
  margin-top: auto;

  background: #c2f9f8;

  padding: 16px;

  border-radius: 18px;

  text-align: center;

  font-weight: 600;

  color: #555;
}
</style>