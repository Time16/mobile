import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

interface Delivery {
  id: number;
  status: number;
  price: number;
  size: String;
  pickupName: String;
  pickUpAdress: String;
  duration: number;
  distance: number;
  timeStart: number;
}

export default function Home() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: 478237472,
      status: 0,
      price: 9.52,
      size: "Grande",
      pickupName: "Padaria Alem do Pão",
      pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
      duration: 20,
      distance: 3,
      timeStart: 12,
    },
    {
      id: 4782372472,
      status: 1,
      price: 9.52,
      size: "Pequeno",
      pickupName: "Padaria Alem do Pão",
      pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
      duration: 20,
      distance: 3,
      timeStart: 12,
    },
    {
      id: 4782472,
      status: 2,
      price: 9.52,
      size: "Grande",
      pickupName: "Padaria Alem do Pão",
      pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
      duration: 20,
      distance: 3,
      timeStart: 12,
    },
  ]);

  const navigation = useNavigation();
  const statusName = ["Pendente", "Buscando", "Entregando"];

  useEffect(() => {
    // get deliveries array from api
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Suas entregas</Text>
        <Image style={styles.headerImage} source={require("../../assets/options.png")} />
      </View>

      {deliveries.length > 0 ? (
        <View style={styles.deliveries}>
          {deliveries.map((delivery) => (
            <View key={delivery.id} style={styles.delivery}>
              <View style={styles.statusBar}>
                {Array.from(Array(3)).map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.statusItem,
                      { backgroundColor: index <= delivery.status ? "#FBDF00" : "#E0E0E0" },
                    ]}
                  ></View>
                ))}
              </View>
              <View style={styles.itemRow1}>
                <Text style={styles.statusLabel}>{statusName[delivery.status]}</Text>
                <View style={styles.itemTimeStart}>
                  <Image
                    style={styles.headerImage}
                    source={require("../../assets/deliveries/clock.png")}
                  />
                  <Text style={styles.statusLabel}>
                    {delivery.timeStart}:00 - {delivery.timeStart + 2}
                  </Text>
                </View>
              </View>
              <Text style={styles.timeRemaining}>Tempo restante</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyDeliveries}>
          <Image source={require("../../assets/deliveries/empty.png")} />
          <Text style={styles.emptyDeliveriesText}>Voce nao tem nenhum pedido pra entregar</Text>
          <TouchableOpacity style={styles.emptyDeliveriesButton} onPress={() => {}}>
            <Text style={styles.emptyDeliveriesButtonText}>Procurar</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.menu}>
        <View>
          <TouchableOpacity style={styles.menuItem} onPress={() => {}}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
