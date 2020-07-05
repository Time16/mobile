import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform, Linking, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";

import styles from "./styles";
import { Delivery } from "../../types";
import { acceptDelivery } from "../../state";

interface Params {
  delivery: Delivery;
}

export default function DeliveryFlow() {
  const navigation = useNavigation();

  const [initialPosition, setInitialPosition] = useState({ latitude: 0, longitude: 0 });
  const [distance, setDistance] = useState("");
  const [duration, useDuration] = useState("");

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Ops", "Precisamos de sua permissão para calcular sua rota");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setInitialPosition({ latitude, longitude });
    }
    loadPosition();
  }, []);

  function confirmDelivery() {
    acceptDelivery(delivery.id);
    navigation.navigate("Search");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Suas entregas</Text>
        <Image style={styles.headerImage} source={require("../../assets/options.png")} />
      </View>

      <View key={delivery.id} style={styles.delivery}>
        {/* statusBar */}
        <View style={styles.close}>
          <Image source={require("../../assets/search/close.png")} />
        </View>
        {/* header */}
        <View style={styles.itemHeader}>
          <Text style={styles.priceLabel}>Quanto você vai receber</Text>
          <View style={styles.itemTimeStart}>
            <Image source={require("../../assets/deliveries/clock.png")} />
            <Text style={styles.statusLabel}>Entregar entre</Text>
          </View>
        </View>
        <View style={styles.secondHeader}>
          <Text style={styles.price}>R$ {delivery.price}</Text>
          <View style={styles.itemTimeStart}>
            <Text style={styles.timeStart}>
              {delivery.timeStart}:00 - {delivery.timeStart + 2}
            </Text>
          </View>
        </View>
        {/* body */}

        <Text style={styles.addressLabel}>Retirar em</Text>
        <Text style={styles.pickupName}>{delivery.pickupName}</Text>
        <Text style={styles.pickupAdress}>{delivery.pickupAddress}</Text>

        <View style={styles.pickupDetails}>
          <Image source={require("../../assets/deliveries/route.png")} />
          <View>
            <Text style={styles.detailsLabel}>Tempo e distância estimada da entrega</Text>
            <Text style={styles.detailsText}>
              {duration} min / {distance} km
            </Text>
          </View>
        </View>

        <Text style={styles.detailsLabel}>Tamanho do pedido</Text>
        <View style={styles.pickupSize}>
          <Image source={require("../../assets/search/car.png")} />
          <Text style={styles.size}>{delivery.size}</Text>
          <Text style={styles.sizeDetail}>(Buscar com carro)</Text>
        </View>

        <View style={styles.buttonContainer}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Search")}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={confirmDelivery} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Confirmar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
