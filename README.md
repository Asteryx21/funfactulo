# Fanfactulo — Vue 3 Frontend Project Blueprint

## Vision

Fanfactulo is a colorful, child-friendly flashcard app where users can swipe through fun facts, like them, upload their own facts, and browse categories.

The app should feel:

* Fun
* Cartoonish
* Mobile-first
* Smooth and interactive
* Easy for children to use
* Bright and playful

---

# Tech Stack

## Current Setup

* Vue 3
* TypeScript
* Vue Router
* Yarn

## Recommended Additions

### State Management

Even without a backend, state management will help.

Recommended:

```bash
yarn add pinia
```

Why:

* Store users
* Store likes
* Store uploaded facts
* Persist settings
* Easy migration later when backend exists

---

### Persistence

Use:

```ts
localStorage
```

for:

* User profile
* Uploaded facts
* Likes
* Theme/settings
* Recently viewed facts

Optional later:

* IndexedDB
* Firebase
* Supabase

---

### Swipe Support

Install:

```bash
yarn add @vueuse/gesture @vueuse/core
```

or:

```bash
yarn add vue3-touch-events
```

This enables:

* Swipe left/right
* Mobile gestures
* Touch-friendly interactions

---

### Sounds

Install:

```bash
yarn add howler
```

Use for:

* Card flip sounds
* Like sounds
* Success sounds
* Hover/click sounds

Keep sounds soft and fun.

---

# Design System

## Color Palette

| Color   | Usage                 |
| ------- | --------------------- |
| #f1aed8 | Main pink             |
| #eba909 | Yellow accent         |
| #ce6ac7 | Purple accent         |
| #dbdb3b | Lime/yellow           |
| #c2f9f8 | Light cyan background |

---

## Suggested Usage

### Backgrounds

* Main background → `#c2f9f8`
* Secondary panels → white

### Buttons

* Primary → `#ce6ac7`
* Secondary → `#eba909`
* Success/highlight → `#dbdb3b`

### Navigation

* Gradient using:

  * `#f1aed8`
  * `#ce6ac7`

---

# Typography

## Recommended Fonts

### Primary

```css
font-family: 'Fredoka', sans-serif;
```

### Optional Decorative Fonts

* Baloo 2
* Luckiest Guy

---

## Google Fonts Import

Add to `src/assets/main.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Baloo+2:wght@400;500;600;700&family=Luckiest+Guy&display=swap');
```

---

# Suggested Folder Structure

```txt
src/
│
├── assets/
│   ├── sounds/
│   ├── images/
│   ├── icons/
│   └── main.css
│
├── components/
│   ├── cards/
│   │   ├── FactCard.vue
│   │   ├── SwipeDeck.vue
│   │   └── FactActions.vue
│   │
│   ├── navigation/
│   │   ├── Sidebar.vue
│   │   ├── MobileNavbar.vue
│   │   └── CategoryMenu.vue
│   │
│   ├── ui/
│   │   ├── FunButton.vue
│   │   ├── FunModal.vue
│   │   └── AvatarBubble.vue
│   │
│   └── forms/
│       └── UploadFactForm.vue
│
├── composables/
│   ├── useFacts.ts
│   ├── useStorage.ts
│   └── useSounds.ts
│
├── data/
│   ├── science.json
│   ├── astronomy.json
│   ├── yoga.json
│   └── computers.json
│
├── router/
│   └── index.ts
│
├── stores/
│   ├── facts.ts
│   ├── user.ts
│   └── likes.ts
│
├── views/
│   ├── HomeView.vue
│   ├── CategoryView.vue
│   ├── UploadView.vue
│   ├── FavoritesView.vue
│   └── ProfileView.vue
│
├── App.vue
└── main.ts
```

---

# Suggested Pages

## Home

Shows:

* Featured categories
* Trending facts
* Continue swiping

---

## Category Page

Examples:

* Science
* Yoga
* Astronomy
* Computers
* Animals
* Space
* History

Displays swipeable cards.

---

## Upload Page

Users can:

* Add title
* Add fun fact
* Select category
* Upload image later

For now save to localStorage.

---

## Favorites Page

Shows liked facts.

---

## Profile Page

Fake frontend-only login:

* Username
* Avatar color
* Saved likes
* Uploaded facts

---

# Navigation Layout

## Desktop

Left vertical sidebar.

Sections:

* Home
* Categories
* Favorites
* Upload
* Profile

Rounded icons.
Big buttons.
Soft shadows.

---

## Mobile

Bottom floating navigation bar.

Reason:

* Easier thumb reach
* Better UX for swipe apps

---

# UI Style Guidelines

## Cards

* Large rounded corners
* Floating shadows
* Slight rotation animation
* Bounce hover effects
* Emoji/icons

Example:

```css
border-radius: 28px;
box-shadow: 0 10px 30px rgba(0,0,0,0.12);
```

---

## Animations

Use:

```bash
yarn add motion
```

or:

```bash
yarn add gsap
```

Recommended animations:

* Card swipe
* Button bounce
* Confetti when liking
* Smooth page transitions

---

# Recommended Libraries

## Icons

```bash
yarn add lucide-vue-next
```

---

## Confetti

```bash
yarn add canvas-confetti
```

---

## Utility CSS (Recommended)

Use Tailwind.

Install:

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Why:

* Faster development
* Easy colorful styling
* Mobile responsive
* Cleaner components

---

# Example Tailwind Theme

```js
colors: {
  pinky: '#f1aed8',
  yellowy: '#eba909',
  purpley: '#ce6ac7',
  limey: '#dbdb3b',
  cyanlight: '#c2f9f8'
}
```

---

# Flashcard Structure

Example fact:

```ts
export interface FunFact {
  id: string
  title: string
  fact: string
  category: string
  likes: number
  createdBy: string
  createdAt: string
}
```

---

# Example JSON

```json
[
  {
    "id": "1",
    "title": "Bananas Glow!",
    "fact": "Bananas glow blue under UV light!",
    "category": "science",
    "likes": 12,
    "createdBy": "FactWizard"
  }
]
```

---

# Swipe UX Ideas

## Swipe Right

Like fact.

## Swipe Left

Skip fact.

## Tap Card

Flip card.

Front:

* Title
* Emoji

Back:

* Full fun fact
* Like button
* Share button

---

# Suggested App Flow

```txt
Open App
   ↓
Choose Category
   ↓
Swipe Through Facts
   ↓
Like / Save
   ↓
Upload Own Fact
```

---

# Suggested MVP Features

## Phase 1

* Swipe cards
* Categories
* Likes
* Local storage
* Upload facts
* Mobile responsive

## Phase 2

* User accounts
* Images
* Comments
* Search
* Sound effects
* Leaderboards

## Phase 3

* Backend
* Realtime uploads
* Multiplayer quizzes
* AI-generated facts

---

# Accessibility

Important because children may use the app.

Recommendations:

* Large buttons
* High contrast text
* Large tap targets
* Minimal text clutter
* Simple navigation

---

# Suggested Theme Style

Visual inspiration:

* Duolingo
* Pokémon cards
* Cartoon Network
* Kahoot
* Quizlet for kids

---

# Recommended Initial Commands

## Install Tailwind

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Install Pinia

```bash
yarn add pinia
```

## Install Icons

```bash
yarn add lucide-vue-next
```

## Install Sounds

```bash
yarn add howler
```

## Install Gesture Support

```bash
yarn add @vueuse/core @vueuse/gesture
```

## Install Animations

```bash
yarn add motion
```

---

# Recommended Starting Components

Build in this order:

1. Sidebar
2. Mobile Navbar
3. Fact Card
4. Swipe Deck
5. Category Page
6. Upload Form
7. Favorites
8. Profile

---

# Suggested Branding

## Mascot Ideas

* Cute owl
* Funny alien
* Smart cat
* Tiny robot

Can appear:

* Loading screens
* Empty states
* Tutorial messages

---

# Example Home Hero Text

```txt
Fun Facts!
Swipe, Learn & Smile ✨
```

---

# Final Recommendation

Even though there is no backend yet:

Use:

* Pinia
* localStorage
* JSON seed files

This will make future backend migration much easier.

The best architectural approach is:

```txt
JSON seed data
    ↓
Pinia store
    ↓
localStorage persistence
    ↓
Vue components
```

This gives you:

* Easy development
* Offline support
* Fast prototype
* Future scalability
