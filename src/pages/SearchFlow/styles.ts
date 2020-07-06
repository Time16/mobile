import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 450,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  cancelButton: {
    width: 100,
    height: 40,
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  confirmButton: {
    width: 100,
    height: 40,
    backgroundColor: "#431E93",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  confirmButtonText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#FFFFFF",
  },

  buttonContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
    marginTop: 53,
    alignSelf: "center",
    width: 350,
    height: "90%",
  },

  // -----------------------statusBar---------------------------

  close: {
    width: "100%",
    marginTop: 15,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
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

  priceLabel: {
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.165,
    color: "#828282",
    fontFamily: "Roboto",
    fontStyle: "normal",
  },

  statusLabel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.165,
    color: "#828282",
    marginLeft: 9,
  },

  timeStart: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    marginLeft: 9,
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
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#431E93",
  },

  secondHeader: {
    width: "100%",
    marginTop: 7,
    marginBottom: 29,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    marginLeft: 9,
    marginRight: 3,
  },

  sizeDetail: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: -0.165,
    color: "#4F4F4F",
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

  detailsLabel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    marginBottom: 4,
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
    alignSelf: "flex-start",
  },

  detailsText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    fontSize: 24,
    alignSelf: "flex-start",
  },

  pickupSizeLabel: {
    alignSelf: "flex-start",
  },

  pickupSize: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 28,
  },

  // -----------------------footer---------------------------
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 24,
  },

  pickupDetails: {
    marginBottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
