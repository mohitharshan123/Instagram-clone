import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Search, Reels, Profile, Post } from "@screens";
import {
  Avatar,
  HomeActive,
  HomeInactive,
  PostIcon,
  ReelsInactive,
  ReelsActive,
  SearchActive,
  SearchInactive,
} from "../../../assets";
import { GLOBAL_STYLES } from "styles";

const Tab = createBottomTabNavigator();

export const TAB_BAR_HEIGHT = 50;

const Tabs: React.FC<any> = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: GLOBAL_STYLES.dark.backgroundColor,
        tabBarInactiveBackgroundColor: GLOBAL_STYLES.dark.backgroundColor,
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <HomeActive /> : <HomeInactive />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <SearchActive /> : <SearchInactive />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Post"
        component={Post}
        options={{
          tabBarIcon: PostIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? <ReelsActive /> : <ReelsInactive />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: Avatar,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
