import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ----------------- modal --------------------
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

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalView: {
    width: 330,
    height: 319,
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

  modalTitle: {
    marginTop: 16,
    marginLeft: 16,
    alignSelf: 'flex-start',
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
    alignSelf: 'flex-start',
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
  },

  // -----------------------footer---------------------------
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24
  },
});
