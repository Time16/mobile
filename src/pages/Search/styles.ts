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
    height: 144,
    backgroundColor: "#431E93",
    paddingLeft: 12,
    paddingRight: 12,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerText: {
    marginTop: -4,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 30,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  // --------------------------------------Deliveries--------------------------------------

  deliveries: {
    marginTop: -45,
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
    fontSize: 24,
    lineHeight: 24,
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
    fontSize: 30,
    lineHeight: 30,
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
