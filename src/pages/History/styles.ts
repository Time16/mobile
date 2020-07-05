import { StyleSheet } from "react-native";
import Constants from "expo-constants";

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
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  // --------------------------------------header--------------------------------------

  header: {
    width: 360,
    height: 235,
    backgroundColor: "#431E93",
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10 + Constants.statusBarHeight,

    alignItems: "center",
    justifyContent: "flex-start",
  },

  profile: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 22,
  },

  profilePicture: {
    borderColor: "#FFFFFF",
    borderWidth: 1,
    borderRadius: 100,
  },

  profileDetails: {
    marginLeft: -60,
    height: 60,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  headerName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  headerEmail: {
    marginTop: 6,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 13,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  headerText: {
    marginTop: 9,
    marginLeft: 18,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
    alignSelf: "flex-start",
  },

  //   -----------------------beneficts-----------------------
  beneficts: {
    width: 330,
    height: 89,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },

  benefictsBar: {
    marginTop: 3,
    marginBottom: 9,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  benefictsBarItem: {
    width: 62,
    height: 9,
  },

  benefictsDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  diamond: {
    marginLeft: 5,
  },

  detailsData: {
    alignItems: "center",
    justifyContent: "space-between",
  },

  detailsTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#E9D430",
    marginBottom: 8,
  },

  detailsHistory: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  detailsDeliveries: {
    paddingRight: 9,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "#BDBDBD",
  },

  deliveriesNumber: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#333333",
    marginBottom: 4,
  },

  deliveriesTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 13,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#828282",
  },

  detailsLevel: {
    paddingLeft: 9,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  levelScore: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },

  levelNumber: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#333333",
    marginLeft: 5,
    marginBottom: -4,
  },

  levelTitle: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 13,
    lineHeight: 13,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#828282",
    marginTop: 4,
  },

  benefictsButton: {
    alignSelf: "flex-end",
    marginRight: 3,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  // --------------------------------------Deliveries--------------------------------------

  deliveries: {
    marginTop: 11,
    marginBottom: 0,
  },

  delivery: {
    backgroundColor: "#fff",
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 9,
    paddingRight: 9,
    width: 350,
    height: 213,

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

  itemTimeStart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  statusLabel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#333333",
  },

  timeWindow: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    marginLeft: 6,
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    textAlign: "right",
    letterSpacing: -0.165,
    color: "#4F4F4F",
  },

  // -----------------------body---------------------------

  timeRemaining: {
    marginTop: 3,
    alignSelf: "flex-end",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  price: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "normal",
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  size: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    alignSelf: "flex-start",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
    marginBottom: -5,
  },

  addressLabel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignSelf: "flex-start",
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
  },

  pickupName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    alignSelf: "flex-start",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 1,
  },

  pickupAdress: {
    fontFamily: "Roboto",
    fontStyle: "normal",
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    marginBottom: 4,
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
  },

  detailsText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 13,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    fontSize: 13,
  },

  // --------------------------------------emptyDeliveries--------------------------------------

  emptyDeliveries: {
    alignItems: "center",
    justifyContent: "center",
  },

  emptyDeliveriesText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    width: 183,
    marginTop: 27,
    marginBottom: 37,
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    textAlign: "center",
  },

  // --------------------------------------menu--------------------------------------

  menu: {
    width: 360,
    height: 74,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },

  menuItemBox: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  menuItem: {
    width: 120,
    height: 74,
    alignItems: "center",
    justifyContent: "center",
  },

  menuText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#4F4F4F",
  },

  menuTextSelected: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: -0.165,
    color: "#431E93",
  },
});
