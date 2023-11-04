import { StyleSheet } from "react-native";


export const stylesIni = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    alignContent: "center",
    justifyContent: "center"
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
    bottom: 80,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 4, height: 2 },
    textShadowRadius: 4,
  },
  textToThe: {
    color: "#ffffff",
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "normal",
    bottom: 75,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  input: {
    backgroundColor: "#FFFFFF",
    fontSize: 16,
    width: 250,
    height: 45,
    marginBottom: 20,
    borderRadius: 2,
    paddingLeft: 5,
    bottom: 40,
    color: "#000",
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
    bottom: 50,
  },
  rightSection: {
    alignItems: "flex-end",
  },
  linkText: {
    color: "#FFFFFF",
    marginVertical: 5,
    fontSize: 17,
  },
  linkTextESenha: {
    color: "#FFFFFF",
    fontWeight:"bold",
    marginVertical: 5,
    fontSize: 17,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#39D2C0",
    width: 130,
    height: 50,
    borderRadius: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    bottom: 40,
  },
  buttonText: {
    color: "#FFFFFF",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  socialText: {
    color: "#D3D3D3",
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  icons: {
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    paddingTop: 20,
  },
});
