import { GoBell } from "react-icons/go";

function NotificationButton() {
  return (
    <button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200/60 text-yellow-600 transition-all duration-300 hover:scale-110 hover:bg-gray-200">
      <GoBell className="h-5 w-5" />
      <span className="absolute top-1.5 right-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-600 p-1 text-center text-[8px] text-red-50">
        5
      </span>
    </button>
  );
}

export default NotificationButton;
