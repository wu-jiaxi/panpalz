import * as React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Card,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import Constants from "expo-constants";

import styles from "../home/homescreen/homescreen";

const months = [
  "Januarary",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
];

const Register = ({ navigation }) => {
  const ITEM_HEIGHT = 60;
  const SEPERATOR_HEIGHT = 1;
  return (
    <SafeAreaView style={{ height: "100%", backgroundColor: "#f3f7ee" }}>
      <View
        style={{
          flexDirection: "column",
          alignConte65: "center",
          marginTop: 50,
        }}
      >
        <View style={{ height: "40%", alignItems: "center" }}>
          <Text style={styles.title}>What is your date of birth?</Text>
          <View style={{ marginTop: "0" }}>
            <Text style={styles.title}>(18+ Only!)</Text>
          </View>
          <FlatList
            data={months.map((month) => month.toString())}
            renderItem={({ item }) => (
              <View
                style={{
                  height: ITEM_HEIGHT,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{item}</Text>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View
                style={{
                  height: SEPERATOR_HEIGHT,
                  width: "100%",
                  backgroundColor: "#659e71",
                }}
              />
            )}
            keyExtractor={(_, index) => index.toString()}
            getItemLayout={(_, index) => ({
              length: ITEM_HEIGHT,
              offset: ITEM_HEIGHT * index + SEPERATOR_HEIGHT * index,
              index,
            })}
            showsVerticalScrollIndicator={false}
            snapToInterval={ITEM_HEIGHT + SEPERATOR_HEIGHT}
            snapToAlignment={"center"}
          />
        </View>
        <View
          style={{
            height: ITEM_HEIGHT,
            alignItems: "center",
            justifyContent: "space-evenly",
            flexDirection: "row",
            margin: 50,
            height: "30%",
            backgroundColor: "#f3f7ee",
          }}
        >
          <View>
            <FlatList
              data={days.map((_, index) => (index + 1).toString())}
              renderItem={({ item }) => (
                <View
                  style={{
                    height: ITEM_HEIGHT,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{item}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: SEPERATOR_HEIGHT,
                    width: "100%",
                    backgroundColor: "#659e71",
                  }}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
              getItemLayout={(_, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index + SEPERATOR_HEIGHT * index,
                index,
              })}
              showsVerticalScrollIndicator={false}
              snapToInterval={ITEM_HEIGHT + SEPERATOR_HEIGHT}
              snapToAlignment={"center"}
            />
          </View>
          <View>
            <FlatList
              data={Array(9999)
                .fill("")
                .map((_, index) => (index + 1).toString())}
              renderItem={({ item }) => (
                <View
                  style={{
                    height: ITEM_HEIGHT,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontWeight: "bold" }}>{item}</Text>
                </View>
              )}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    height: SEPERATOR_HEIGHT,
                    width: "100%",
                    backgroundColor: "#659e71",
                  }}
                />
              )}
              keyExtractor={(_, index) => index.toString()}
              getItemLayout={(_, index) => ({
                length: ITEM_HEIGHT,
                offset: ITEM_HEIGHT * index + SEPERATOR_HEIGHT * index,
                index,
              })}
              initialScrollIndex={2019}
              initialNumToRender={10}
              windowSize={9}
              showsVerticalScrollIndicator={false}
              snapToInterval={ITEM_HEIGHT + SEPERATOR_HEIGHT}
              snapToAlignment={"center"}
            />
          </View>
        </View>
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
            accessibilityLabel="PerferredName Here"
            onPress={() => navigation.navigate("PreferredName")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
