import * as React from "react";
import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "../screens/MainScreen";
import TicketScreen from "../screens/TicketScreen";
import { MAIN_SCREEN, TICKET_SCREEN } from "./Routes";

const Stack = createNativeStackNavigator();

const RootApp = () => {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={MAIN_SCREEN}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={MAIN_SCREEN}
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={TICKET_SCREEN}
          component={TicketScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootApp;
