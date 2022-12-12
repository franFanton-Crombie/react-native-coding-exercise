import * as React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import TicketScreen from "../screens/TicketScreen";

const Stack = createNativeStackNavigator();

const RootApp = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={"MainScreen"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={"MainScreen"}
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"TicketScreen"}
          component={TicketScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
