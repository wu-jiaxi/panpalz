import React, { useState, setState } from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  TextInput,
  Image,
} from "react-native";

import styles from "../perferredName/PerferredName";

const OneTimeCodePage = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{ margin: 15 }}>
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Image
              source={require("../../../assets/images/perferredBird.png")}
            />
          </View>
          <Text style={styles.title}>
            Hi, My name is Jeff and I will be your tour
          </Text>
          <Text style={styles.title}>
            guide. I'm here to get you from A - Z
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OneTimeCodePage;
