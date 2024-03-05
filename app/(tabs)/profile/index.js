// import React, { useContext } from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { UserContext } from "../../../context/UserContext";
// import { globalStyles } from "../../../sytles/global";
// import { books } from "../../../data/bookList";

// export default function Profile() {
//   const { user } = useContext(UserContext);

//   return (
//     <View style={globalStyles.container}>
//       <Text style={globalStyles.h1}>Profile</Text>
//       {user ? (
//         <View>
//           <Text>Name: {user?.name}</Text>
//           <Text>Borrowed Books:</Text>
//           <View>
//             {user.books.map((book) => (
//               <Text key={book.id}>{book.title}</Text>
//             ))}
//           </View>
//         </View>
//       ) : (
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// }
