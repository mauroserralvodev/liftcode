
# LiftCode – AI-powered App Generator

**LiftCode** is a powerful platform that generates fully functional web apps from simple natural language prompts. By using artificial intelligence, it translates user ideas into real, editable code – ready to deploy or enhance.

## Visit Us
- [https://liftcode.net](https://liftcode.net)
- Powered by [BrinPage](https://brinpage.com)

---

## How It Works

1. **Describe your idea** in plain English.  
   _Example: "A task manager with login and local storage support."_

2. **AI generates the code** using Google's Gemini API (temporarily).

3. **Preview the code** in a clean interface, copy or export it as a complete project.

4. **Done!** You've got a structured codebase you can use, share, or build on.

> LiftCode simplifies app development and dramatically accelerates the prototyping phase.

---

## Tech Stack

### Frontend

- **Next.js 14** (App Router)
- **Tailwind CSS** for styling
- **TypeScript (TSX)** components
- **ShadCN UI** for interface elements
- **Framer Motion** for smooth animations
- **React CodeMirror** for in-app code viewing/editing

### Backend

- **Convex** as serverless backend & real-time DB
- **Google Identity** for user authentication
- **Gemini API (Google)** as the current LLM for code generation

> **Note**: While LiftCode currently uses Google's Gemini for generating code, we are actively developing our own AI model called **BirdMind**. Once complete, BirdMind will replace Gemini, allowing:
> - Faster, cheaper inference
> - Better code context understanding
> - Full-stack control and privacy
> - Tailored training based on real-world developer needs

---

## Authentication

LiftCode uses **Google Sign-In** via Google Identity Services. Users can securely log in and access their saved dashboards and code generations.

---

## Database & Backend Logic

We use **Convex** to manage backend operations with a highly reactive model. Convex handles:

- Project creation and storage
- File management
- User dashboards
- AI request logs

Convex functions are built using RPC logic and type-safe validators.

---

## Monetization

LiftCode uses a **credit-based system** to scale generation and handle usage:

### Upcoming Subscription Plans:

| Plan        | Monthly Credits | Price  | Features                                       |
|-------------|------------------|--------|------------------------------------------------|
| Basic       | 100,000          | $4.98  | Starter use for individuals                    |
| Pro         | 250,000          | $9.90  | Early BirdMind access, export features         |
| Advanced    | 1,000,000        | $24.90 | 24/7 support, custom integrations, account rep |

> Credits are consumed on each code generation request, depending on complexity.

---

## Project Structure
/app
/dashboard → Project editor UI
/auth → Google login system
/api → Payment, session, and route handling

/convex
/functions → RPC handlers (createProject, updateFiles, etc.)
/schema.ts → Convex type definitions and validators

/components
/ui → Custom UI components (buttons, loaders, etc.)
/custom → Advanced features (code viewer, sidebar)

/lib
gpt.ts → Gemini API request logic

/public
/assets → Images, logos, and icons


## Example Usage

Prompt:
"An event management app with login, event creation, and category filtering."

Output:
- Pages
  - /index.tsx
  - /components/EventForm.tsx
  - /utils/api.ts

- Features
  - Auth with Google
  - CRUD logic for events
  - Styled UI with Tailwind
    
##  About BirdMind (Coming Soon)
BirdMind is our proprietary LLM for code generation and developer workflows. Built in-house by BrinPage, it will replace Gemini once fully trained and integrated.

What BirdMind will offer:

- Code tuned for modern web frameworks (React, Next.js, Vue, etc.)
- Multimodal inputs: voice, video, code snippets
- Self-improving performance with user feedback
- Smarter memory and flow across project generations

BirdMind will be the core of all future BrinPage software solutions.

## Export Options
Feature in development.

Users will soon be able to:

- Download projects as .zip files
- Push code directly to GitHub
- Integrate with Vercel for one-click deployment

## Contact & Social
We’re building in public. Follow our journey:

Email: mauro@brinpage.com

Parent site: https://brinpage.com

Instagram: @liftcodenet

## License
This project is proprietary. All rights reserved. Do not distribute, replicate, or resell without written permission.
