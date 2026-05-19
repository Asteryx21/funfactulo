<template>
  <div class="app-container">
    <div class="floating floating-star">⭐</div>
    <div class="floating floating-heart">💖</div>
    <div class="floating floating-rocket">🚀</div>
    <div class="floating floating-alien">👾</div>

    <main class="hero-card">
      <div class="badge">
        <span>✨ Coming Soon ✨</span>
      </div>

      <div class="mascot-wrapper">
        <div class="mascot-shadow"></div>

        <div class="mascot">
          <div class="robot-ears">
            <span></span>
            <span></span>
          </div>

          <div class="robot-face">
            <div class="eyes">
              <span></span>
              <span></span>
            </div>

            <div class="mouth"></div>
          </div>
        </div>
      </div>

      <h1>
        Funfactulo
        <span>Swipe, Learn & Smile ✨</span>
      </h1>

      <p>
        A super fun world of colorful flashcards,
        crazy facts, cute animations, and tiny bursts
        of knowledge is landing soon!
      </p>

      <div class="bubble-row">
        <div class="fun-bubble">🧠 Fun Facts</div>
        <div class="fun-bubble">🎮 Swipe Cards</div>
        <div class="fun-bubble">🌈 Family Friendly</div>
      </div>

      <!-- <button class="fun-button">
        Notify Me 🚀
      </button> -->

      <div class="tiny-text">
        Building smiles one fun fact at a time 💜
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Fredoka', sans-serif;
}

#app {
  width: 100%;
}

.app-container {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background:
    radial-gradient(circle at top left, #ffffff90 0%, transparent 30%),
    radial-gradient(circle at bottom right, #ffffff60 0%, transparent 30%),
    #c2f9f8;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.hero-card {
  position: relative;
  width: 100%;
  max-width: 650px;
  background: white;
  border-radius: 36px;
  padding: 48px 32px;
  text-align: center;

  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.12),
    0 8px 20px rgba(206, 106, 199, 0.2);

  border: 6px solid #f1aed8;

  animation: floatCard 5s ease-in-out infinite;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #f1aed8, #ce6ac7);
  color: white;

  padding: 10px 20px;
  border-radius: 999px;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;

  margin-bottom: 24px;

  box-shadow: 0 8px 18px rgba(206, 106, 199, 0.3);
}

.mascot-wrapper {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto 28px;
}

.mascot-shadow {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);

  width: 110px;
  height: 24px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 999px;

  filter: blur(4px);
}

.mascot {
  position: absolute;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: bounceRobot 3s ease-in-out infinite;
}

.robot-face {
  width: 150px;
  height: 140px;

  background: linear-gradient(180deg, #f1aed8, #ce6ac7);

  border-radius: 36px;

  border: 6px solid white;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.robot-ears span {
  position: absolute;
  top: 36px;

  width: 26px;
  height: 60px;

  background: #eba909;

  border-radius: 20px;

  border: 4px solid white;
}

.robot-ears span:first-child {
  left: 4px;
}

.robot-ears span:last-child {
  right: 4px;
}

.eyes {
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
}

.eyes span {
  width: 22px;
  height: 30px;

  background: white;

  border-radius: 50px;

  position: relative;

  animation: blink 4s infinite;
}

.eyes span::after {
  content: '';

  position: absolute;
  top: 8px;
  left: 6px;

  width: 10px;
  height: 10px;

  background: #2f2f2f;
  border-radius: 50%;
}

.mouth {
  width: 56px;
  height: 14px;

  background: white;

  border-radius: 0 0 40px 40px;
}

h1 {
  color: #ce6ac7;
  font-size: 4rem;
  line-height: 1;
  margin-bottom: 20px;
}

h1 span {
  display: block;
  margin-top: 16px;

  color: #eba909;
  font-size: 1.4rem;
  font-weight: 600;
}

p {
  color: #5f5f5f;
  font-size: 1.2rem;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 28px;
}

.bubble-row {
  display: flex;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
  margin-bottom: 32px;
}

.fun-bubble {
  background: #dbdb3b;
  color: #3d3d3d;

  padding: 12px 18px;

  border-radius: 999px;

  font-weight: 600;

  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.08);

  animation: bubbleDance 4s ease-in-out infinite;
}

.fun-bubble:nth-child(2) {
  animation-delay: 0.5s;
}

.fun-bubble:nth-child(3) {
  animation-delay: 1s;
}

.fun-button {
  border: none;
  cursor: pointer;

  background: linear-gradient(135deg, #ce6ac7, #f1aed8);
  color: white;

  padding: 18px 34px;

  border-radius: 24px;

  font-size: 1.1rem;
  font-weight: 700;

  transition: all 0.25s ease;

  box-shadow: 0 12px 24px rgba(206, 106, 199, 0.3);
}

.fun-button:hover {
  transform: translateY(-4px) scale(1.03);
}

.fun-button:active {
  transform: scale(0.97);
}

.tiny-text {
  margin-top: 24px;
  color: #8b8b8b;
  font-size: 0.95rem;
}

.floating {
  position: absolute;
  font-size: 2.5rem;
  user-select: none;
  pointer-events: none;

  animation: floatAround 8s ease-in-out infinite;
}

.floating-star {
  top: 10%;
  left: 10%;
}

.floating-heart {
  top: 15%;
  right: 12%;
  animation-delay: 1s;
}

.floating-rocket {
  bottom: 10%;
  left: 14%;
  animation-delay: 2s;
}

.floating-alien {
  bottom: 12%;
  right: 10%;
  animation-delay: 3s;
}

@keyframes bounceRobot {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-12px);
  }
}

@keyframes floatCard {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-6px);
  }
}

@keyframes floatAround {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }

  50% {
    transform: translateY(-16px) rotate(8deg);
  }
}

@keyframes bubbleDance {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-5px);
  }
}

@keyframes blink {
  0%,
  45%,
  100% {
    transform: scaleY(1);
  }

  48% {
    transform: scaleY(0.1);
  }
}

@media (max-width: 768px) {
  .hero-card {
    padding: 40px 24px;
    border-radius: 30px;
  }

  h1 {
    font-size: 3rem;
  }

  h1 span {
    font-size: 1.1rem;
  }

  p {
    font-size: 1rem;
  }

  .mascot-wrapper {
    width: 150px;
    height: 150px;
  }

  .robot-face {
    width: 125px;
    height: 120px;
  }

  .bubble-row {
    gap: 10px;
  }

  .fun-bubble {
    font-size: 0.9rem;
    padding: 10px 14px;
  }

  .fun-button {
    width: 100%;
  }
}
</style>