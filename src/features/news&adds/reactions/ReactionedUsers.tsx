import { detectReactionsArray } from "@/utils/detectReactionType";
import { motion, Variants } from "framer-motion";
import { useReactionedUsers } from "./useReactionedUsers";
import Spinner from "@/ui/Spinner";
import Empty from "@/ui/Empty";

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: "spring", stiffness: 400, damping: 20 },
  }),
};

function ReactionedUsers({ eventId }: { eventId: number }) {
  const { reactions, isGettingReactions } = useReactionedUsers(eventId);

  const reactionTypes = reactions?.map((r) => r.reaction_type);
  const detectedReactions = detectReactionsArray(reactionTypes || []);

  if (isGettingReactions) return <Spinner />;
  if (!reactions?.length) return <Empty resource="reactions" />;

  return (
    <div className="flex w-full flex-col gap-4">
      <h2 className="text-2xl font-bold text-slate-800">Recent Reactions</h2>
      <p className="text-slate-500">
        Here are the latest reactions from users.
      </p>

      <div className="mt-2 flow-root">
        <ul role="list" className="-my-4 divide-y divide-slate-200/80">
          {reactions?.map((reaction, i) => {
            const currentReaction = detectedReactions[i];
            const IconComponent = currentReaction?.icon;

            return (
              <motion.li
                key={`${reaction.reaction_id}-${reaction.user.id}`}
                className="flex items-center space-x-4 py-4"
                variants={listItemVariants}
                initial="hidden"
                animate="visible"
                custom={i}
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 font-bold text-indigo-700 shadow-inner">
                  {reaction.user.name.charAt(0).toUpperCase()}
                  {reaction.user.lastName.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-slate-800">
                    {/* ✅ UPDATED: Using camelCase properties */}
                    {reaction.user.name} {reaction.user.lastName}
                  </p>
                  <p className="truncate text-sm text-slate-500">
                    {reaction.user.email}
                  </p>
                </div>

                {currentReaction && IconComponent ? (
                  <div
                    className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold capitalize ${currentReaction.bgColor}`}
                  >
                    <IconComponent
                      className={`h-5 w-5 ${currentReaction.color}`}
                    />
                    <span className={currentReaction.color}>
                      {currentReaction.value}
                    </span>
                  </div>
                ) : (
                  <div className="text-3xl">❓</div>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ReactionedUsers;
