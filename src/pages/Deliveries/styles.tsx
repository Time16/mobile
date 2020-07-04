import Constants from "expo-constants";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  button: {
    width: 100,
    height: 40,
    backgroundColor: "#431E93",
    // boxShadow: 0 1 1 rgba(136, 104, 11, 0.27),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  // --------------------------------------header--------------------------------------

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

  // --------------------------------------Deliveries--------------------------------------

  deliveries: {
    marginTop: -45,
    marginBottom: 0,

    justifyContent: "flex-start",
    alignItems: "center",
  },

  delivery: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 9,
    paddingRight: 9,
    width: 350,
    height: 255,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  // -----------------------statusBar---------------------------

  statusBar: {
    width: "100%",
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  statusItem: {
    width: 106.67,
    height: 10,
  },

  itemHeader: {
    width: "100%",
    marginTop: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // -----------------------header---------------------------

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

  // -----------------------body---------------------------

  timeRemaining: {
    marginTop: 3,
    alignSelf: "flex-end",
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  price: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  size: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    alignSelf: "flex-start",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
    marginBottom: 12,
  },

  addressLabel: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
  },

  pickupName: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    alignSelf: "flex-start",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 1,
  },

  pickupAdress: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
    fontSize: 13,
    marginBottom: 12,
  },

  // -----------------------footer---------------------------

  itemFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  detailsBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  details: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginLeft: 8,
  },

  detailsLabel: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    marginBottom: 4,
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
  },

  detailsText: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    fontSize: 24,
  },

  // --------------------------------------emptyDeliveries--------------------------------------

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

  menu: {},
  menuItem: {},
});
