import { nip19 } from "nostr-tools";

export const NPUB = "npub1dergggklka99wwrs92yz8wdjs952h2ux2ha2ed598ngwu9w7a6fsh9xzpc";

const decoded = nip19.decode(NPUB);
if (decoded.type !== "npub") throw new Error(`Expected an npub, got "${decoded.type}"`);

export const PUBKEY = decoded.data;

export const RELAYS = ["wss://relay.dergigi.com", "wss://wot.dergigi.com"];

export const LIMIT = 1000;
