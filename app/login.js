import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";
import { UserContext } from "../context/UserContext";
import { COLORS } from "../styles/constants";

export default function Login() {
  const [userName, setUserName] = useState("");
  const { login, logout, user } = useContext(UserContext);

  const handleLogin = () => {
    login(userName);
  };

  const handleLogout = () => {
    logout();
    setUserName("");
  };

  return (
    <ImageBackground
      source={{ uri: "https://source.unsplash.com/random" }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <View style={styles.form}>
          {!user ? (
            <>
              <Text style={styles.label}>Please enter your name:</Text>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                onChangeText={(text) => setUserName(text)}
                value={userName}
              />
              <Button
                onPress={handleLogin}
                color={COLORS.primary}
                title="Login"
              />
            </>
          ) : (
            <>
              <Text style={styles.greeting}>Hello, {user.name}!</Text>
              <Button
                onPress={handleLogout}
                color={COLORS.secondary}
                title="Logout"
              />
            </>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.light,
    marginBottom: 20,
  },
  form: {
    width: "100%",
    maxWidth: 300,
  },
  label: {
    fontSize: 16,
    color: COLORS.light,
    marginBottom: 10,
  },
  input: {
    backgroundColor: COLORS.light,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.light,
    marginBottom: 20,
  },
});
