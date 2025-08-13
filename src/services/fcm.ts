import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";

export const requestForToken = async (): Promise<string | null> => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BGHrkWNNvomrQ2o5zWae_w53e48Q3XPeziHXapGxMInbZMEWfgHbzmB8kS8xvoCTMA29-1hZaYltcIXefyBUPXs",
    });
    if (currentToken) {
      console.log("Current token for client: ", currentToken);
      // TODO: Send this token to your server to store it.
    } else {
      console.log(
        "No registration token available. Request permission to generate one.",
      );
    }
    return currentToken;
  } catch (err) {
    console.error("An error occurred while retrieving token. ", err);
    return null;
  }
};
