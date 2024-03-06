import React, { useContext, useEffect, useRef } from "react";
import {
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import { globalStyles } from "../../styles/global";
import { UserContext } from "../../context/UserContext";
import { Link } from "expo-router";

export default function HomePage() {
  const { user } = useContext(UserContext);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <ImageBackground
        source={require("../../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.overlay}>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.userName}>{user?.name}</Text>
            <Text style={styles.heading}>Discover the Magic of Books</Text>
            <Text style={styles.description}>Welcome to our Book store!</Text>
            <Link asChild style={styles.link} href="bookList">
              Explore our collection
            </Link>
          </ScrollView>
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "flex-end",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  userName: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  description: {
    marginBottom: 20,
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
  link: {
    color: "#007bff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
