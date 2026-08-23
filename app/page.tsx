"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Product = { id: string; code: string; name: string; price: number; blurb: string; detail: string };

const PRODUCTS: Product[] = [
  { id: "icons", code: "ED-01", name: "Icon pack", price: 290, blurb: "120 SVG icons", detail: "A crisp working set for interfaces that need fewer decisions." },
  { id: "notion", code: "ED-02", name: "Notion OS kit", price: 490, blurb: "Templates for solopreneurs", detail: "A practical operating shelf for projects, notes, and weekly resets." },
  { id: "checklist", code: "ED-03", name: "UI checklist PDF", price: 150, blurb: "Ship-quality UI pass", detail: "A compact preflight sheet for the last ten minutes before release." },
];

function money(value: number) {
  return `฿${value.toLocaleString("en-US")}`;
}

export default function Home() {
  const [cart, setCart] = useState<string[]>([]);
  const [notice, setNotice] = useState("The checkout is intentionally offline.");
  const total = useMemo(() => cart.reduce((sum, id) => sum + (PRODUCTS.find((product) => product.id === id)?.price ?? 0), 0), [cart]);

  const addToCart = (product: Product) => {
    setCart((items) => [...items, product.id]);
    setNotice(`${product.name} added to the local order slip.`);
  };

  const removeOne = (id: string) => {
    setCart((items) => {
      const index = items.indexOf(id);
      return index === -1 ? items : [...items.slice(0, index), ...items.slice(index + 1)];
    });
    setNotice("One line removed from the local order slip.");
  };

  return (
    <main className="dp-page">
      <header className="dp-masthead">
        <Link className="dp-mark" href="/">BOOKCHAOWALIT / EDITIONS</Link>
        <span>LOCAL SHELF / 03 GOODS</span>
        <span className="dp-masthead-state"><i /> CHECKOUT OFFLINE</span>
      </header>

      <section className="dp-hero">
        <div className="dp-hero-copy">
          <p className="dp-kicker">A small digital goods counter</p>
          <h1>Good files,<br /><em>ready to leave</em> the shelf.</h1>
          <p className="dp-intro">A focused storefront for useful digital things. Pick an edition, read its note, and place it on a browser-only order slip.</p>
          <div className="dp-proof"><span>01</span><p>Every item is a portfolio sample. No payment, account, or delivery claim is hiding behind the button.</p></div>
        </div>

        <aside className="dp-slip" aria-live="polite">
          <div className="dp-slip-head"><span>ORDER SLIP / LOCAL</span><b>{String(cart.length).padStart(2, "0")}</b></div>
          <div className="dp-slip-body">
            {cart.length === 0 ? <p className="dp-slip-empty">Nothing selected.<br />The slip is waiting.</p> : (
              <ul className="dp-slip-list">
                {PRODUCTS.map((product) => {
                  const quantity = cart.filter((id) => id === product.id).length;
                  return quantity > 0 ? <li key={product.id}><span>{quantity} × {product.name}</span><b>{money(product.price * quantity)}</b><button type="button" onClick={() => removeOne(product.id)} aria-label={`Remove one ${product.name}`}>−</button></li> : null;
                })}
              </ul>
            )}
          </div>
          <div className="dp-slip-total"><span>LOCAL TOTAL</span><strong>{money(total)}</strong></div>
          <button type="button" className="dp-checkout" disabled>CHECKOUT UNAVAILABLE <span>DEMO</span></button>
          <p className="dp-notice" role="status">{notice}</p>
        </aside>
      </section>

      <section className="dp-editions" aria-labelledby="editions-title">
        <div className="dp-section-line"><span>02 / THE SHELF</span><span>USEFUL THINGS, CLEARLY LABELED</span></div>
        <div className="dp-section-intro"><h2 id="editions-title">Pick an edition.</h2><p>Each line has a job before it has a price.</p></div>
        <div className="dp-edition-list">
          {PRODUCTS.map((product) => {
            const quantity = cart.filter((id) => id === product.id).length;
            return <article className={`dp-edition ${quantity ? "is-selected" : ""}`} key={product.id}>
              <div className="dp-edition-code"><span>{product.code}</span><i>{quantity ? `IN SLIP ×${quantity}` : "AVAILABLE"}</i></div>
              <div className="dp-edition-copy"><h3>{product.name}</h3><p>{product.detail}</p><small>{product.blurb}</small></div>
              <div className="dp-edition-action"><strong>{money(product.price)}</strong><button type="button" onClick={() => addToCart(product)}>{quantity ? "Add one more" : "Add to slip"}<span aria-hidden="true">↗</span></button></div>
            </article>;
          })}
        </div>
      </section>

      <footer className="dp-footer"><strong>THE SHELF IS SMALL ON PURPOSE.</strong><span>Local state only · Bookchaowalit · 2026</span></footer>
    </main>
  );
}
