import Layout from "@components/Layout";
import { useFetchNotifications } from "@hooks/api/useNotificationsApi";
import React from "react";
import { StyleSheet } from "react-native";
import { Text, ScrollView, View } from "react-native";
import NotificationItem from "./Item";

export type Notification = {
  time: string;
  is_following: boolean;
  action: "follow_request" | "follow";
  username: string;
  avatar: string;
};

const Notifications: React.FC<any> = () => {
  const { data: notifications, isLoading } = useFetchNotifications();
  return (
    <Layout>
      {isLoading ? null : (
        <ScrollView>
          {Object.entries(notifications).map(([key, notifications]) => (
            <View style={styles.container} key={key}>
              <Text style={styles.dateText}>{key}</Text>
              {(notifications as Notification[]).map((notification: any) => (
                <NotificationItem key={notification.id} {...{ notification }} />
              ))}
            </View>
          ))}
        </ScrollView>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  dateText: { color: "white", fontWeight: "bold", fontSize: 15 },
  container: { display: "flex", flexDirection: "column", gap: 10, padding: 20 },
});

export default Notifications;
