import { useState } from "react";
import { nip19 } from "nostr-tools";
import type { NostrEvent } from "applesauce-core/helpers";
import { getImages } from "../content";

export function GmCard({ note }: { note: NostrEvent }) {
  const [broken, setBroken] = useState(false);

  const image = getImages(note)[0];
  if (!image || broken) return null;

  const nevent = nip19.neventEncode({ id: note.id, author: note.pubkey });
  const date = new Date(note.created_at * 1000).toLocaleDateString();

  return (
    <a className="card" href={`https://njump.to/${nevent}`} target="_blank" rel="noreferrer">
      <img
        src={image}
        alt={`GM post from ${date}`}
        loading="lazy"
        decoding="async"
        onError={() => setBroken(true)}
      />
    </a>
  );
}
