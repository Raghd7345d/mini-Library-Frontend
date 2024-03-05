import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Animated,
  ActivityIndicator,
} from "react-native";
import { globalStyles } from "../../../styles/global";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";

export default function BookList() {
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  function handleBookPress(id) {
    setBookList((prevBookList) =>
      prevBookList.map((book) =>
        book._id === id && book.available > 0
          ? { ...book, available: book.available - 1 }
          : book
      )
    );
  }

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          "https://mini-lib-server.onrender.com/Peter/books"
        );

        setBookList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <Text style={styles.loadingText}>Loading...</Text>
        <ActivityIndicator size="large" color="#333" />
      </View>
    );
  }

  return (
    <ImageBackground
      source={{
        uri: "https://unsplash.com/de/fotos/schreibtisch-mit-schreibwaren-studioaufnahme-auf-holzernem-hintergrund-ieIWTOQIc0whttps://unsplash.com/de/fotos/braunes-und-weisses-holzhaus-in-der-nahe-von-baumen-unter-blauem-himmel-wahrend-der-nacht-AKLmn_MSAbAhttps://unsplash.com/de/fotos/braunes-und-weisses-holzhaus-in-der-nahe-von-baumen-unter-blauem-himmel-wahrend-der-nacht-AKLmn_MSAbA",
      }}
      style={styles.container}
    >
      <ScrollView style={styles.container}>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.heading}>{user?.name}</Text>
        </Animated.View>

        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.description}>
            Welcome to our book collection. Explore and discover your next
            adventure!
          </Text>
        </Animated.View>

        {bookList.map((book) => (
          <Pressable key={book._id} onPress={() => handleBookPress(book._id)}>
            <Animated.View
              style={[
                styles.card,
                {
                  opacity: fadeAnim,
                  transform: [
                    {
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [50, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.available}>
                Available Copies: {book.available}
              </Text>
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
            </Animated.View>
          </Pressable>
        ))}
      </ScrollView>
    </ImageBackground>
  );
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
    color: "#333333",
  },
  description: {
    marginBottom: 20,
    color: "#666666",
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
  available: {
    marginBottom: 5,
    color: "#666666",
  },
  borrowButton: {
    color: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    textAlign: "center",
    marginTop: 10,
  },
});
