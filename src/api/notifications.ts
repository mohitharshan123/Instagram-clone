import { Notification } from "@screens/Notifications";
import axios from "axios";
import { JSON_SERVER_BASE_URL } from ".";

export const fetchNotifications = (): Promise<Notification[]> =>
  axios.get(`${JSON_SERVER_BASE_URL}/notifications`);
