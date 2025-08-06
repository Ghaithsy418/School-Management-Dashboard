import { GoBell } from "react-icons/go";
import IconNumber from "./IconNumber";

function NotificationButton() {
  return (
    <IconNumber
      numberOffset="right-1.5 top-1.5"
      className="h-10 w-10 items-center justify-center rounded-lg text-yellow-600 transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:border dark:border-gray-600 dark:bg-gray-700 dark:text-yellow-300 dark:hover:bg-gray-600"
    >
      <GoBell className="h-5 w-5" />
    </IconNumber>
  );
}

export default NotificationButton;
