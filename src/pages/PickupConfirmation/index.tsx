import React from "react";
import { Modal, View, TouchableHighlight, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Delivery } from "../../types";

import styles from './styles';
import { updateVeliveryStatus } from "../../state";

interface Params {
  delivery: Delivery;
}

export default function PickupConfirmation() {
  const navigation = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  function confirmPickup() {
    updateVeliveryStatus(delivery.id);
    navigation.navigate('DeliveryFlow', {delivey: delivery});
  }

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
              onPress={() => confirmPickup()}
            >
              <Text style={styles.buttonText}>Confirmar o pedido</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
}
