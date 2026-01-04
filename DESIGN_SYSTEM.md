# Design System Documentation

## Figma-Inspired Pastel + Noise Design System

This design system implements a modern, soft aesthetic using pastel gradients combined with a subtle noise texture overlay. It provides a warm, approachable visual style while maintaining professionalism and readability.

## Typography

### Primary Font: Satoshi
- **Source**: Loaded via Fontshare CDN
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Fallbacks**: Inter, system-ui, -apple-system, sans-serif
- **Usage**: Applied globally to the body element

The Satoshi font provides a modern, geometric appearance that complements the soft pastel aesthetic.

## Design Utilities

### `.bg-pastel-noise` - Background Gradient with Noise

A layered background effect suitable for page sections and large containers.

**Features:**
- Multiple radial gradients in soft pastel tones (purple, pink, blue)
- White base background
- Seamless noise texture overlay with `mix-blend-mode: soft-light`
- Opacity: ~12% for subtle texture
- Non-interactive overlay (pointer-events: none)

**Usage:**
```jsx
<section className="bg-pastel-noise py-20">
  {/* Your content */}
</section>
```

**Best Practices:**
- Use for full-width sections or main page containers
- Ensure text has sufficient contrast (test with dark and light text)
- Works well as a hero section or feature section background

### `.card-pastel` - Rounded Card with Pastel Gradients

Styled cards with rounded corners, subtle gradients, and noise texture.

**Features:**
- Border radius: 40px (soft, rounded appearance)
- Subtle border: rgba(226, 232, 240, 0.6)
- Soft shadow for depth
- Internal radial gradients (pink and purple tones)
- Noise texture overlay at 10% opacity
- Automatic z-index layering for child content

**Usage:**
```jsx
<div className="card-pastel p-6">
  {/* Card content */}
</div>
```

**Best Practices:**
- Use for feature cards, pricing cards, and content blocks
- Maintain adequate padding (minimum p-6) for visual breathing room
- Content inside cards automatically receives proper z-index layering
- Works well with both light and colored content

## Noise Texture Asset

### File: `/public/noise.png`

**Specifications:**
- Size: 200×200 pixels
- Format: PNG (grayscale)
- Pattern: Seamless, tileable noise
- File size: ~40KB
- Purpose: Adds subtle grain texture to backgrounds

**Technical Details:**
- Applied via CSS `background-image: url('/noise.png')`
- Background repeat: `repeat` (seamless tiling)
- Blend mode: `soft-light` for natural integration
- Opacity: 10-12% (adjustable per component)

## Color Palette

The design system uses soft pastel gradients derived from:
- **Purple tones**: rgba(120, 119, 198, 0.15) / rgba(196, 181, 253, 0.12)
- **Pink tones**: rgba(253, 186, 186, 0.15) / rgba(251, 207, 232, 0.12)
- **Blue tones**: rgba(186, 230, 253, 0.15)
- **Base**: #ffffff (white)

All colors use low opacity (10-15%) to maintain subtlety and prevent overwhelming the content.

## Accessibility Considerations

### Contrast
- The low-opacity gradients and noise ensure text remains readable
- Test all text colors against the backgrounds using contrast checkers
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text

### Visual Comfort
- Noise opacity kept low (10-12%) to avoid visual strain
- Soft gradients prevent harsh color transitions
- Rounded corners (40px) create a friendly, approachable aesthetic

### Performance
- Noise texture is small (40KB) and cached by browsers
- CSS uses efficient rendering techniques (::before pseudo-elements)
- No JavaScript required for styling

## Integration Examples

### Full Page Layout
```jsx
export default function Page() {
  return (
    <div className="bg-pastel-noise min-h-screen">
      <section className="py-20">
        {/* Content */}
      </section>
    </div>
  );
}
```

### Feature Cards Grid
```jsx
<div className="grid grid-cols-3 gap-8">
  <div className="card-pastel p-6">
    <h3>Feature 1</h3>
    <p>Description</p>
  </div>
  <div className="card-pastel p-6">
    <h3>Feature 2</h3>
    <p>Description</p>
  </div>
  <div className="card-pastel p-6">
    <h3>Feature 3</h3>
    <p>Description</p>
  </div>
</div>
```

## Implementation Notes

### Compatibility
- Next.js App Router compatible
- Works with Tailwind CSS utility classes
- No conflicts with existing GSAP animations
- Compatible with Framer Motion

### Customization
To adjust the design:
1. **Noise intensity**: Modify opacity in `.bg-pastel-noise::before` or `.card-pastel::before`
2. **Gradient colors**: Update the `radial-gradient` color stops in `globals.css`
3. **Border radius**: Change the `border-radius` value in `.card-pastel`
4. **Blend mode**: Experiment with `overlay`, `multiply`, or `screen` instead of `soft-light`

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS blend modes supported in all modern browsers
- Graceful degradation: backgrounds still visible without blend mode support

## Maintenance

### Updating the Noise Texture
If you need to replace the noise texture:
1. Create a new seamless noise pattern (200×200px recommended)
2. Save as `public/noise.png` or `public/noise.webp`
3. Update CSS references if using different format
4. Optimize for web (keep under 50KB)

### Future Enhancements
Potential additions to the design system:
- Dark mode variants with adjusted opacity
- Additional card variants (outlined, elevated, etc.)
- Gradient animation utilities
- Color theme customization options
