# Nutrisystem Affiliate Page

## Current State
New project with no existing application files. Backend is an empty Motoko actor. No frontend pages exist yet.

## Requested Changes (Diff)

### Add
- Full landing page (single-page) at the root route
- Hero section: bold headline + subheadline about weight loss, CTA button to affiliate link
- Benefits section: 5 key benefits (meal delivery, balanced nutrition, weight loss results, no cooking required, dietitian support) with icons
- How It Works section: 3 numbered steps
- Testimonials section: 3 social proof cards with name, photo placeholder, quote, and star rating
- FAQ section: accordion-style with 6-8 common questions about Nutrisystem
- Footer: disclaimer noting this is an affiliate link
- All CTA buttons open https://www.nutrisystem.com/diet-plans/nutrisystem-program in a new tab
- Mobile-responsive layout
- Color palette: white background, green accents (#4caf50 range), orange accents (#ff6f00 range)

### Modify
- None

### Remove
- None

## Implementation Plan
1. Build single-page React component (App.tsx) with all sections
2. Use Tailwind CSS for layout, spacing, responsiveness
3. Implement accordion FAQ with useState
4. Add green/orange Tailwind color tokens
5. All CTAs use target="_blank" rel="noopener noreferrer"
6. No backend interaction needed -- this is a static marketing page
