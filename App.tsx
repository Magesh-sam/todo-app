import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import All from "./Screens/All";
import Completed from "./Screens/Completed";
import Pending from "./Screens/Pending";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "#694fad" }}
      >
        <Tab.Screen
          name="All"
          component={All}
          options={{
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons
                  name="format-list-checks"
                  size={32}
                  color="#00B0FF"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Pending"
          component={Pending}
          options={{
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons
                  name="progress-check"
                  size={32}
                  color="#F2963F"
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Completed"
          component={Completed}
          options={{
            tabBarIcon: () => {
              return (
                <MaterialCommunityIcons
                  name="check"
                  size={32}
                  color="#00C853"
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
