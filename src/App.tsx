/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Main from "./screens/Main";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Notifications from "@screens/Notifications";
import { SCREENS } from "./constants";
import Stories from "@screens/Main/Home/Stories";
import { HEADER_HEIGHT } from "@screens/Main/Home/InstagramHeader";

const Stack = createStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREENS.main}
            component={Main}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: "#161616",
                height: HEADER_HEIGHT,
              },
              headerTintColor: "white",
            }}
            name={SCREENS.notifications}
            component={Notifications}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name={SCREENS.stories}
            component={Stories}
          />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
