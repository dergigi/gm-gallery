import type { NostrEvent } from "applesauce-core/helpers";
import { GmCard } from "./GmCard";

export function Gallery({
  notes,
  activeColor,
  buckets,
  onColors,
}: {
  notes: NostrEvent[];
  activeColor: string | null;
  buckets: Record<string, string[]>;
  onColors: (id: string, buckets: string[]) => void;
}) {
  return (
    <div className="masonry">
      {notes.map((note) => (
        <GmCard
          key={note.id}
          note={note}
          hidden={!!activeColor && !buckets[note.id]?.includes(activeColor)}
          onColors={onColors}
        />
      ))}
    </div>
  );
}
