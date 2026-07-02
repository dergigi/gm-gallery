import { useState } from "react";
import { nip19 } from "nostr-tools";
import type { NostrEvent } from "applesauce-core/helpers";
import { getImages } from "../content";
import { bucketsFromImage } from "../colors";

export function GmCard({
  note,
  hidden,
  onColors,
}: {
  note: NostrEvent;
  hidden: boolean;
  onColors: (id: string, buckets: string[]) => void;
}) {
  const [broken, setBroken] = useState(false);

  const image = getImages(note)[0];
  if (!image || broken) return null;

  const nevent = nip19.neventEncode({ id: note.id, author: note.pubkey });
  const date = new Date(note.created_at * 1000).toLocaleDateString();

  return (
    <a
      className="card"
      href={`https://njump.to/${nevent}`}
      target="_blank"
      rel="noreferrer"
      style={hidden ? { display: "none" } : undefined}
    >
      <img
        src={image}
        alt={`GM post from ${date}`}
        crossOrigin="anonymous"
        loading="lazy"
        decoding="async"
        onLoad={(e) => onColors(note.id, bucketsFromImage(e.currentTarget))}
        onError={() => setBroken(true)}
      />
    </a>
  );
}
