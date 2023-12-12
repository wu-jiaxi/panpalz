import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      style={{ margin: 0, padding: 0 }}
    />
  );
};

export default Layout;
