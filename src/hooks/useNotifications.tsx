import { messaging } from "@/firebase";
import { MessagePayload, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { GoBell } from "react-icons/go";

export const useNotifcations = function () {
  useEffect(function () {
    const unsubscribe = onMessage(messaging, (payload: MessagePayload) => {
      toast(
        () => (
          <div className="flex flex-col items-start justify-center">
            <h5 className="text-lg font-bold">{payload.notification?.title}</h5>
            <p>{payload.notification?.body}</p>
          </div>
        ),
        {
          icon: (
            <GoBell className="h-10 w-10 rounded-full bg-yellow-100 p-2.5 text-yellow-500" />
          ),
          style: { gap: "15px" },
        },
      );
    });

    return () => {
      unsubscribe();
    };
  }, []);
};
