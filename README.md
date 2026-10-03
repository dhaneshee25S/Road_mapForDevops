# DevOps Journey

DevOps Journey is a personal learning dashboard for a second-year B.Tech Electrical Engineering student preparing for DevOps internships. It combines a roadmap, planner, resource library, projects, assessments, interview prep, application tracking, and portfolio management in one responsive web app.

## Features

- Roadmap dashboard with progress tracking and milestone updates
- Daily planner with notes, completion toggles, and revision-friendly structure
- Free resource library with search and topic filters
- Project tracker based on roadmap phases and capstone work
- Quizzes and mastery checks across Linux, Git, Bash, Docker, AWS, Terraform, and more
- Interview question bank with answer reveal controls
- Internship application tracker with search and status filters
- Portfolio tracker for project data, README quality, CI status, and resume bullets
- LocalStorage persistence for progress, notes, and settings
- Light/dark theme toggle and responsive dashboard navigation

## Tech stack

- React + Vite
- JavaScript
- Tailwind CSS
- Lucide icons

## Getting started

1. Open the project folder.
2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev

4. Build for production:

   npm run build

5. Preview the production build:

   npm run preview -- --host

## Project structure

- `src/App.jsx` – main app pages and logic
- `src/data.js` – roadmap, project, quiz, and resource definitions
- `src/index.css` – Tailwind styles and app-wide utilities
- `package.json` – project scripts and dependencies

## Local persistence and safety notes

- Progress, planner notes, tracker entries, and settings are stored in LocalStorage.
- Cloud credentials and secrets should never be stored in LocalStorage or embedded in frontend code.
- Always clean up public cloud resources and confirm billing alerts after hands-on AWS or Terraform practice.
- Terraform state files should not be committed to GitHub.

## Roadmap focus

The app is built around the 20–24 week DevOps internship roadmap in the project brief and keeps the timeline practical and hands-on. It emphasizes real understanding over course completion and encourages consistent daily work over passive consumption.
