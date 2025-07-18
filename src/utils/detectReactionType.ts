import { BiDislike, BiHeart, BiLaugh, BiLike } from "react-icons/bi";
import { FaRegSurprise } from "react-icons/fa";
import { FaRegFaceAngry } from "react-icons/fa6";
import { HiOutlineEmojiSad } from "react-icons/hi";

const icons = {
  like: {
    icon: BiLike,
    color: "text-blue-500",
    bgColor: "bg-blue-100",
    value: "like",
  },
  dislike: {
    icon: BiDislike,
    color: "text-slate-500",
    bgColor: "bg-slate-100",
    value: "dislike",
  },
  love: {
    icon: BiHeart,
    color: "text-rose-500",
    bgColor: "bg-rose-100",
    value: "love",
  },
  haha: {
    icon: BiLaugh,
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
    value: "haha",
  },
  wow: {
    icon: FaRegSurprise,
    color: "text-sky-500",
    bgColor: "bg-sky-100",
    value: "wow",
  },
  sad: {
    icon: HiOutlineEmojiSad,
    color: "text-orange-500",
    bgColor: "bg-orange-100",
    value: "sad",
  },
  angry: {
    icon: FaRegFaceAngry,
    color: "text-red-600",
    bgColor: "bg-red-100",
    value: "angry",
  },
};

export function detectReactionType(type: string) {
  return switchForDetecting(type);
}

export function detectReactionsArray(array: string[]) {
  return array.map((reactions) => switchForDetecting(reactions));
}

function switchForDetecting(value: string) {
  switch (value) {
    case "like":
      return icons["like"];
    case "dislike":
      return icons["dislike"];
    case "love":
      return icons["love"];
    case "haha":
      return icons["haha"];
    case "wow":
      return icons["wow"];
    case "sad":
      return icons["sad"];
    case "angry":
      return icons["angry"];
    default:
      return null;
  }
}
