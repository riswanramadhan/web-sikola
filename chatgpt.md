# ChatGPT / Copilot Instruction

## Project: Sikola Indonesia Landing Page

---

## 🎯 Objective

Build a modern, high-converting landing page for **Sikola Indonesia**, a mentoring platform for university students focused on:

* competitions
* scholarships
* career preparation

This is a **frontend-only project using Next.js (App Router)**.

---

## 🧱 Tech Stack

* Next.js 14+ (App Router)
* React
* Tailwind CSS
* TypeScript
* next-intl (for i18n)

---

## 🎨 Design System

### Colors

* Primary Gradient:

  * #045498 → #053c63
* Accent:

  * #FDAF0F
* Base:

  * white (#FFFFFF)

### Typography

* Font: Poppins (Google Font)
* Use consistent font scale:

  * Heading: bold
  * Body: regular
  * CTA: semi-bold

---

## 📱 Layout Style

* Fully scrollable landing page (single page)
* Clean, modern, startup-style UI
* Mobile-first responsive
* Smooth scrolling navigation

---

## 🌐 Internationalization

* Support:

  * Indonesian (default)
  * English
* Provide toggle switch (ID / EN)
* All text must be stored in translation files (no hardcoded text)

---

## 🧩 Page Structure

### 1. Navbar

* Logo (left)
* Menu (center/right):

  * Beranda
  * Tentang Kami
  * Kelas & Program
  * Mentor
  * Kontak
* Language toggle (ID / EN)
* Sticky on scroll

---

### 2. Hero Section

* Title:

  * "Let’s Grow To Be Successful"
* Subtitle (ID + EN)
* CTA buttons:

  * Lihat Program → scroll to program section
  * Hubungi Kami → scroll to contact

---

### 3. About Section

* Story-driven content
* Vision, Mission, Core Values
* Founder highlight card

---

### 4. Program Section (CRITICAL)

#### Features:

* Tab system:

  * Kelas Mentoring
  * Program Sosial

---

### 4A. Mentoring Programs

Use reusable **ProgramCard component**

Each card contains:

* Title
* Description
* CTA: "Daftar Sekarang"
* Link to Google Form

⚠️ DO NOT hardcode cards manually
Use array data structure

Example:

```ts
const programs = [
  {
    title: "Lomba Business Plan",
    category: "mentoring",
    description: "...",
    link: "..."
  }
]
```

Display:

* Grid (desktop)
* Stack (mobile)

---

### 4B. Social Programs

* Simpler card layout
* Focus on description + CTA

---

### 5. Mentor Section

* Grid of mentor cards
* Each contains:

  * Name
  * University
  * Achievements
* Mobile: vertical stack

---

### 6. Contact Section

* Email
* WhatsApp button (deep link with prefilled message)
* Address (Google Maps link)
* Social icons:

  * Instagram
  * TikTok
  * LinkedIn

---

### 7. FAQ Section

* Accordion style
* 3 main questions

---

## 🧠 UX Guidelines

* Strong CTA visibility
* Avoid clutter
* Use whitespace generously
* Smooth scroll navigation
* Hover effects for cards
* Subtle animation (fade / slide)

---

## ⚙️ Component Architecture

Create reusable components:

* Navbar
* HeroSection
* AboutSection
* ProgramTabs
* ProgramCard
* MentorCard
* ContactSection
* FAQAccordion

---

## 📦 Folder Structure

```
/app
/components
/sections
/data
/messages (i18n)
/styles
```

---

## 🚀 Performance & Best Practices

* Use Next.js Image component
* Lazy load images
* Avoid unnecessary re-renders
* Keep components modular

---

## ❌ Avoid

* Multi-page routing (keep single page)
* Hardcoded text (must use i18n)
* Inline styling (use Tailwind)
* Overcomplicated UI

---

## ✅ Success Criteria

* Clean modern landing page
* Fully responsive
* Smooth scroll UX
* Clear conversion flow (CTA → form)
* Easy to maintain and scale

---

## 💡 Extra Improvement Ideas

* Add testimonials (optional)
* Add animation using Framer Motion
* Add program filtering (future feature)

---

Build this like a **startup landing page that converts users into signups**, not just a static website.
