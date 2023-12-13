import React, { useState, setState } from "react";
import { View, Text, Button, SafeAreaView, TextInput } from "react-native";

import styles from "../home/homescreen/homescreen";

const OneTimeCodePage = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ margin: 15 }}>
          <Text style={styles.title}>Enter your one-time code</Text>

          <Text style={styles.title}>
            Please check your text messages if the one-
          </Text>
          <Text style={styles.title}>
            time code is not automatically entered.
          </Text>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../../../assets/images/loginBird.png")} />
          </View>
          <Text style={styles.title}>SHARE - INSPIRE - CONNECT</Text>
          <Text style={styles.title}>Enter your phone number </Text>
        </View>
        <TextInput
          style={{ height: 40, backgroundColor: "#eceff1", width: 300 }}
          placeholder="enter"
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
            accessibilityLabel="OneTimeCodePage Here"
            onPress={() => navigation.navigate("OneTimeCodePage")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OneTimeCodePage;
