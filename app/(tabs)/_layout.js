import { Tabs, router } from "expo-router";
import { COLORS } from "../../styles/constants";
import { Ionicons } from "@expo/vector-icons";
import { Button, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MainTabs() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.dark,
        },
        headerTitleStyle: {
          color: COLORS.grey,
        },
        tabBarStyle: {
          backgroundColor: COLORS.dark,
        },
        tabBarActiveTintColor: COLORS.accent,
        headerRight: () => {
          return (
            <View style={{ paddingRight: 12 }}>
              <Button
                onPress={() => {
                  router.push("login");
                }}
                color={COLORS.accent}
                title="Login"
              />
            </View>
          );
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="home-outline" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="bookList"
        options={{
          headerShown: false,
          title: "Books",
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="book" size={24} color={color} />;
          },
        }}
      />
      {/* //   <Tabs.Screen
    //     name="profile"
    //     options={{
    //       title: "Profile",
    //       tabBarIcon: ({ color }) => {
    //         return (
    //           <MaterialCommunityIcons
    //             name="face-man-profile"
    //             size={24}
    //             color="white"
    //           />
    //         );
    //       },
    //     }}
    //   />
   */}
    </Tabs>
  );
}
