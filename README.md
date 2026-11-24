# Deepanshu — DevOps Portfolio

A responsive, single-page portfolio built with plain HTML, CSS and JavaScript. No build step or package installation is required.

## Preview locally

Open `index.html` in a browser, or run a local server from this folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.


## Deploy

This is a static site. You can publish the folder with GitHub Pages, Netlify, Cloudflare Pages or any static web host. Upload the contents of this folder as the site root.

## Files

- `index.html` — page structure and portfolio content
- `styles.css` — responsive visual design
- `script.js` — mobile navigation, contact links and subtle reveal effects
- `config.js` — public contact details

# My addition to test claude's capability 
- to check if it can read it 
-  to check if it can edit it 
- to check if it can add something into it.

---

## Why Use Local LLMs in Portfolio Projects?

Building projects with local LLMs offers several advantages worth highlighting:

### 🚀 **Privacy & Security**
- Process sensitive data without exposing it to external APIs
- Ideal for handling PII (Personally Identifiable Information) internally
- No GDPR or CCPA concerns when running models locally

### 💰 **Cost Efficiency**
- Eliminate ongoing API costs for inference requests
- Especially beneficial at scale: no per-request fees accumulate
- More predictable budgeting without surprise charges

### 🏗️ **Customization & Control**
- Fine-tune models on your specific domain knowledge
- Implement custom safety guards and prompt injection protections
- Customize system prompts and response formatting for unique use cases

### 🔌 **Deployment Flexibility**
- Run on-premises, in private clouds, or with air-gapped systems
- No dependency on third-party service availability
- Works even when internet connectivity is unavailable

### ⚖️ **Balanced Trade-off**
Local LLMs can still deliver strong results for many use cases. While they do consume more resources than small APIs:
- Models like Llama 3 (8B) offer excellent general-purpose capabilities
- With quantization, you get ~75-80% of API performance at a fraction of the cost
- For many portfolio projects, this balance is the sweet spot

---

**TL;DR:** Local LLMs give you privacy, flexibility, and customization—perfect for building production-grade portfolio projects without exposing sensitive data or incurring ongoing API costs.
