# Heartland Mel - Project Context

## Overview
**Heartland Mel** is a premium honey brand focused on authenticity, tradition, and ethical beekeeping. The website is a bilingual (English/Portuguese) landing page designed to showcase the brand's story, values ("Heritage"), and products, with a direct purchase flow via WhatsApp.

## Technology Stack
-   **Framework:** React (Vite)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS + `shadcn/ui` components
-   **Animations:** Framer Motion (animated entrance, flying bee)
-   **Icons:** Lucide React

## Design Philosophy: "Warm Heritage Artisan"
The site aesthetics are premium, warm, and nature-inspired, following a "Just Melting" theme.
-   **Colors:** Amber/Gold (Honey), White/Cream (Cleanliness), Dark Gray (Text).
-   **Typography:** Display fonts for headers (strong, heritage feel), clean sans-serif for body.
-   **Key Elements:**
    -   **Flying Bee:** A signature animated bee that flies across the hero section and lands.
    -   **Melting Heart:** unique 3D/graphic element.
    -   **Parallax/Scroll:** Smooth scrolling with section reveal animations.

## Key Features & implementation Details

### 1. Bilingual Support
-   Fully bilingual (EN/PT).
-   Language toggled via a button in the navbar.
-   Translations stored in `client/src/lib/translations.ts`.
-   State managed in `client/src/pages/Home.tsx` using `localStorage`.

### 2. Purchase Flow (WhatsApp Redirect)
-   **Objective:** Direct sales through personal contact.
-   **Mechanism:** "Shop Now" and "Order" buttons redirect to a WhatsApp Business chat.
-   **Configuration:**
    -   Number and default message defined in `client/src/const.ts`.
    -   Helper function `getWhatsAppUrl()` generates the link.
    -   **Current Number:** `5562992668951` (as update by user).

### 3. Site Sections (Single Page)
-   **Hero:** Impactful headline, flying bee animation, "Discover" & "Shop" CTAs.
-   **Story:** Brand narrative, ethical sourcing focus.
-   **Heritage:** Core values (Tradition, Community, Nature).
-   **Products:** Highlight of the signature honey blend.
-   **CTA:** Final push to order.
-   **Footer:** Links and contacts.

## Current Goals
-   Refine the "Just Melting" design aesthetic.
-   Ensure smooth mobile responsiveness (specifically animations like the bee).
-   Generate marketing and content ideas that align with the "Heritage" and "Pure" values.
-   Maintain a codebase that is clean, type-safe, and easy to extend.

## File Structure
-   `client/src/pages/Home.tsx`: Main landing page component.
-   `client/src/lib/translations.ts`: Translation strings.
-   `client/src/const.ts`: Global constants (WhatsApp config).
-   `client/src/components/`: Reusable UI components.
