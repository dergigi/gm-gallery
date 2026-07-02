/** The npub shown when no user is specified in the URL path. */
export const DEFAULT_NPUB = "npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc";

/**
 * Relays queried to discover a user's NIP-65 relay list and profile, and used
 * as a fallback when a user has no relays of their own.
 */
export const DISCOVERY_RELAYS = [
  "wss://relay.dergigi.com",
  "wss://wot.dergigi.com",
  "wss://purplepag.es",
  "wss://relay.damus.io",
];

export const LIMIT = 1000;

/** The word a note must contain to show up, e.g. "gm" or "gn". Empty means match all. */
export const FILTER_TERM = (import.meta.env.VITE_FILTER_TERM ?? "gm").trim().toLowerCase();

/** A color filter to pre-select on load, e.g. "bw" or "blue". Null means none. */
export const INITIAL_COLOR = (import.meta.env.VITE_INITIAL_COLOR ?? "").trim().toLowerCase() || null;

/** Short label used in the header link and status messages. */
export const LABEL = (FILTER_TERM || INITIAL_COLOR || "gm").toUpperCase();
