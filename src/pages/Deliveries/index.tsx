import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Config from "../../config/config";

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

export default function Home() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: 478237472,
      status: 0,
      price: 9.52,
      size: "Grande",
      pickupName: "Padaria Alem do Pão",
      pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
      pickUpLocation: Config.NEIGHBOR_LOCATION,
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
      pickUpLocation: Config.NEIGHBOR_LOCATION,
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
      pickUpLocation: Config.NEIGHBOR_LOCATION,
      duration: 20,
      distance: 3,
      timeStart: 12,
    },
  ]);

  const navigation = useNavigation();
  const dictionary = [
    { status: "Pendente", addressLabel: "Buscar em" },
    { status: "Buscando", addressLabel: "Buscar em" },
    { status: "Entregando", addressLabel: "Entregar em" },
  ];

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
          <ScrollView showsHorizontalScrollIndicator={false}>
            {/* item */}
            {deliveries.map((delivery) => (
              <View key={delivery.id} style={styles.delivery}>
                {/* statusBar */}
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
                {/* header */}
                <View style={styles.itemHeader}>
                  <Text style={styles.statusLabel}>{dictionary[delivery.status].status}</Text>
                  <View style={styles.itemTimeStart}>
                    <Image source={require("../../assets/deliveries/clock.png")} />
                    <Text style={styles.statusLabel}>
                      {delivery.timeStart}:00 - {delivery.timeStart + 2}
                    </Text>
                  </View>
                </View>
                {/* body */}
                <Text style={styles.timeRemaining}>{delivery.status > 0 && "Tempo restante"}</Text>
                <Text style={styles.price}>R$ {delivery.price}</Text>
                <Text style={styles.size}>{delivery.size}</Text>
                <Text style={styles.addressLabel}>{dictionary[delivery.status].addressLabel}</Text>
                <Text style={styles.pickupName}>{delivery.pickupName}</Text>
                <Text style={styles.pickupAdress}>{delivery.pickUpAdress}</Text>
                {/* footer */}
                <View style={styles.itemFooter}>
                  <View style={styles.detailsBox}>
                    <Image source={require("../../assets/deliveries/route.png")} />

                    <View style={styles.details}>
                      <Text style={styles.detailsLabel}>Tempo e distância estimada</Text>
                      <Text style={styles.detailsText}>
                        {delivery.duration}min / {delivery.distance}km
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('DeliveryFlow', {delivery: delivery})}
                  >
                    <Text style={styles.buttonText}>Continuar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.emptyDeliveries}>
          <Image source={require("../../assets/deliveries/empty.png")} />
          <Text style={styles.emptyDeliveriesText}>Voce nao tem nenhum pedido pra entregar</Text>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Procurar</Text>
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
