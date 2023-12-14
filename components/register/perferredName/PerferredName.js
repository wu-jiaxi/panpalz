import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f3f7ee",
    border: 0,
  },
  title: {
    textAlign: "center",
  },
  bold: {
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    fontSize: 18,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
export default styles;
