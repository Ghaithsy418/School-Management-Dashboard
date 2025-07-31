import React, { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { BiDislike, BiHeart, BiLaugh, BiLike } from "react-icons/bi";
import { FaRegFaceAngry } from "react-icons/fa6";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { UseMutateFunction, useQueryClient } from "@tanstack/react-query";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaRegSurprise } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.08,
      duration: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

interface DataTypes {
  reaction: string;
  reactable_id: number;
  reactable_type: string;
}

interface ReactionsListTypes {
  reactable_type: string;
  iconSize?: string;
  makeReactMutation: UseMutateFunction<unknown, Error, DataTypes, unknown>;
  setReactionObjState: Dispatch<
    SetStateAction<{
      isReactedState: boolean;
      userReactionState: string;
      currentReactionNumber: number;
    }>
  >;
  reactionObjState: {
    isReactedState: boolean;
    userReactionState: string;
    currentReactionNumber: number;
  };
  id: number;
}

function ReactionsList({
  reactable_type,
  iconSize = "h-6 w-6",
  makeReactMutation,
  id,
  setReactionObjState,
  reactionObjState,
}: ReactionsListTypes) {
  const queryClient = useQueryClient();
  const { t } = useTranslation("newsAndAdds");
  const { isReactedState, userReactionState } = reactionObjState;
  function handleClick(value: string) {
    if (isReactedState && userReactionState === value) return;

    setReactionObjState?.((prevState) => ({
      isReactedState: !prevState.isReactedState,
      userReactionState: value,
      currentReactionNumber: userReactionState
        ? prevState.currentReactionNumber
        : prevState.currentReactionNumber + 1,
    }));
    makeReactMutation(
      {
        reactable_id: id,
        reaction: value,
        reactable_type,
      },
      {
        onSuccess: () => {
          if (reactable_type === "event")
            queryClient.invalidateQueries({ queryKey: ["reactions", id] });
        },
      },
    );
  }

  return (
    <TooltipProvider delayDuration={150}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="absolute -top-14 z-20 flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-xl dark:border-slate-700 dark:bg-slate-800"
      >
        {icons.map((iconData) => (
          <Tooltip key={iconData.value}>
            <TooltipTrigger asChild>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.25, y: -4 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <button
                  onClick={() => handleClick(iconData.value)}
                  className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition-colors duration-300 ${iconData.bgColor} ${iconData.bgHoverColor}`}
                >
                  {React.cloneElement(iconData.icon, {
                    className: `${iconSize} transition-colors duration-300 ${iconData.color}`,
                  })}
                </button>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="capitalize">{t(`reactions.${iconData.value}`)}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </motion.div>
    </TooltipProvider>
  );
}

const icons = [
  {
    icon: <BiLike />,
    value: "like",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    bgHoverColor: "hover:bg-blue-200",
  },
  {
    icon: <BiDislike />,
    value: "dislike",
    color: "text-slate-500",
    bgColor: "bg-slate-100",
    bgHoverColor: "hover:bg-slate-200",
  },
  {
    icon: <BiHeart />,
    value: "love",
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    bgHoverColor: "hover:bg-rose-200",
  },
  {
    icon: <BiLaugh />,
    value: "haha",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    bgHoverColor: "hover:bg-yellow-200",
  },
  {
    icon: <FaRegSurprise />,
    value: "wow",
    color: "text-sky-500",
    bgColor: "bg-sky-100",
    bgHoverColor: "hover:bg-sky-200",
  },
  {
    icon: <HiOutlineEmojiSad />,
    value: "sad",
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    bgHoverColor: "hover:bg-orange-200",
  },
  {
    icon: <FaRegFaceAngry />,
    value: "angry",
    color: "text-red-500",
    bgColor: "bg-red-100",
    bgHoverColor: "hover:bg-red-200",
  },
];

export default ReactionsList;
