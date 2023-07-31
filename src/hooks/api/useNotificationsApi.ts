import { useQuery } from "@tanstack/react-query";

import { DEFAULT_STALE_TIME, QUERY_KEYS } from "@constants/query";
import { fetchNotifications } from "@api/notifications";
import { Notification } from "@screens/Notifications";

type TransformedData = {
  [key: string]: Omit<Notification, "time">[];
};

const transformNotifications = (notifications: Notification[]) => {
  if (!notifications.length) return {};
  const transformedData: TransformedData = {};
  notifications?.forEach(notification => {
    const { time } = notification;
    if (time && time in transformedData) {
      transformedData[time].push(notification);
    } else {
      transformedData[time] = [notification];
    }
  });
  return transformedData;
};

const useFetchNotifications = () =>
  useQuery<any>({
    queryKey: [QUERY_KEYS.notifications],
    queryFn: fetchNotifications,
    staleTime: DEFAULT_STALE_TIME,
    select: res => transformNotifications(res.data),
  });

export { useFetchNotifications };
