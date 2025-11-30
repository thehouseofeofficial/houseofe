<template>
  <div class="landing">

    <!-- LEFT -->
    <div class="left">
      <div class="left-inner">
        <!-- bound import (works reliably with Vite) -->
        <img class="left-combo" :src="houseImg" alt="House Of E composition" />

    <div class="brand-group">
        <!-- House Of E title -->
    <h1 class="brand-title">House Of E</h1>
        <!-- Subtitle -->
    <p class="brand-subtitle">Provide the digital printable arts</p>
    </div>
    
        <!-- Home button positioned on top of the moon area -->
        <button class="home-btn" @click="$router.push('/home')">Home</button>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="right">
      <div class="notes">
        <button class="note note-1">Bestsellers</button>
        <button class="note note-2">Collections</button>
        <button class="note note-3">On Sale</button>
        <button class="note note-4">Latest</button>
        <button class="note note-5">About Us</button>
        <button class="note note-6">How to Order</button>
      </div>
    </div>

  </div>
</template>

<script>
/* import the image relatively (components -> assets is ../assets/) */
import house from '../assets/house-of-e.png'

export default {
  name: 'LandingPage',
  data() {
    return {
      houseImg: house
    }
  }
}
</script>

<style scoped>
/* overall two-column layout */
.landing {
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #f6f5f2;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

/* LEFT */
.left {
  width: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding: 20px;
  position: relative;
}

.left-inner {
  position: relative;
  width: min(640px, 78%);
  max-width: 700px;
  aspect-ratio: 1.6 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.left-combo {
  width: 100%;
  height: auto;
  object-fit: contain;
  pointer-events: none;
  user-select: none;
}

/* Home button positioned over the moon — tweak vars if needed */
.home-btn {
  position: absolute;
  left: 50%;
  top: 95%;                       /* ⬅️ move downward */
  transform: translateX(-30%);    /* ⬅️ moved right */
  padding: 12px 32px;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 26px;
  font-weight: 700;
  color: #4a3728;
  background: #ffffff;
  border-radius: 999px;
  border: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 10px 24px rgba(0,0,0,0.18);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease;
  z-index: 20;
}

/* hover */
.home-btn:hover {
  transform: translateX(-50%) translateY(-4px);
  box-shadow: 0 18px 32px rgba(0,0,0,0.22);
}

/* nice, accessible focus style for keyboard users */
.home-btn:focus-visible {
  /* NO ugly default blue ring — instead show a soft warm glow */
  outline: none;
  box-shadow:
    0 10px 24px rgba(0,0,0,0.18),        /* the usual shadow */
    0 0 0 6px rgba(180,150,120,0.12);     /* soft accessible halo */
}

/* RIGHT - notes grid */
.right {
  width: 50%;
  display:flex;
  align-items:center;
  justify-content:center;
  background: #f2efe9;
  padding: 40px;
}

.notes{
  width: min(420px, 86%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px 36px;
  justify-items: center;
  align-items: start;
}

/* NOTE (button) base style */
/*.note {
  --w: 190px;
  --h: 150px;
  width: var(--w);
  height: var(--h);
  padding-top: 52px;
  border: none;
  border-radius: 6px;
  color: #3f2f26;
  font-family: "Playfair Display", Georgia, "Times New Roman", serif;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  text-align: center;
  background-size: cover;
  box-shadow: 0 12px 28px rgba(20,20,20,0.10);
  transition: transform .18s ease, box-shadow .18s ease;
  user-select: none;
}*/

.note {
  /* sizing from your original code */
  --w: 190px;
  --h: 150px;
  width: var(--w);
  height: var(--h);

  /* CENTER the text */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* your original styles kept */
  border: none;
  border-radius: 6px;
  color: #3f2f26;
  font-family: "Quicksand", sans-serif !important;
  font-size: 20px;
  cursor: pointer;
  position: relative;
  background-size: cover;
  box-shadow: 0 12px 28px rgba(20,20,20,0.10);
  transition: transform .18s ease, box-shadow .18s ease;
  user-select: none;

  /* removed padding-top: 52px (not needed anymore) */
}

/* tape pseudo-element */
.note::before{
  content: "";
  position: absolute;
  top: -18px;
  left: 24px;
  width: calc(var(--w) - 48px);
  height: 36px;
  background: linear-gradient(180deg,#efe7d8,#e6dfce);
  transform: rotate(-3deg);
  border-radius: 2px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  z-index: 2;
  opacity: 0.95;
}

/* subtle overlay for texture */
.note::after{
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 0 2%, transparent 6%),
    linear-gradient(180deg, rgba(0,0,0,0.02) 0%, transparent 12%);
  mix-blend-mode: multiply;
  border-radius: 6px;
}

/* brand group: placed on top of the paper and tilted */
.brand-group {
  position: absolute;
  left: 50%;
  top: 42%;                        /* move the whole group down; tweak later */
  transform: translateX(-50%) rotate(-5deg); /* removed translateY */
  transform-origin: center;
  text-align: center;
  z-index: 30;
  /* remove white-space: nowrap; so subtitle can be positioned normally */
}

/* title */
.brand-title {
  margin: 0;
  font-family: 'Dancing Script', cursive;
  font-size: 48px;
  line-height: 0.95;               /* slightly less than 1 for calligraphy */
  color: #3f2f26;
}

/* subtitle */
.brand-subtitle {
  margin: 10px 0 0;                /* push subtitle DOWN from the title */
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: #6b5647;
  line-height: 1.1;
  display: block;
}

/* rotation + color per note */
.note-1 { transform: rotate(-6deg); background: #f6e9e6; }
.note-2 { transform: rotate(4deg);  background: #bfa48f; }
.note-3 { transform: rotate(-2deg); background: #cfc6ba; }
.note-4 { transform: rotate(5deg);  background: #f6eaeb; }
.note-5 { transform: rotate(-3deg); background: #c9b6a3; }
.note-6 { transform: rotate(2deg);  background: #d7d0c8; }

/* hover/focus */
.note:hover, .note:focus {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 40px rgba(20,20,20,0.16);
  outline: none;
}

/* accessible focus ring */
.note:focus-visible {
  box-shadow: 0 0 0 4px rgba(90,75,60,0.12);
}

/* responsive */
@media (max-width: 880px) {
  .landing { flex-direction: column; }
  .left, .right { width: 100%; height: auto; padding: 12px; }
  .left-inner { width: 86%; aspect-ratio: auto; }
  .btn-home { --home-bottom: 12%; --home-left: 52%; transform: translate(-50%, 0%); }
  .notes { gap: 18px; width: 92%; }
  .note { --w: 150px; --h: 120px; padding-top: 36px; font-size: 18px; }
  .note::before { left: 18px; width: calc(var(--w) - 36px); height: 30px; top: -14px; }
}
</style>
