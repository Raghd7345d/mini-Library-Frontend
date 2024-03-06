import { books } from "../../../data/bookList";
import { globalStyles } from "../../../styles/global";
import { UserContext } from "../../../context/UserContext";
import { useContext, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import axios from "axios";

export default function BooksDetalPage() {
  const { _id } = useLocalSearchParams();
  const { user } = useContext(UserContext);
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [borrowedBook, setBorrowedBook] = useState();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          `https://mini-lib-server.onrender.com/${user}/books/${_id}`
        );

        setBook(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, [_id]);

  // useEffect(() => {
  //   async function rentBook() {
  //     try {
  //       const response = await axios.put(
  //         `https://mini-lib-server.onrender.com/${user}/books/${_id}`
  //       );

  //       console.log(user, _id);
  //     } catch (error) {
  //       console.log(user, _id);
  //       console.error("Error fetching books:", error);
  //     }
  //   }

  //   rentBook();
  // }, [_id]);

  function handleBookPress() {
    if (book.available > 0) {
      setBook((prevBook) => ({
        ...prevBook,
        available: prevBook.available - 1,
      }));
      setBorrowedBook(_id); // Update borrowed book state here
    }
  }

  if (book) {
    return (
      <ScrollView>
        <View style={globalStyles.container}>
          <Text style={globalStyles.h2}>{user?.name}</Text>
          <Text style={globalStyles.p}> Book Information</Text>
          <Text style={globalStyles.p}>Name: {book.title}</Text>
          <Text style={globalStyles.p}>Author: {book.author}</Text>
          <Text style={globalStyles.p}>Released: {book.released}</Text>
          <Text style={styles.available}>
            Available Copies: {book.available}
          </Text>
        </View>

        <Pressable onPress={() => handleBookPress(_id)}>
          <Text
            style={[
              styles.borrowButton,
              {
                backgroundColor: book.available > 0 ? "#FFA500" : "#999999",
              },
            ]}
          >
            {book.available > 0 ? "Borrow" : "OOOpsii!! Unavailable"}
          </Text>
        </Pressable>
      </ScrollView>
    );
  }

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333333",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "white",
  },
  description: {
    marginBottom: 20,
    color: "white",
  },
  card: {
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    elevation: 10,
    backgroundColor: "#E9D8A6",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
});
