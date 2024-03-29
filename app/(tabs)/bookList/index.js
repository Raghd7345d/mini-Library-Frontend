import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  ActivityIndicator,
} from "react-native";
import { globalStyles } from "../../../styles/global";
import { UserContext } from "../../../context/UserContext";
import { useContext } from "react";
import axios from "axios";
import { ImageBackground } from "react-native";
import { Link } from "expo-router";

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
        uri: "https://fastly.picsum.photos/id/56/2880/1920.jpg?hmac=BIplhYgNZ9bsjPXYhD0xx6M1yPgmg4HtthKkCeJp6Fk",
      }}
      style={styles.container}
    >
      <ScrollView>
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.heading}>{user?.name}</Text>
        </Animated.View>

        <Animated.View style={{ opacity: fadeAnim }}>
          <Text style={styles.description}>
            Welcome to our book collection. Explore and discover your next
            adventure!
          </Text>
        </Animated.View>

        {bookList.map((book, index) => (
          <Animated.View
            key={index}
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
            <Link key={book._id} href={`/bookList/${book._id}`} asChild>
              <Text style={styles.title}>{book.title}</Text>
            </Link>
          </Animated.View>
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
