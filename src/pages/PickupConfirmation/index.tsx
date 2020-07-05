import React from "react";
import { Modal, View, TouchableHighlight, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import styles from './styles';

interface Location {
  latitude: number;
  longitude: number;
}

interface Delivery {
  id: number;
  status: number;
  price: number;
  size: String;
  pickupName: String;
  pickUpAdress: String;
  pickUpLocation: Location;
  duration: number;
  distance: number;
  timeStart: number;
}

interface Params {
  delivery: Delivery;
}

export default function PickupConfirmation() {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  return(
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onShow={() => {}}
      onRequestClose={() => {}}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Confirme o pedido</Text>
          <Text style={styles.modalLabel}>Código do pedido</Text>
          <Text style={styles.modalCode}>1589</Text>
          <Text style={styles.modalLabel}>Confirme a quantidade de embalagens:</Text>
          <Text style={styles.modalBoxes}>2 caixas</Text>
          <Text style={styles.modalInfo}>
            Leia os comentarios do cliente antes de sair{"\n"}por favor me avise quando estiver vindo
          </Text>
          <Text style={styles.modalInfo}></Text>

          <View style={styles.footer}>
            <TouchableHighlight
              style={{ ...styles.button }}
              onPress={() => {
                delivery.status = 2;
                navigation.navigate('DeliveryFlow', {delivey: delivery});
              }}
            >
              <Text style={styles.buttonText}>Confirmar o pedido</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}
