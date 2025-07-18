import { getUserEvents } from "@/services/apiEvents";
import { EventTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface UserEvents {
  events: EventTypes[];
}

export const useGetUserEvents = function (userId: number) {
  const { data, isLoading: isGettingEvents } = useQuery<UserEvents>({
    queryKey: ["userEvents", userId],
    queryFn: () => getUserEvents({ user_id: userId }),
  });

  return { events: data?.events, isGettingEvents };
};
