# IdeaVault – Startup Idea Sharing Platform

IdeaVault is a dynamic, fully responsive web application designed for entrepreneurs, innovators and creators to share, explore and validate startup ideas. The platform fosters community collaboration through interaction, constructive feedback and concept refinement without the constraints of traditional scheduling tools.

## 🔗 Backend Repository Link

- **Repo Link:** [https://github.com/Kawsar37/idea-vault-backend]

## 🔗 Live Deployment & Resources

- **Live Website Link:** [https://idea-vault-frontend-eight.vercel.app/]

---

## ✨ Core Features

- **Secure JWT Authentication System:** Implements clean route protection with persistent sessions upon reloading, supporting both standard Email/Password setups (complete with robust regex complexity rules) and Google Provider logins.
- **Advanced Query Filters:** Fully operational search and filter mechanism on the main Ideas route utilizing case-insensitive regular expressions to search titles, alongside categorized dropdown filtering.
- **Real-time Interactivity Suite:** A complete CRUD comment engine on Idea Details that captures custom context, timestamps, and authentic user details while safeguarding edit/delete privileges for the author only.
- **Personal Concept Hub:** A private operational dashboard ("My Ideas") providing dynamic modification via modal architectures alongside strict confirmation-gated deletions directly impacting the cloud database.
- **Centralized Activity Logs:** Dedicated private tracking workspace ("My Interactions") compiling detailed chronological listings of all ideas the individual user has engaged with or analyzed.
- **Universal Dark & Light System:** Contextual theme switcher built natively into the global navigation bar, instantly transforming layout parameters across all structural components and third-party wrappers.

---

## 🛠️ Tech Stack Applied

- **Client Architecture:** React.js, React Router DOM, Tailwind CSS, DaisyUI, React Fast Marquee
- **Server Architecture:** Node.js, Express.js, MongoDB Native Driver
- **Identity & State Management:** Firebase Authentication, JSON Web Tokens (JWT)
- **Notifications & Feedback:** React Hot Toast /

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
