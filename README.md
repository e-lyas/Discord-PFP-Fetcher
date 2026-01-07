Got it! Here’s the updated **README** with the instruction to use your GitHub script directly instead of rewriting it:

````markdown
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

---

## ⚙️ How to Use

### 1. Create a Discord Bot
1. Go to the [Discord Developer Portal](https://discord.com/developers/applications).  
2. Click **“New Application”**, give it a name, and create it.  
3. Navigate to **Bot → Add Bot**, then copy your **Bot Token**.  
> ⚠️ Keep your token private.

### 2. Deploy the Cloudflare Worker
1. Go to [Cloudflare Workers](https://dash.cloudflare.com/?to=/:account/workers).  
2. Click **Create Worker** and **replace the default code** with the script available here:  
[https://github.com/e-lyas/Discord-PFP-Fetcher/blob/main/script.js](https://github.com/e-lyas/Discord-PFP-Fetcher/blob/main/script.js)  

3. Save and deploy your Worker.

### 3. Set Environment Variables
- Under **Settings → Variables**, add:  
  - **Name:** `DISCORD_BOT_TOKEN`  
  - **Value:** your Discord Bot Token  
- Save and redeploy the Worker.

### 4. Use the Worker in Your Site
Point your image tag or CSS background to your Worker URL:

```html
<img src="https://your-worker-name.username.workers.dev" alt="Discord PFP">
````

The image will always show your current Discord avatar.

---

## ✅ Notes

* Supports both static and animated profile pictures.
* Handles automatic updates whenever Discord changes your avatar.
* Lightweight, fast, and free to use.

---

## 💡 License
(MIT License)[https://github.com/e-lyas/Discord-PFP-Fetcher/blob/main/LICENSE] — free to use, modify, and redistribute.
