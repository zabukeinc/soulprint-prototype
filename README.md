# Soulprint — Decode Your Emotional Blueprint

> Turning empathetical nature into creative clarity and apps.

## Preview

![Soulprint app preview](showcase.png)

A warm, private self-discovery app that reads the pattern beneath your chart — not just what you were born with, but how you carry it. Soulprint helps people who feel more than they show understand their emotional blueprint through astrology, lifepath numerology, MBTI, and AI-guided reflection.

This project was born from a simple belief: **empathy isn't a weakness to manage — it's a design to understand.** Every overthinker, every private processor, every person who feels the room before they speak deserves a tool that speaks their language.

---

## What It Does

| Screen | Purpose |
|--------|---------|
| **Today** | Daily signal, mood check-in, energy bars, journal prompt — the daily ritual that keeps you coming back |
| **Soulprint** | 6 expandable blueprint sections: Emotional Blueprint, Love Pattern, Shadow Self, Career Energy, Growth Direction, 12-Month Theme |
| **Decode** | Unlockable readings — Full Soulprint, Love Pattern, Compatibility — unlocked by writing reflections, not by paying |
| **Mirror** | Growth tracking — reflection streak, weekly check-ins, pattern shifts, your journal thread. Proof that doing the work matters |
| **Profile** | Settings, tone preference, free/premium toggle to preview both experiences |

---

## Key Design Decisions

### Warm, Not Clinical
Cream, sage, lavender, peach pastels. Soft rounded cards. A tone that feels like a friend who really listens — not a therapist who takes notes.

### Journal as Currency
Write 3 reflections to unlock a deep reading. Your emotional honesty becomes the key, not your credit card. This is the core engagement loop: open → feel seen → reflect → get rewarded.

### Reflection Streak
🔥 fires when you check in consecutive days. Weekly mood visualization shows which days you showed up. Pattern shift insights connect your mood data to something meaningful.

### Free vs Premium Toggle
A single button in Profile switches between the free experience (locked sections, upsell CTAs) and the full premium experience (everything open, "Unlocked" badges). Easy to demo both states.

### No Scroll on Onboarding
Every onboarding screen fits in the phone frame without scrolling. The emotional payoff (First Mirror) comes after a generating animation — you feel the result being built for you.

---

## Screenshots

### Today — Daily Ritual
![Today screen](showcase.png)

Run `showcase.html` in a browser to see the full landing page with interactive phone mockup.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
src/
├── main.jsx                          # Entry point
├── App.jsx                           # Navigation & screen routing
├── index.css                          # Global styles & Tailwind
├── context/
│   └── TierContext.jsx                # Free/Premium state provider
├── hooks/
│   └── useEngagement.js              # Streaks, moods, journals, unlocks
└── components/
    ├── PhoneFrame.jsx                 # Phone container with notch
    ├── BottomNav.jsx                  # Tab navigation (Today/Soul/Decode/Mirror/Profile)
    ├── FirstMirror.jsx                # Post-onboarding emotional payoff
    ├── Today.jsx                      # Daily signal, mood, journal, energy
    ├── Soulprint.jsx                  # 6 expandable blueprint sections
    ├── Decode.jsx                     # Unlockable reading cards
    ├── Mirror.jsx                     # Growth tracking, reflections, pattern shifts
    ├── LoveReading.jsx                # Progressive love pattern reveal
    ├── CompatibilityReading.jsx       # Name + zodiac input → mock result
    ├── Profile.jsx                    # Settings + tier toggle
    ├── Pricing.jsx                    # Monthly/annually toggle
    ├── ShareCard.jsx                  # Shareable insight card
    ├── Welcome.jsx                    # Onboarding screens...
    ├── BirthDate.jsx
    ├── BirthTime.jsx
    ├── LocationStep.jsx
    ├── Mbti.jsx
    ├── FocusMood.jsx
    └── Generating.jsx                # Post-onboarding loading animation
```

---

## Tech Stack

- **React 18** — Component architecture
- **Vite** — Fast dev server & build
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth page transitions & micro-interactions
- **Lucide React** — Icon set
- **localStorage** — Streaks, moods, journals, unlocks (persisted across sessions)

---

## The Core Loop

```
Open app
  → Feel seen (daily signal, mood check-in)
  → Reflect (journal prompt)
  → Get rewarded (unlock readings, build streak)
  → Come back tomorrow
```

This isn't a content app. It's a mirror that gets sharper every time you look into it.

---

## License

This is a prototype. All rights reserved.

---

<p align="center">
  <em>Built with empathy. For people who feel more than they show.</em>
</p>