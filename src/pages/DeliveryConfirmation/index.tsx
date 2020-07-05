import React from "react";
import { Modal, View, TouchableHighlight, Text, Image } from "react-native";
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

export default function DeliveryConfirmation() {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  return(
    <Modal
      animationType='slide'
      transparent={true}
      visible={true}
      onShow={() => {}}
      onRequestClose={() => {}}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Pedido entregue!</Text>
          <View style={styles.image}>
            <Image source={require('../../assets/agent.png')} />
          </View>
          <Text style={styles.modalLabel}>Avalie a loja</Text>
          <View style={styles.stars}>
            <Image source={require('../../assets/stars.png')} />
          </View>
          <Text style={styles.modalLabel}>Avalie o cliente</Text>
          <View style={styles.stars}>
            <Image source={require('../../assets/stars.png')} />
          </View>

          <View style={styles.footer}>
            <TouchableHighlight
              style={{ ...styles.button }}
              onPress={() => {
                delivery.status = 2;
                navigation.navigate('Deliveries');
              }}
            >
              <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}
