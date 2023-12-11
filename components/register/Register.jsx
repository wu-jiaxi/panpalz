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

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Register</Text>
      </View>
    </SafeAreaView>
  );
};

export default Register;
