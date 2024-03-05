import { books } from "../../../data/bookList";
import { globalStyles } from "../../../styles/global";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function BooksDetalPage() {
  const { _id } = useLocalSearchParams();
  const { user } = useContext(UserContext);
  const book = books.find((book) => book._id === Number(_id));
  if (book) {
    return (
      <ScrollView>
        <View style={globalStyles.container}>
          <Text style={globalStyles.h2}>{user?.name}</Text>
          <Text style={globalStyles.p}> Book Information</Text>
          <Text style={globalStyles.p}>Name: {book.title}</Text>
          <Text style={globalStyles.p}>Author: {book.author}</Text>
          <Text style={globalStyles.p}>Released: {book.released}</Text>
        </View>
      </ScrollView>
    );
  }
  return (
    <View>
      <Text>loading...</Text>
    </View>
  );
}
