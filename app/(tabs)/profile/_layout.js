// import { Stack } from "expo-router";
// import { View, Button } from "react-native";
// import { router } from "expo-router";
// import { COLORS } from "../../../sytles/constants";

// export default function BooksStack() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShadowVisible: false,
//         headerStyle: {
//           backgroundColor: COLORS.dark,
//         },
//         headerTitleStyle: {
//           color: COLORS.grey,
//         },
//         headerBackTitleVisible: false,
//         headerTintColor: COLORS.grey,
//         headerRight: () => {
//           return (
//             <View style={{ paddingRight: 12 }}>
//               <Button
//                 onPress={() => {
//                   router.push("login");
//                 }}
//                 color={COLORS.accent}
//                 title="Login"
//               />
//             </View>
//           );
//         },
//       }}
//     >
//       <Stack.Screen name="index" options={{ title: "Books" }} />
//     </Stack>
//   );
// }
