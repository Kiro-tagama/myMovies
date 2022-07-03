// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import NotFoundScreen from "../src/screens/NotFoundScreen";
import HomeScreen from "../src/screens/Home";
import LoginScreen from "../src/screens/Login";

import LinkingConfiguration from "./LinkingConfiguration";
import { useState } from "react";
import AuthProvider from "../src/firebase/authFirebase.js";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator();

function RootNavigator() {
  const [haveUser, setHaveUser]=useState(false)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      { haveUser ?
          <Stack.Screen name="Home" component={HomeScreen} /> :
          <Stack.Screen name="Login" component={LoginScreen} />
      }
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}
