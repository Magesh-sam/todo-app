import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import All from "./Screens/All";
import Completed from "./Screens/Completed";
import Pending from "./Screens/Pending";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="Home"
            inactiveColor="#B1B3B8"
            style={{ paddingBottom: 10 }}
          >
            <Tab.Screen
              name="All"
              component={All}
              options={{
                title: "All",

                tabBarIcon: () => {
                  return (
                    <MaterialCommunityIcons
                      name="format-list-checks"
                      size={26}
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
                title: "Pending",
                tabBarColor: "#F2963F",
                tabBarIcon: () => {
                  return (
                    <MaterialCommunityIcons
                      name="progress-check"
                      size={26}
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
                title: "Completed",
                tabBarColor: "#00C853",
                tabBarIcon: () => {
                  return (
                    <MaterialCommunityIcons
                      name="check"
                      size={26}
                      color="#00C853"
                    />
                  );
                },
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
