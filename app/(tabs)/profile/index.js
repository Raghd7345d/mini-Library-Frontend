import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserContext } from "../../../context/UserContext";
import { globalStyles } from "../../../styles/global";
import { books } from "../../../data/bookList";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const { user } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `https://mini-lib-server.onrender.com/${user?.name}`
        );

        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchUser();
  }, [user]);

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.h1}>Profile</Text>
      {userInfo.length ? (
        <View>
          <Text>Name: {user?.name}</Text>
          <Text>Borrowed Books: </Text>
          <View>
            {userInfo[0].books.length ? (
              userInfo[0].books.map((book) => (
                <Text key={book._id}>{book.title}</Text>
              ))
            ) : (
              <></>
            )}
          </View>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
