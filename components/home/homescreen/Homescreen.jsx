import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "./homescreen";

const HomeScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView
      style={styles.container}
      screenOptions={{ headerShown: false }}
    >
      <View>
        <Text style={styles.title}>
          Escape social feeds, find human connection.
        </Text>

        <Text style={styles.title}>
          A 24/7 global community for forming lifelong connections
        </Text>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Image source={require("../../../assets/images/loginBird.png")} />
        </View>
        <Text style={styles.title}>SHARE - INSPIRE - CONNECT</Text>
        <View
          style={{
            backgroundColor: "#659e71",
            margin: 15,
            padding: 5,
            borderRadius: "50",
          }}
        >
          <Button
            title="Login"
            color="#fff"
            accessibilityLabel="Login Here"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
        <View
          style={{
            borderColor: "#659e71",
            borderStyle: "solid",
            backgroundColor: "transparent",

            margin: 15,
            padding: 5,
            borderWidth: 2,
            borderRadius: 55,
          }}
        >
          <Button
            title="Register"
            color="#000"
            accessibilityLabel="Register Here"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
