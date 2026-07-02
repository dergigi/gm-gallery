import { useEffect, useRef, useState } from "react";
import type { NostrEvent } from "applesauce-core/helpers";
import { matchesColor } from "../colors";
import { GmCard } from "./GmCard";

const COLUMN_WIDTH = 300;

function useColumnCount(ref: React.RefObject<HTMLDivElement | null>) {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      setCount(Math.max(1, Math.floor(el.clientWidth / COLUMN_WIDTH)));
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
  return count;
}

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
  const ref = useRef<HTMLDivElement>(null);
  const count = useColumnCount(ref);

  // Round-robin placement keeps existing items put when more are appended.
  const columns: NostrEvent[][] = Array.from({ length: count }, () => []);
  notes.forEach((note, i) => columns[i % count].push(note));

  return (
    <div className="masonry" ref={ref}>
      {columns.map((column, i) => (
        <div className="col" key={i}>
          {column.map((note) => (
            <GmCard
              key={note.id}
              note={note}
              hidden={!!activeColor && !matchesColor(buckets[note.id], activeColor)}
              onColors={onColors}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
