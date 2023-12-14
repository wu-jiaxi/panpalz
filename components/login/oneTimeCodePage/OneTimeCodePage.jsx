import React, { useState, setState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import styles from "../oneTimeCodePage/OneTimeCodePage";

const OneTimeCodePage = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ margin: 15 }}>
            <Text style={styles.bold}>Enter your one-time code</Text>

            <Text style={styles.title}>
              Please check your text messages if the one-
            </Text>
            <Text style={styles.title}>
              time code is not automatically entered.
            </Text>
          </View>
          <TextInput
            style={{
              height: 40,
              backgroundColor: "#eceff1",
              width: 300,
              borderRadius: 25,
              paddingLeft: 10,
            }}
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
    </TouchableWithoutFeedback>
  );
};

export default OneTimeCodePage;
