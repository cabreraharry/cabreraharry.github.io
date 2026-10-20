"""Capture screenshots of Harry's live work for the portfolio's project cards.

Writes WebP files to public/images/projects/<slug>-<view>.webp:
  -1.webp  desktop, top of page        (card thumbnail)
  -2.webp  desktop, further down page  (carousel)
  -m.webp  phone, top of page          (carousel)

Usage: python scripts/capture_screenshots.py [slug ...]
"""
import io
import sys
from pathlib import Path

from PIL import Image
from playwright.sync_api import sync_playwright

OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "projects"

# slug -> (url, how far down the second desktop shot starts, in viewport heights)
PAGES = {
    "bayit-properties": ("https://bayitproperties.usprimerealty.com/", 1.1),
    "rentals": ("https://rentals.usprimerealty.com/", 1.1),
    "israel-projects": ("https://israel.usprimerealty.com/", 1.6),
    "israel-seminar": ("https://seminar.usprimerealty.com/", 1.0),
    "usprimerealty-wordpress": ("https://usprimerealty.com/", 1.0),
    "seo-blog-posts": ("https://usprimerealty.com/naples-florida-cost-of-living-2026/", 1.2),
}

# Hide floating chat bubbles and the Google Translate picker (it shows Filipino from a PH IP).
HIDE = "chat-widget,#google_translate_element,.goog-te-gadget{display:none!important}"


def save_webp(png_bytes: bytes, path: Path, width: int) -> None:
    im = Image.open(io.BytesIO(png_bytes)).convert("RGB")
    im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    im.save(path, "WEBP", quality=82, method=6)


def settle(page) -> None:
    page.wait_for_timeout(2500)
    for _ in range(3):
        try:
            page.add_style_tag(content=HIDE)
            return
        except Exception:  # page redirected after load
            page.wait_for_load_state("networkidle", timeout=60000)
            page.wait_for_timeout(2000)


def main(slugs: list[str]) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch(channel="chrome", args=["--lang=en-US"])
        for slug in slugs:
            url, second = PAGES[slug]
            ctx = browser.new_context(viewport={"width": 1440, "height": 900}, locale="en-US")
            page = ctx.new_page()
            page.goto(url, wait_until="networkidle", timeout=90000)
            settle(page)
            save_webp(page.screenshot(), OUT / f"{slug}-1.webp", 1440)
            # Scroll in steps so lazy-loaded images and reveal animations fire.
            target = int(900 * second)
            for y in range(0, target + 1, 300):
                page.evaluate(f"window.scrollTo(0, {y})")
                page.wait_for_timeout(250)
            page.wait_for_timeout(1500)
            save_webp(page.screenshot(), OUT / f"{slug}-2.webp", 1440)
            ctx.close()

            ctx = browser.new_context(viewport={"width": 390, "height": 844}, device_scale_factor=2,
                                      is_mobile=True, has_touch=True, locale="en-US")
            page = ctx.new_page()
            page.goto(url, wait_until="networkidle", timeout=90000)
            settle(page)
            save_webp(page.screenshot(), OUT / f"{slug}-m.webp", 600)
            ctx.close()
            print("ok", slug, page.url if False else url)
        browser.close()


if __name__ == "__main__":
    main(sys.argv[1:] or list(PAGES))
