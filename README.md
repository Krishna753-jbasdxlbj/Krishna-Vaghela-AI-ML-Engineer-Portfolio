# Krishna Vaghela — AI/ML Engineer Portfolio

A cinematic, animation-driven personal portfolio for **Krishna Tushar Vaghela**, an AI/ML engineer. Built with Next.js and GSAP, it features draggable AI/robot icon particles, a custom physics cursor, an animated boot loader, and smooth scroll — in a clean black-and-white theme.

🔗 **Live repo:** [Krishna-Vaghela-AI-ML-Engineer-Portfolio](https://github.com/Krishna753-jbasdxlbj/Krishna-Vaghela-AI-ML-Engineer-Portfolio)

---

## Tech Stack

| Area | Tools |
|------|-------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) (`@theme inline` tokens) |
| Animation | [GSAP 3](https://gsap.com/) (ScrollTrigger, Draggable, SplitText, Inertia, DrawSVG), [Motion](https://motion.dev/) (framer-motion) |
| Smooth scroll | [Lenis](https://github.com/darkroomengineering/lenis) |
| Misc | [rough-notation](https://roughnotation.com/), [lucide-react](https://lucide.dev/), [@vercel/analytics](https://vercel.com/analytics) |
| Fonts | Shrikhand (display), Inter (body), JetBrains Mono (mono) via `next/font` |

---

## Features

- **Draggable AI/robot particles** — 8 icons (atom, monitor, brain-gear, bulb-brain, eye, puzzle-robot, robot-hand, robot-icon) chosen at random per particle, each filled a different vivid color via CSS `mask-image` + solid fill (crisp edges, no glow).
- **Custom cursor** — robot-hand image with `requestAnimationFrame` lerp follow, click-shrink, elastic spring-back, and hover-expand; gold (`#FACF71`) tint.
- **Boot loader** — `RobotLoader` animated "system boot" screen (scan line, corner brackets, progress bar) built with Motion.
- **Smooth scroll & scroll storytelling** — Lenis + GSAP ScrollTrigger across hero, about, projects, and contact sections.
- **Black-and-white theme** with gold / purple / blue / green accent pops; Shrikhand display type.
- Responsive, mobile drawer navigation, and per-project detail pages.

---

## Featured Projects

| Project | What it is | Stack |
|---------|------------|-------|
| **RAGmind** | Local, privacy-first RAG platform for querying PDFs with grounded, cited answers | LangChain · FAISS/Chroma · Sentence Transformers · Ollama · FastAPI · Next.js |
| **PAN Card OCR** | Field-level PAN card extraction (94.2% mAP detection → OCR → structured JSON) | YOLOv8 · PyTorch · OpenCV · Tesseract/PaddleOCR · FastAPI |
| **Voter ID Extractor** | Layout-aware EPIC card field extraction at 97%+ confidence for KYC | YOLOv8 · PyTorch · OpenCV · OCR |
| **IndiaERP** | GST-ready SaaS ERP for Indian SMBs — invoicing, inventory, role-based access | Next.js · TypeScript · Supabase (Postgres) · Edge Functions · Tailwind |
| **SHA-3 FPGA** | Pipelined Keccak hardware hash core, NIST-vector verified | Verilog · FPGA · Vivado/Quartus |

---

## Getting Started

```bash
# clone
git clone https://github.com/Krishna753-jbasdxlbj/Krishna-Vaghela-AI-ML-Engineer-Portfolio.git
cd Krishna-Vaghela-AI-ML-Engineer-Portfolio

# install
npm install

# run dev server (http://localhost:3000)
npm run dev
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

> Requires Node.js 18.18+ (Next.js 15).

---

## Project Structure

```
src/
├── app/                 # App Router entry, layout, globals.css, favicon
├── components/
│   ├── Particle.tsx     # draggable AI/robot icon (mask + solid fill)
│   ├── CustomCursor.tsx # physics cursor (lerp / click / hover)
│   ├── RobotLoader.tsx  # animated boot loader
│   ├── sections/        # Hero, About, Contacts
│   └── projectSections/ # per-project detail UI
├── hooks/               # GSAP/scroll/cursor animation hooks
└── lib/                 # content (projects, about, footer), color sets
public/                  # 8 icon SVGs, project images, profile, resume
```

---

## Deployment

Optimized for [Vercel](https://vercel.com/). Push to `main` and import the repo, or:

```bash
npm run build && npm run start
```

---

© Krishna Vaghela. Design adapted from the [smllns portfolio](https://github.com/smllns) architecture.
