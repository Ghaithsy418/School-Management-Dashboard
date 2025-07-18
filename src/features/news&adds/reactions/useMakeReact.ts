import { makeReact } from "@/services/apiEvents";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

interface DataTypes {
  reaction: string;
  reactable_id: number;
  reactable_type: string;
}

export const useMakeReact = function (
  setReactionObjState?: Dispatch<
    SetStateAction<{
      isReactedState: boolean;
      userReactionState: string;
      currentReactionNumber: number;
    }>
  >,
) {
  const queryClient = useQueryClient();
  const { mutate: makeReactMutation } = useMutation({
    mutationFn: (data: DataTypes) => makeReact(data),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["events"] }),
    onError: (_err: Error, context) => {
      if (!context.reaction) {
        setReactionObjState?.((prevState) => ({
          isReactedState: false,
          userReactionState: "",
          currentReactionNumber: prevState.currentReactionNumber,
        }));
      } else {
        setReactionObjState?.((prevState) => ({
          isReactedState: true,
          userReactionState: context.reaction,
          currentReactionNumber: prevState.currentReactionNumber,
        }));
      }
    },
  });

  return { makeReactMutation };
};
