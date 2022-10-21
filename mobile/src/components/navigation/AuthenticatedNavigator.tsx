import { faCog, faMapPin, faRoute } from "@fortawesome/free-solid-svg-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Suspense } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TailwindColors } from "../../../tailwind";
import { AssetHeaderTitle } from "../assets/AssetHeaderTitle";
import { LiveTrackingScreen } from "../live-tracking/LiveTrackingScreen";
import { SettingsScreen } from "../screens/settings/SettingsScreen";
import { NtIcon } from "../shared/NtIcon";
import TripsScreen from "../trips/TripsScreen";
import { AssetScrollListModal } from "./AssetScrollListModal";

export const AuthenticatedScreems = {
  LiveTracking: "LiveTracking"
};

const BottomTabNavigator = createBottomTabNavigator();

export const AuthenticatedNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <BottomTabNavigator.Navigator
        initialRouteName="LiveTracking"
        screenOptions={{
          tabBarStyle: {
            borderTopWidth: 0,
            height: 49 + insets.bottom,
            backgroundColor: TailwindColors.gray[900]
          },
          tabBarShowLabel: false,
          tabBarItemStyle: {
            height: 49
          },
          tabBarActiveTintColor: TailwindColors.blue[500],
          tabBarInactiveTintColor: TailwindColors.white
        }}
        // tabBarOptions={{
        //   inactiveBackgroundColor: TailwindColors.gray[900],
        //   activeBackgroundColor: TailwindColors.gray[900],
        //   inactiveTintColor: TailwindColors.gray[100],
        //   activeTintColor: TailwindColors.white,
        //   showLabel: false,
        //   style: {
        //     backgroundColor: TailwindColors.gray[900],
        //     borderTopWidth: 0
        //   }
        // }}
      >
        <BottomTabNavigator.Screen
          name="LiveTracking"
          component={LiveTrackingScreen}
          options={{
            headerStyle: {
              backgroundColor: TailwindColors.gray[900],
              shadowColor: TailwindColors.transparent
            },
            tabBarIcon: ({ focused }) => (
              <NtIcon
                size={20}
                icon={focused ? faMapPin : faMapPin}
                color={
                  focused ? TailwindColors.blue[500] : TailwindColors.white
                }
              />
            ),
            title: "Live Tracking",
            headerTitle: () => (
              <Suspense fallback={<></>}>
                <AssetHeaderTitle />
              </Suspense>
            )
          }}
        />
        <BottomTabNavigator.Screen
          name="Trips"
          component={TripsScreen}
          options={{
            headerStyle: {
              backgroundColor: TailwindColors.gray[900],
              shadowColor: "transparent"
            },
            tabBarIcon: ({ focused }) => (
              <NtIcon
                size={20}
                icon={focused ? faRoute : faRoute}
                color={
                  focused ? TailwindColors.blue[500] : TailwindColors.white
                }
              />
            ),
            title: "Trips",
            headerTitle: () => <AssetHeaderTitle />
          }}
        />
        <BottomTabNavigator.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerStyle: {
              backgroundColor: TailwindColors.gray[900],
              shadowColor: "transparent"
            },
            tabBarIcon: ({ focused }) => (
              <NtIcon
                size={20}
                icon={focused ? faCog : faCog}
                color={
                  focused ? TailwindColors.blue[500] : TailwindColors.white
                }
              />
            ),
            headerTitleStyle: {
              color: TailwindColors.white
            },
            headerTitle: "Settings"
          }}
        />
      </BottomTabNavigator.Navigator>
      <AssetScrollListModal />
    </>
  );
};
