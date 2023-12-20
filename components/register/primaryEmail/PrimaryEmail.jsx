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

import styles from "./PrimaryEmail";

const OneTimeCodePage = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 115,
            paddingTop: 125,
          }}
        >
          <View style={{ margin: 15 }}>
            <View style={styles.picture}>
              <Text style={styles.title}>
                Our listeners are not a replacement for
              </Text>
              <Text style={styles.title}>
                therapy or medical advice; they are here
              </Text>
              <Text style={styles.title}>
                for expressive support, each with their
              </Text>
              <Text style={styles.title}>
                own opinions and thoughts, just like you
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.drawer}>
        <View style={styles.nameTextGroup}>
          <Text style={styles.font}>What is your primary email address?</Text>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 1 }}>
              <TextInput
                style={styles.textInput}
                placeholder="Email address"
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
