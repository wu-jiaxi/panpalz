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
import RadioList from "./RadioList";

import styles from "../preferredGender/PreferredGender";

const OneTimeCodePage = ({ navigation, item }) => {
  const listData = [
    "Male",
    "Female",
    "Trans male",
    "Trans female",
    "Non-binary",
    "Other",
  ];
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ margin: 15 }}>
            <View style={styles.picture}>
              <Image
                source={require("../../../assets/images/fistBumpBirds.png")}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.drawer}>
        <View style={styles.nameTextGroup}>
          <Text style={styles.font}>
            What gender would you prefer to go by?
          </Text>
          <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
          >
            <View style={{ flex: 1 }}>
              <RadioList data={listData} />
              <View style={styles.button}>
                <Button
                  title="Continue"
                  color="#fff"
                  accessibilityLabel="Primary Email Here"
                  onPress={() => navigation.navigate("PrimaryEmail")}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OneTimeCodePage;
