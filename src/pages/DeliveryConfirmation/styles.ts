import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  button: {
    borderRadius: 50,
    backgroundColor: '#431E93',
    width: 300,
    height: 50,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'flex-end',
  },

  buttonText: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 18,
    textAlign: 'center',
    letterSpacing: -0.165,
    color: '#FFFFFF',
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },

  buttonContainer: {
    margin: '10%',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  openMapButton: {
    alignItems: 'center'
  },

  callClientButton: {
    alignItems: 'center',
    marginRight: 20
  },

  helpButton: {
    alignItems: 'center'
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
    position: 'absolute',
    marginTop: 53,
    alignSelf: 'center',
    width: 350,
    height: '90%',
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

  detailsLabel: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    marginBottom: 4,
    fontWeight: "normal",
    lineHeight: 18,
    letterSpacing: -0.165,
    color: "#828282",
    fontSize: 12,
    alignSelf: "flex-start",
  },

  detailsText: {
    // fontFamily: "Source Sans Pro",
    // fontStyle: "normal",
    fontWeight: "normal",
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#4F4F4F",
    fontSize: 24,
    alignSelf: "flex-start",
  },

  map: {
    width: '100%',
    height: '100%',
  },

  mapContainer: {
    width: '90%',
    height: '30%',
    alignSelf: 'center',
    borderRadius: 2,
    overflow: 'hidden',
    marginTop: 16,
  },

  // -----------------------footer---------------------------
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24 
  },

  // ----------------- modal --------------------
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22,
    // width: 330,
    // height: 319,
  },
  modalView: {
    width: 330,
    height: 380,
    backgroundColor: "#fff",
    borderRadius: 9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },

  image: {
    marginTop: 24,
  },

  stars: {
    marginTop: 8,
  },

  modalTitle: {
    marginTop: 16,
    marginLeft: 16,
    alignSelf: 'center',
    fontStyle: "normal",
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.165,
    color: '#333333',
  },

  modalLabel : {
    marginTop: 16,
    marginLeft: 16,
    alignSelf: 'center',
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#828282",
  },

  modalCode : {
    color: '#431E93',
    marginLeft: 16,
    alignSelf: 'flex-start',
    fontWeight: "600",
    fontSize: 30,
    lineHeight: 30,
    letterSpacing: -0.165,
  },

  modalBoxes : {
    marginLeft: 16,
    alignSelf: 'flex-start',
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 24,
    letterSpacing: -0.165,
    color: "#4F4F4F",
  },

  modalInfo : {
    marginTop: 16,
    marginLeft: 16,
    alignSelf: 'flex-start',
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: -0.165,
    color: "#828282",
  }
});
