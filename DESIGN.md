# Design direction

## Product world

Digital Products is an edition desk: a small, high-energy print counter for useful files. The interface treats every product as a labeled physical edition and the cart as an order slip, making the portfolio demo feel like a real shop without claiming that checkout or delivery exists.

## Visual system

- Palette: electric blue `#3157ff`, paper `#f5f1e8`, ink `#101116`, safety orange `#b63822`, and signal yellow `#f5c542`.
- Type: `Bebas Neue` for shelf signage and `DM Mono` for labels, prices, and operational copy.
- Composition: oversized editorial headline, offset order slip, ruled shelf rows, and restrained print-shop markers.
- Motion: short, reduced-motion-safe transitions on buttons and the local order slip; no decorative animation competes with the product list.

## Interaction and boundary

The three edition buttons add or remove items from a browser-only order slip. The checkout control stays disabled and explains the boundary. There is no payment, account, download, or delivery flow.

## Responsive behavior

The desktop layout places the order slip beside the shelf; mobile stacks the slip and editions into one reading path, keeps controls full-width, and prevents horizontal overflow.
