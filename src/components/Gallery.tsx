import type { NostrEvent } from "applesauce-core/helpers";
import { matchesColor } from "../colors";
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
          hidden={!!activeColor && !matchesColor(buckets[note.id], activeColor)}
          onColors={onColors}
        />
      ))}
    </div>
  );
}
