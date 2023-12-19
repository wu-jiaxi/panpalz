import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../components/home/homescreen/Homescreen.jsx";
import Login from "../components/login/Login.jsx";
import Register from "../components/register/Register.jsx";
import OneTimeCodePage from "../components/login/oneTimeCodePage/OneTimeCodePage.jsx";
import PreferredName from "../components/register/preferredName/PreferredName.jsx";
import PreferredGender from "../components/register/preferredGender/PreferredGender.jsx";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      independent={true}
      style={{ margin: 0, padding: 0, flex: 0 }}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
        style={{ margin: 0, padding: 0, flex: 0 }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Overview" }}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="OneTimeCode"
          component={OneTimeCodePage}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreferredName"
          component={PreferredName}
          screenOptions={{ headerShown: false }}
        />
        <Stack.Screen
          name="PreferredGender"
          component={PreferredGender}
          screenOptions={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
