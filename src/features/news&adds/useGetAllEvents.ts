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

  return { events: data?.events, isGettingEvents };
};
