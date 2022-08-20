// If you are not familiar with React Navigation, check out the "Fundamentals" guide:
// https://reactnavigation.org/docs/getting-started
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../src/screens/Login";
import HomeScreen from "../src/screens/Home";
import ProfileScreen from "../src/screens/Profile";
import SelectedScreen from "../src/screens/Selected";

import LinkingConfiguration from "./LinkingConfiguration";
import { useContext} from "react";
import AuthProvider, { FirebaseContext } from "../src/firebase/firebaseContext";

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
  const { user } = useContext(FirebaseContext)

  function PagesApp(){
    return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Selected" component={SelectedScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <>
      { user == null ?
          <PagesApp/> :
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
      }
    </>
  );
}
