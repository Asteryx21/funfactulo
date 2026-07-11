<template>
  <div class="shell">
    <section class="auth-page">
      <div class="auth-panel">
        <div class="auth-brand">
          <div class="logo-bubble">✨</div>

          <div>
            <h1>Funfactulo</h1>
            <p>Swipe • Learn • Smile</p>
          </div>
        </div>

        <div class="auth-copy">
          <span class="eyebrow">Welcome back</span>
          <h2>Log in to continue</h2>
          <p>
            Keep your deck, likes, and skips in one place.
          </p>
        </div>

        <form class="auth-form" @submit.prevent="handleLogin">
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              autocomplete="email"
            >
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Your password"
              autocomplete="current-password"
            >
          </label>

          <div class="auth-actions">
            <button
              type="button"
              class="secondary-btn"
              @click="goToSignup"
            >
              Register
            </button>

            <button
              type="submit"
              class="primary-btn"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      <aside class="auth-aside">
        <div class="feature-card accent-pink">
          <h3>idees</h3>
          <p>
            na valw kana animation edo?
          </p>
        </div>

        <div class="feature-card accent-yellow">
          <h3>idees</h3>
          <p>
            kapoio text animation h mipos kapoio video na dixni pos pezete h fasi
          </p>
        </div>
      </aside>
    </section>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLogin() {
  router.push('/game')
}

function goToSignup() {
  router.push('/signup')
}
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

.shell {
  min-height: 100vh;
}

.auth-page {
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  padding: 24px;
  gap: 24px;
}

.auth-panel {
  flex: 1 1 560px;
  max-width: 720px;
  background: white;
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.auth-brand {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
}

.logo-bubble {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  background: linear-gradient(135deg, #f1aed8, #ce6ac7);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  box-shadow: 0 10px 20px rgba(206, 106, 199, 0.25);
}

.auth-brand h1 {
  margin: 0;
  color: #ce6ac7;
  font-size: 2rem;
}

.auth-brand p {
  margin: 4px 0 0;
  color: #999;
}

.auth-copy {
  margin-bottom: 28px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  color: #eba909;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.auth-copy h2 {
  margin: 0 0 12px;
  color: #333;
  font-size: 2.2rem;
  line-height: 1.1;
}

.auth-copy p {
  margin: 0;
  color: #666;
  max-width: 34rem;
  line-height: 1.6;
}

.auth-form {
  display: grid;
  gap: 16px;
  max-width: 420px;
}

.auth-form label {
  display: grid;
  gap: 8px;
  color: #444;
  font-weight: 700;
}

.auth-form input {
  width: 100%;
  border: 2px solid #f2d2ea;
  background: #fffafc;
  color: #333;
  border-radius: 18px;
  padding: 14px 16px;
  font: inherit;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.auth-form input:focus {
  border-color: #ce6ac7;
  box-shadow: 0 0 0 4px rgba(206, 106, 199, 0.12);
}

.auth-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.secondary-btn,
.primary-btn {
  border: none;
  border-radius: 18px;
  padding: 14px 20px;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.secondary-btn {
  background: #fff8dc;
  color: #6c5a00;
}

.primary-btn {
  background: linear-gradient(135deg, #f1aed8, #ce6ac7);
  color: white;
  box-shadow: 0 10px 20px rgba(206, 106, 199, 0.2);
}

.secondary-btn:hover,
.primary-btn:hover {
  transform: translateY(-1px);
}

.auth-aside {
  flex: 0 1 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
}

.feature-card {
  border-radius: 24px;
  padding: 24px;
  background: white;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
}

.feature-card h3 {
  margin: 0 0 10px;
  color: #333;
  font-size: 1.1rem;
}

.feature-card p {
  margin: 0;
  color: #666;
  line-height: 1.6;
}

.accent-pink {
  border-left: 6px solid #f1aed8;
}

.accent-yellow {
  border-left: 6px solid #eba909;
}

@media (max-width: 960px) {
  .auth-page {
    flex-direction: column;
  }

  .auth-aside {
    flex-basis: auto;
    max-width: 720px;
  }
}

@media (max-width: 640px) {
  .auth-page {
    padding: 16px;
  }

  .auth-panel {
    padding: 24px;
  }

  .auth-copy h2 {
    font-size: 1.8rem;
  }

  .auth-actions {
    flex-direction: column;
  }

  .secondary-btn,
  .primary-btn {
    width: 100%;
  }
}
</style>
