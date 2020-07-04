import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  // --------------------------------------header--------------------------------------

  header: {
    width: 360,
    height: 144,
    backgroundColor: "#FFF159",
    paddingBottom: 15,

    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },

  // --------------------------------------body--------------------------------------
  body: {
    paddingLeft: 45,
    paddingRight: 45,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },

  title: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    marginTop: 30,
    marginBottom: 17,
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  emailLabel: {
    marginTop: 20,
    marginBottom: 5,
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.165,
    color: "#828282",
    alignSelf: "flex-start",
  },

  email: {
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    width: 270,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },

  passwordLabel: {
    marginBottom: 5,
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.165,
    color: "#828282",
    alignSelf: "flex-start",
  },

  passwordBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },

  password: {
    backgroundColor: "#FFFFFF",
    borderColor: "#BDBDBD",
    width: 230,
    height: 40,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },

  hide: {
    width: 40,
    height: 40,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },

  button: {
    width: 230,
    height: 40,
    backgroundColor: "#431E93",
    flexDirection: "row",
    borderRadius: 50,
    overflow: "hidden",
    alignItems: "center",
    marginBottom: 20,
  },

  buttonText: {
    flex: 1,
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    justifyContent: "center",
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#FFFFFF",
    // fontFamily: "Roboto_500Medium",
  },

  signUp: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#431E93",
  },
});
