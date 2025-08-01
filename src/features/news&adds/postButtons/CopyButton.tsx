import { useState } from "react";
import { useTranslation } from "react-i18next";
import { HiLink } from "react-icons/hi";

function CopyButton({ eventId }: { eventId: number }) {
  const [isCopied, setIsCopied] = useState(false);
  const { t } = useTranslation("newsAndAdds");

  const handleClick = async () => {
    const currentLink = location.href;
    await navigator.clipboard.writeText(`${currentLink}/${eventId}`);
    setIsCopied(true);
    setTimeout(function () {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleClick}
      className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-sm px-4 py-2 transition-all duration-300 hover:bg-gray-300/50"
    >
      <HiLink className="h-6 w-6" />{" "}
      <span>{isCopied ? t("main.whenCopy") : t("main.copyButton")}</span>
    </button>
  );
}

export default CopyButton;
