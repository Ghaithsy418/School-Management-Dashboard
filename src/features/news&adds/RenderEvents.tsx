import { EventTypes } from "@/utils/types";
import Post from "./Post";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

function RenderEvents({ events }: { events: EventTypes[] }) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: events.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 450,
    overscan: 5,
  });

  return (
    <div ref={parentRef} className="w-full">
      <div
        className="relative w-full"
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            data-index={virtualItem.index}
            ref={rowVirtualizer.measureElement}
            className="absolute top-0 left-0 w-full"
            style={{
              transform: `translateY(${virtualItem.start}px)`,
            }}
          >
            <div className="py-0.5">
              {" "}
              <Post event={events[virtualItem.index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderEvents;
