import { EventTypes } from "@/utils/types";
import { useVirtualizer } from "@tanstack/react-virtual";
import React, { Suspense, useRef } from "react";
import PostsLoading from "./PostsLoading";

const Post = React.lazy(() => import("./Post"));

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
        className="relative w-full overflow-visible"
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
            <div
              className={virtualItem.index === events.length - 1 ? "" : "pb-1"}
            >
              <Suspense fallback={<PostsLoading />}>
                <Post event={events[virtualItem.index]} />
              </Suspense>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenderEvents;
