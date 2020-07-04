import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  header: {
    width: 360,
    height: 140,
    backgroundColor: "#431E93",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerText: {
    marginTop: -4,
    marginLeft: 12,
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  headerImage: {
    marginRight: 12,
  },

  deliveries: {
    marginTop: -45,
    justifyContent: "flex-start",
    alignItems: "center",

    marginBottom: 0,
  },

  delivery: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    width: 350,
    height: 255,

    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },

  statusBar: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  statusItem: {
    width: 106.67,
    height: 10,
  },

  itemRow1: {
    marginTop: 11,
    marginLeft: 9,
    marginRight: 9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusLabel: {
    // marginleft: 14,
    // marginTop: 122,
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#333333",
  },

  itemTimeStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  timeRemaining: {
    marginLeft: 242,
  },

  emptyDeliveries: {
    alignItems: "center",
    justifyContent: "center",
  },

  emptyDeliveriesText: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    width: 183,
    marginTop: 27,
    marginBottom: 37,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    textAlign: "center",
  },

  emptyDeliveriesButton: {
    width: 100,
    height: 40,
    backgroundColor: "#431E93",
    // boxShadow: 0 1 1 rgba(136, 104, 11, 0.27),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyDeliveriesButtonText: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  menu: {},
  menuItem: {},
});
