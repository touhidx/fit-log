# fit-log

A dark, no-nonsense gym companion — browse a library of workouts, build today's training plan, and track your sets without the clutter.

## Description

FitLog lets you explore a curated library of exercises, view detailed instructions and stats for each lift, and build a daily workout plan by adding lifts to "Today's Plan" or saving them for later. Progress (exercises, minutes, calories) updates live as you plan your session, and each workout can be marked as done, removed, or revisited from the plan page.

## Technologies Used

- **Next.js (App Router)** — routing, server components, and data fetching
- **TypeScript** — type-safe components and data models
- **Tailwind CSS** — utility-first styling and responsive layout
- **DaisyUI** — base UI primitives (navbar, dropdown, tabs)
- **React Context API** — shared state for the plan/saved workout lists across pages
- **react-toastify** — toast notifications for plan/save actions
- **lucide-react** — icon set used throughout the UI
- **REST API** (`api.abcz.workers.dev`) — workout data source

## Key Features

1. **Workout Library** — Browse a responsive 3×4 grid of workouts with muscle-group tags, equipment, duration, calories, and rating at a glance.
2. **Detailed Workout Pages** — Each workout has its own page with a full spec table (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Plan Building** — Add a workout to "Today's Plan" or "Save for later" directly from its detail page, with instant toast feedback.
4. **Live Plan Dashboard** — The My Plan page tracks total exercises, minutes, and calories in real time, with sortable, tabbed lists (Today's Plan / Saved) and a "Mark as Done" flow.
5. **Fully Responsive UI** — Navbar, hero, workout grid, detail layout, and plan page all adapt cleanly across mobile, tablet, and desktop.
