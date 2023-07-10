import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  createNavigationContainerRef,
} from "@react-navigation/native";

import Modal from "./src/context/intex";
import HomeScreen from "./src/navigation/screeens/homeScreen";
import SettingsScreen from "./src/navigation/screeens/settingsScreen";
import NotificationScreen from "./src/navigation/screeens/notificationScreen";
import PlusIcon from "./src/components/PlusIcon";

const Tab = createBottomTabNavigator();
const buttonRef: any = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState<string>("");

  const handleGetCurrentRouteName = (routeName: string) =>
    setRouteName(routeName);

  return (
    <>
      <Modal>
        <View style={[styles.row]}>
          <PlusIcon />
        </View>
        <NavigationContainer
          ref={buttonRef}
          onReady={() => {
            const readCurrentRouteName = buttonRef.getCurrentRoute().name;
            handleGetCurrentRouteName(readCurrentRouteName);
          }}
          onStateChange={() => {
            const currentRouteName = buttonRef.getCurrentRoute().name;
            setRouteName(currentRouteName);
          }}
        >
          <Tab.Navigator
            screenOptions={{
              tabBarStyle: styles.tabBarContainer,
            }}
          >
            <Tab.Screen
              name="HomeTab"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <Entypo
                    name="home"
                    size={27}
                    color={focused ? "#7000FF" : "gray"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="SettingsTab"
              component={SettingsScreen}
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="shopping"
                    size={27}
                    color={focused ? "#7000FF" : "gray"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="NotificationTab"
              component={NotificationScreen}
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <Ionicons
                    name="notifications"
                    size={27}
                    color={focused ? "#7000FF" : "gray"}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="MenuTab"
              component={HomeScreen}
              options={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ focused }) => (
                  <AntDesign
                    name="menufold"
                    size={27}
                    color={focused ? "#7000FF" : "gray"}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 89,
    backgroundColor: "#1E1E1E",
  },
  row: {
    position: "absolute",
    width: "100%",
    height: 10,
    bottom: 85,
    zIndex: 10,
    backgroundColor: "#7000FF",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
