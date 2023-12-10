import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import styles from "./homescreen";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Escape social feeds, find human connection.
        </Text>

        <Text style={styles.title}>
          A 24/7 global community for forming lifelong connections
        </Text>

        <Text style={styles.title}>SHARE - INSPIRE - CONNECT</Text>

        <Button
          title="Login"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Register"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
