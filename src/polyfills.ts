// Older Android WebViews and browsers lack URL.canParse (added in Chrome 120 /
// Safari 17). Some dependencies (e.g. nostr-tools) call it, so provide a fallback.
if (typeof URL.canParse !== "function") {
  URL.canParse = (url: string | URL, base?: string | URL): boolean => {
    try {
      new URL(url, base);
      return true;
    } catch {
      return false;
    }
  };
}
