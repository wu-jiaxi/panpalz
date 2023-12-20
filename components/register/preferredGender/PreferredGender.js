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
  font: {
    fontSize: 20,
  },
  drawer: {
    height: "75%",
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 25,
    alignContent: "flex-end",
    alignItems: "center",
    justifyContent: "space-between",
  },
  picture: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 150,
  },
  button: {
    backgroundColor: "#659e71",
    margin: 15,
    padding: 5,
    borderRadius: "50",
    marginBottom: 100,
  },
  nameTextGroup: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default styles;
