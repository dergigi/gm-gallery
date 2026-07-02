import type { NostrEvent } from "applesauce-core/helpers";
import { GmCard } from "./GmCard";

export function Gallery({ notes }: { notes: NostrEvent[] }) {
  return (
    <div className="masonry">
      {notes.map((note) => (
        <GmCard key={note.id} note={note} />
      ))}
    </div>
  );
}
