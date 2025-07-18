import { shareEvent } from "@/services/apiEvents";
import { EventTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface ShareEventTypes {
  events: EventTypes[];
}

export const useShareEvent = function (postId: number) {
  const { data, isLoading: isGettingEvent } = useQuery<ShareEventTypes>({
    queryKey: ["event", postId],
    queryFn: () => shareEvent({ event_id: postId }),
  });

  return { sharedEvent: data?.events, isGettingEvent };
};
