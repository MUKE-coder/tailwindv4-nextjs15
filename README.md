# Next js Comes with Tailwind V4

## Shadcn

- Shadcn is by default using Tailwind V3
- To use TV4 with shadcn , remember to use the canary cli

```
pnpm dlx shadcn@canary init
```

- To add new shadcn Components , stick to the canary cli

```
pnpm dlx shadcn@canary add button
```

### DaRK Mode

- Simply follow the Shadcn Guide to Implement it
- Remember always to add new components using the canary cli

## Plugins eg Typography and forms

- Please Install the Plugins from their official packages
- Include them in global.css using the @plugin
- eg `@plugin "@tailwind/forms"`

## Packages eg Uploadthing and Tailwind Select

- Install the Packages
- Add the package js files in your global.css using the @source

## Removed Styles and utilities
