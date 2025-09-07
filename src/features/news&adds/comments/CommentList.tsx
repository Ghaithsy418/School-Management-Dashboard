import { useTranslation } from "react-i18next";
import AddComment from "./AddComment";
import PhotoModalComments from "./PhotoModalComments";

interface CommentList {
  id: number;
  autoFocus?: boolean;
}

function CommentList({ id, autoFocus }: CommentList) {
  const { t } = useTranslation("newsAndAdds");

  return (
    <div className="flex h-[35rem] flex-col items-start justify-start gap-5">
      <h3 className="text-2xl font-bold">{t("main.comments")}:</h3>
      <div className="h-[27rem] w-full overflow-y-auto">
        <PhotoModalComments id={id} numberOfLoadingElements={6} />
      </div>
      <div className="fixed bottom-0 w-full place-self-center">
        <AddComment
          bgColor="bg-transparent"
          inputBgColor="bg-gray-300/50 dark:bg-gray-700/90"
          hoverInputBgColor="hover:bg-gray-300/70"
          borderColor="border-transparent"
          isRounded={true}
          event_id={id}
          autoFocus={autoFocus}
        />
      </div>
    </div>
  );
}

export default CommentList;
