import React, { useState, setState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  TextInput,
} from "react-native";
import { Stack, useRouter } from "expo-router";

import styles from "../home/homescreen/homescreen";

const Login = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ margin: 15 }}>
          <Text style={styles.bold}>Enter your phone number </Text>
        </View>
        <TextInput
          style={{ height: 40, backgroundColor: "#eceff1", width: 300 }}
          placeholder="Enter Phone Number"
          placeholderTextColor="#000"
          onChangeText={(newText) => setText(newText)}
          defaultValue={text}
          keyboardType={"number-pad"}
        />
        <View
          style={{
            backgroundColor: "#659e71",
            margin: 15,
            padding: 5,
            borderRadius: "50",
          }}
        >
          <Button
            title="Continue"
            color="#fff"
            accessibilityLabel="Login Here"
            onPress={() => navigation.navigate("OneTimeCode")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
