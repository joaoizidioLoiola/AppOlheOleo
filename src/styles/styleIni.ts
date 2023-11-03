import { StyleSheet } from "react-native";

export const stylesIni = StyleSheet.create({
  
    imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000000",
    fontSize: 45,
    textAlign: "justify",
  },
  textBemVindo: {
    color: "#ffffff",
    fontSize: 36,
    textAlign: "justify",
    fontWeight: "bold",
    bottom: 75,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 4,
  },
  textToThe: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "normal",
    bottom: 70,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  container: {
    width: "80%",
  },
  input: {
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    width: 250,
    height: 45,
    marginBottom: 20,
    borderRadius: 2,
    paddingLeft: 5,
    bottom: 25,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 0,
  },
  leftSection: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "#000",
  },
  rightSection: {
    alignItems: "flex-end",
  },
  linkText: {
    color: "#FFFFFF",
    marginVertical: 5,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#39D2C0',
    width:130,
    height: 50,
    borderRadius: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    justifyContent:"center",
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18
  },
});
