"""Capture the design-gallery images: blog post headers and inner pages of the sites Harry built.

Writes public/images/gallery/<name>.webp (desktop, top of page, 960 px wide).
Usage: python scripts/capture_gallery.py [name ...]
"""
import io
import sys
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "gallery"
BLOG = "https://usprimerealty.com/{}/"

PAGES = {
    "blog-flood-zones": BLOG.format("florida-flood-zones-homebuyers-guide"),
    "blog-living-in-naples": BLOG.format("living-in-naples-florida-2026"),
    "blog-miami-luxury": BLOG.format("miami-florida-luxury-real-estate-2026-market-guide"),
    "blog-orlando-living": BLOG.format("living-in-orlando-florida-2026"),
    "blog-condo-vs-house": BLOG.format("south-florida-condo-vs-single-family-home-2026"),
    "blog-preconstruction": BLOG.format("pre-construction-homes-florida-2026-buyers-guide"),
    "blog-cape-coral": BLOG.format("cape-coral-investment-property"),
    "israel-balfour-81": "https://israel.usprimerealty.com/balfour-81/",
    "israel-hagdud-haivri": "https://israel.usprimerealty.com/hagdud-haivri/",
    "israel-lovely-bavli": "https://israel.usprimerealty.com/lovely-bavli/",
}

HIDE = "chat-widget,#google_translate_element,.goog-te-gadget{display:none!important}"


def main(names: list[str]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", args=["--lang=en-US"])
        ctx = browser.new_context(viewport={"width": 1440, "height": 900}, locale="en-US")
        for name in names:
            page = ctx.new_page()
            page.goto(PAGES[name], wait_until="networkidle", timeout=90000)
            page.wait_for_timeout(2500)
            try:
                page.add_style_tag(content=HIDE)
            except Exception:
                page.wait_for_timeout(2000)
                page.add_style_tag(content=HIDE)
            # Blog posts: skip the site header so the post's own banner fills the frame.
            if name.startswith("blog-"):
                page.evaluate("window.scrollTo(0, document.querySelector('#single-header, .entry-content, article')?.getBoundingClientRect().top + window.scrollY - 0 || 0)")
                page.wait_for_timeout(800)
            im = Image.open(io.BytesIO(page.screenshot())).convert("RGB").resize((960, 600), Image.LANCZOS)
            im.save(OUT / f"{name}.webp", "WEBP", quality=80, method=6)
            print("ok", name)
            page.close()
        browser.close()


if __name__ == "__main__":
    main(sys.argv[1:] or list(PAGES))
