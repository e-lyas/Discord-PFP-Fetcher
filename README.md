# Discord-PFP-Fetcher

A simple Cloudflare Worker that automatically fetches and serves your **Discord profile picture**.  
Perfect for dynamic websites, portfolios, or social link pages — your avatar updates automatically every time you change it on Discord.

---

## ✨ What It Does

This Worker acts as a lightweight proxy between your website and Discord’s API.

When requested, it:
1. Fetches your latest Discord user data from the official API.
2. Detects whether your avatar is static (`.png`) or animated (`.gif`).
3. Redirects the request directly to your most recent Discord profile picture.
4. Ensures your site always displays your **current** avatar without manual updates.
