# Next.js with Tailwind CSS v4 - Comprehensive Guide

<div align="center">
  <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/.github/logo-dark.svg" alt="Tailwind CSS" width="350" />
  <h3>+</h3>
  <img src="https://nextjs.org/static/blog/next-13/logo.svg" alt="Next.js" width="200" />
  <p><em>The ultimate starter guide for using Tailwind CSS v4 with Next.js 15</em></p>
</div>

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Shadcn UI Integration](#shadcn-ui-integration)
  - [Installation with Canary CLI](#installation-with-canary-cli)
  - [Adding Components](#adding-components)
  - [Dark Mode Implementation](#dark-mode-implementation)
- [Plugins Configuration](#plugins-configuration)
  - [Typography Plugin](#typography-plugin)
  - [Forms Plugin](#forms-plugin)
- [Package Integration](#package-integration)
  - [UploadThing](#uploadthing)
  - [Tailwind Select](#tailwind-select)
- [Breaking Changes in Tailwind v4](#breaking-changes-in-tailwind-v4)
- [Troubleshooting](#troubleshooting)
- [Resources](#resources)

## Introduction

Next.js 15 now comes with Tailwind CSS v4 integrated out of the box. This guide will help you navigate the new features, breaking changes, and best practices for using these technologies together effectively.

## Getting Started

To create a new Next.js project with Tailwind CSS v4:

```bash
# Create a new Next.js project
npx create-next-app@latest my-project
cd my-project

# During setup, you'll be prompted to include Tailwind CSS
# Simply select "Yes" when asked
```

If you're migrating an existing project to Tailwind v4, update your dependencies:

```bash
npm install tailwindcss@latest postcss@latest autoprefixer@latest
# OR with yarn
yarn add tailwindcss@latest postcss@latest autoprefixer@latest
# OR with pnpm
pnpm add tailwindcss@latest postcss@latest autoprefixer@latest
```

## Shadcn UI Integration

[Shadcn UI](https://ui.shadcn.com/) is a popular component library built with Tailwind CSS, but it currently uses Tailwind v3 by default. To use it with Tailwind v4, you'll need to follow some special steps.

### Installation with Canary CLI

To initialize Shadcn UI with Tailwind v4 compatibility, use the canary CLI:

```bash
pnpm dlx shadcn@canary init
```

During the initialization process, you'll be asked several configuration questions. Make sure to select the appropriate options for your project.

### Adding Components

When adding new Shadcn components, always use the canary CLI to ensure compatibility with Tailwind v4:

```bash
pnpm dlx shadcn@canary add button
pnpm dlx shadcn@canary add card
pnpm dlx shadcn@canary add dialog
# Add any other components you need
```

This ensures that the components work correctly with the new Tailwind v4 syntax and features.

### Dark Mode Implementation

To implement dark mode with Shadcn UI and Tailwind v4:

1. Follow the [official Shadcn UI guide for dark mode](https://ui.shadcn.com/docs/dark-mode)
2. Remember to use the canary CLI when adding any new components
3. Update your `tailwind.config.js` to include the dark mode configuration:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Example implementation in your layout:

```jsx
// Layout component with theme provider
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## Plugins Configuration

Tailwind CSS v4 has changed how plugins are configured and imported.

### Typography Plugin

To use the Typography plugin:

1. Install the plugin:

```bash
npm install @tailwindcss/typography
# OR
pnpm add @tailwindcss/typography
```

2. Add the plugin to your global CSS file using the new `@plugin` directive:

```css
/* global.css */
@plugin "@tailwindcss/typography";
```

3. Now you can use the `prose` classes in your markup:

```jsx
<article className="prose lg:prose-xl">
  <h1>My Article</h1>
  <p>Content goes here...</p>
</article>
```

### Forms Plugin

To use the Forms plugin:

1. Install the plugin:

```bash
npm install @tailwindcss/forms
# OR
pnpm add @tailwindcss/forms
```

2. Add the plugin to your global CSS file using the new `@plugin` directive:

```css
/* global.css */
@plugin "@tailwindcss/forms";
```

This will automatically style form elements like inputs, selects, checkboxes, and radio buttons.

## Package Integration

Many popular packages provide Tailwind CSS extensions. Here's how to integrate them with Tailwind v4.

### UploadThing

To use [UploadThing](https://uploadthing.com/) with Tailwind v4:

1. Install the package:

```bash
npm install uploadthing
# OR
pnpm add uploadthing
```

2. Add the package CSS to your global.css using the new `@source` directive:

```css
/* global.css */
@source "uploadthing/tailwind.css";
```

3. Follow the UploadThing documentation for integration specifics.

### Tailwind Select

To use packages like [react-select](https://react-select.com/) with Tailwind v4:

1. Install the package:

```bash
npm install react-select
# OR
pnpm add react-select
```

2. Add any associated styles to your global.css:

```css
/* global.css */
@source "react-select/dist/react-select.css";
```

## Breaking Changes in Tailwind v4

Tailwind CSS v4 introduces several breaking changes from v3:

1. **New directives**: `@plugin` and `@source` replace the need for configuration in `tailwind.config.js`

2. **Removed utilities**:

   - Some utilities have been removed or replaced
   - Check the [official migration guide](https://tailwindcss.com/docs/upgrade-guide) for a complete list

3. **Default container behavior**: The container plugin has been removed and `container` now works differently

4. **Color opacity syntax**: The color opacity syntax has changed from `text-red-500/50` to `text-red-500 text-opacity-50`

5. **Arbitrary property changes**: The syntax for arbitrary properties has been updated

## Troubleshooting

### Common Issues

1. **Shadcn components not working with Tailwind v4**:

   - Make sure you're using the canary CLI
   - Check that your components are updated to use the new syntax

2. **Plugins not applying**:

   - Ensure you're using the new `@plugin` directive in your CSS
   - Check that the package is correctly installed

3. **Class names not working as expected**:
   - Refer to the Tailwind v4 documentation as some utilities have changed
   - Use the official migration guide to update your classes

## Resources

- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
