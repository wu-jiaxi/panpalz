import React, { useState, setState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import styles from "./PreferredName";

const OneTimeCodePage = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ margin: 15 }}>
            <View style={styles.picture}>
              <Image
                source={require("../../../assets/images/perferredBird.png")}
              />
              <Text style={styles.title}>
                Hi, My name is Jeff and I will be your tour
              </Text>
              <Text style={styles.title}>
                guide. I'm here to get you from A - Z
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.drawer}>
        <View style={styles.nameTextGroup}>
          <Text style={styles.font}>What name would you prefer to go by?</Text>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Perferred Name"
                placeholderTextColor="#000"
                onChangeText={(newText) => setText(newText)}
                defaultValue={text}
              />
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.button}>
          <Button
            title="Continue"
            color="#fff"
            accessibilityLabel="PerferredGender Here"
            onPress={() => navigation.navigate("PreferredGender")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OneTimeCodePage;
