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
    <SafeAreaView style={styles.container}>
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

        <Button
          title="Login"
          color="#841584"
          accessibilityLabel="Login Here"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Register"
          color="#841584"
          accessibilityLabel="Register Here"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
