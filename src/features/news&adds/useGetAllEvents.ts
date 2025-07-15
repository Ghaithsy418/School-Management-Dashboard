import { useClientTransform } from "@/hooks/useClientTransform";
import { getAllEvents } from "@/services/apiEvents";
import { EventTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export const useGetAllEvents = function () {
  const { data, isLoading: isGettingEvents } = useQuery<{
    events: EventTypes[];
  }>({
    queryKey: ["events"],
    queryFn: getAllEvents,
  });

  const finalEvents = useClientTransform<EventTypes>(
    data?.events ?? [],
    "event_name",
  );

  return { events: finalEvents, isGettingEvents };
};
