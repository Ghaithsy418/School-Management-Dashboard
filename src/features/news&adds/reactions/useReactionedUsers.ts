import { getReactionedUsers } from "@/services/apiEvents";
import { useQuery } from "@tanstack/react-query";

type User = {
  id: number;
  name: string;
  last_name: string;
  email: string;
};

type Reaction = {
  user: User[];
  reaction_id: number;
  reaction_type: string;
};

type ReactionedUsersType = {
  message: Reaction[];
};

export const useReactionedUsers = function (eventId: number) {
  const { data, isLoading: isGettingReactions } = useQuery<ReactionedUsersType>(
    {
      queryKey: ["reactions", eventId],
      queryFn: () => getReactionedUsers({ reactable_id: eventId }),
    },
  );

  return { reactions: data?.message, isGettingReactions };
};
