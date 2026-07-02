# GM Gallery

A view-only nostr client that shows [dergigi](https://njump.me/npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc)'s GM posts that contain an image, in a masonry gallery. Lives at [gm.dergigi.com](https://gm.dergigi.com).

Built with [applesauce](https://applesauce.build/), React, Vite and TypeScript.

## How it works

- Notes are loaded by author from `relay.dergigi.com` and `wot.dergigi.com` (the outbox relay holds all of them, so no NIP-50 search is needed).
- Filtering happens client-side: a note shows up if it mentions `gm` as a word and links at least one image.
- Image URLs are extracted with `applesauce-content` and rendered in a CSS-columns masonry that collapses to a single column on mobile.

## Development

```bash
npm install
npm run dev      # start the dev server
npm test         # run the unit tests
npm run build    # production build into dist/
```

## Configuration

Author, relays and fetch limit live in [`src/config.ts`](src/config.ts).

## Deployment (Vercel)

Vercel auto-detects Vite. Build command `npm run build`, output directory `dist`. It is a single-page app, so no rewrite config is needed. Add `gm.dergigi.com` as a custom domain in the Vercel project settings.
