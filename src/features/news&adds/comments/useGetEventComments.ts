import { getEventComments } from "@/services/apiEvents";
import { CommentsTypes } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

interface CommentTypes {
  data: CommentsTypes[];
}

export const useGetEventComments = function (id: number) {
  const { data, isLoading: isGettingComments } = useQuery<CommentTypes>({
    queryKey: ["comments", id],
    queryFn: () => getEventComments(id),
  });

  return { comments: data?.data, isGettingComments };
};
