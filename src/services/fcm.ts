import { getToken } from "firebase/messaging";
import { messaging } from "../firebase";

export const requestForToken = async (): Promise<string | null> => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BGHrkWNNvomrQ2o5zWae_w53e48Q3XPeziHXapGxMInbZMEWfgHbzmB8kS8xvoCTMA29-1hZaYltcIXefyBUPXs",
    });

    return currentToken;
  } catch (err) {
    console.error("An error occurred while retrieving token. ", err);
    return null;
  }
};
