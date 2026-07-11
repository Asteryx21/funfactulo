<template>
  <div class="app">
    <AppSidebar :cards="flashcards" />

    <main class="content">
      <h1 class="logo">✨ Funfactulo ✨</h1>

      <div v-if="currentCard" class="card-stack">
        <div
          ref="cardRef"
          class="card"
          :style="cardStyle"
          @pointerdown="onPointerDown"
          @pointermove="onPointerMove"
          @pointerup="onPointerUp"
          @pointercancel="onPointerUp"
        >
          <div
            v-if="dragX < -40"
            class="indicator like"
          >
            ❤️ LIKE
          </div>

          <div
            v-if="dragX > 40"
            class="indicator skip"
          >
            👎 SKIP
          </div>

          <img
            :src="currentCard.image"
            :alt="currentCard.title"
            draggable="false"
            @dragstart.prevent
          >

          <div class="category">
            {{ currentCard.category }}
          </div>

          <h2>{{ currentCard.title }}</h2>

          <p>{{ currentCard.description }}</p>
        </div>
      </div>

      <div
        v-else
        class="finished"
      >
        <h2>🎉 All done!</h2>
        <p>You reached the end of the deck.</p>
      </div>

      <div class="counter">
        {{ Math.min(currentIndex + 1, cards.length) }} / {{ cards.length }}
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import flashcards from './data/flashcards.json'
import AppSidebar from './components/Sidebar.vue'

const cards = [...flashcards].sort(() => Math.random() - 0.5)
const currentIndex = ref(0)

const likes = ref([])
const skips = ref([])

const currentCard = computed(() => cards[currentIndex.value])

const dragX = ref(0)
const dragging = ref(false)
const animating = ref(false)

let startX = 0

function onPointerDown(event) {
  if (animating.value) return

  dragging.value = true
  startX = event.clientX

  event.currentTarget.setPointerCapture(event.pointerId)
}

function onPointerMove(event) {
  if (!dragging.value) return

  dragX.value = event.clientX - startX
}

function onPointerUp() {
  if (!dragging.value) return

  dragging.value = false

  const threshold = 120

  if (dragX.value < -threshold) {
    likeCard()
  } else if (dragX.value > threshold) {
    skipCard()
  } else {
    dragX.value = 0
  }
}

function likeCard() {
  likes.value.push(currentCard.value.id)
  flyAway(-1)
}

function skipCard() {
  skips.value.push(currentCard.value.id)
  flyAway(1)
}

function flyAway(direction) {
  animating.value = true

  dragX.value = direction * window.innerWidth

  setTimeout(() => {
    currentIndex.value++

    dragX.value = 0
    animating.value = false

    localStorage.setItem('fanfactulo-likes', JSON.stringify(likes.value))
    localStorage.setItem('fanfactulo-skips', JSON.stringify(skips.value))
  }, 300)
}

const cardStyle = computed(() => ({
  transform: 'translateX(' + dragX.value + 'px) rotate(' + (dragX.value / 20) + 'deg)',
  transition: dragging.value ? 'none' : 'transform 0.3s ease'
}))
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
  background: #c2f9f8;
}

.app {
  display: flex;
  min-height: 100vh;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
}

.logo {
  color: #ce6ac7;
  margin-bottom: 24px;
}

.card-stack {
  width: 100%;
  max-width: 420px;
}

.card {
  position: relative;
  background: white;
  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  user-select: none;
  touch-action: none;
  cursor: grab;
}

.card img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  pointer-events: none;
}

.category {
  display: inline-block;
  margin: 20px 20px 0;
  background: #f1aed8;
  color: white;
  padding: 8px 14px;
  border-radius: 999px;
  font-weight: 700;
}

.card h2 {
  margin: 16px 20px 12px;
  color: #333;
}

.card p {
  margin: 0 20px 24px;
  color: #666;
  line-height: 1.6;
}

.indicator {
  position: absolute;
  top: 20px;
  z-index: 10;
  padding: 10px 16px;
  border-radius: 12px;
  font-weight: bold;
}

.like {
  left: 20px;
  background: #4caf50;
  color: white;
}

.skip {
  right: 20px;
  background: #ff5252;
  color: white;
}

.counter {
  margin-top: 24px;
  font-weight: 700;
  color: #555;
}

.finished {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 24px;
  max-width: 400px;
}
</style>
