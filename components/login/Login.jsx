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

import styles from "../home/homescreen/homescreen";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>SHARE - INSPIRE - CONNECT</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
