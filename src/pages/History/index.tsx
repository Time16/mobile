import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

import styles from "./styles";

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

export default function History() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: 0,
      status: 0,
      price: 0,
      size: "",
      pickupName: "",
      pickUpAdress: "",
      pickUpLocation: { latitude: 0, longitude: 0 },
      duration: 0,
      distance: 0,
      timeStart: 0,
    },
  ]);

  const navigation = useNavigation();
  const levelDictionary = [
    { color: "#FBDF00", current: true },
    { color: "#56CCF2", current: false },
    { color: "#2F80ED", current: false },
    { color: "#6FCF97", current: false },
    { color: "#219653", current: false },
  ];

  function openPhoneHelp() {
    Linking.openURL(`tel:${"36363636"}`);
  }

  useEffect(() => {
    async function getHistory() {
      const response = await api.get("");

      setDeliveries([
        {
          id: 478237472,
          status: 0,
          price: 9.52,
          size: "Grande",
          pickupName: "Padaria Alem do Pão",
          pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
          pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
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
          pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
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
          pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
          duration: 20,
          distance: 3,
          timeStart: 12,
        },
      ]);
    }

    // getHistory();

    setDeliveries([
      {
        id: 478237472,
        status: 0,
        price: 9.52,
        size: "Grande",
        pickupName: "Padaria Alem do Pão",
        pickUpAdress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
        pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
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
        pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
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
        pickUpLocation: { latitude: 45.65645645, longitude: -26.65645645 },
        duration: 20,
        distance: 3,
        timeStart: 12,
      },
    ]);
  }, []);

  return (
    <View
      style={[
        styles.container,
        { justifyContent: deliveries.length > 0 ? "flex-start" : "space-between" },
      ]}
    >
      {deliveries[0].id !== 0 && (
        <>
          <View style={styles.header}>
            {/* profile */}
            <View style={styles.profile}>
              <View style={styles.profilePicture}>
                <Image source={require("../../assets/history/profile-picture.png")} />
              </View>
              <View style={styles.profileDetails}>
                <Text style={styles.headerName}>Evandro Entregador</Text>
                <Text style={styles.headerEmail}>evandro2020@exemplo.com</Text>
              </View>
              <Image source={require("../../assets/options.png")} />
            </View>
            {/* beneficts */}
            <View style={styles.beneficts}>
              <View style={styles.benefictsBar}>
                {levelDictionary.map((level) => (
                  <View
                    key={level.color}
                    style={[
                      styles.benefictsBarItem,
                      { backgroundColor: level.color, opacity: level.current ? 1 : 0.3 },
                    ]}
                  ></View>
                ))}
              </View>

              <View style={styles.benefictsDetails}>
                <Image
                  style={styles.diamond}
                  source={require("../../assets/history/diamond.png")}
                />

                <View style={styles.detailsData}>
                  <Text style={styles.detailsTitle}>Agente Iniciante</Text>

                  <View style={styles.detailsHistory}>
                    <View style={styles.detailsDeliveries}>
                      <Text style={styles.deliveriesNumber}>0</Text>
                      <Text style={styles.deliveriesTitle}>entregas</Text>
                    </View>

                    <View style={styles.detailsLevel}>
                      <View style={styles.levelScore}>
                        <Image source={require("../../assets/history/star.png")} />
                        <Text style={styles.levelNumber}>0</Text>
                      </View>
                      <Text style={styles.levelTitle}>noviço</Text>
                    </View>
                  </View>
                </View>

                <Text style={styles.benefictsButton}>Benefícios</Text>
              </View>
            </View>
          </View>
          {deliveries.length > 0 && (
            <Text style={styles.headerText}>Seu histórico de entregas</Text>
          )}

          {deliveries.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.deliveries}
              data={deliveries}
              keyExtractor={(delivery) => String(delivery.id)}
              renderItem={({ item: delivery }) => (
                <View key={delivery.id} style={styles.delivery}>
                  {/* header */}
                  <View style={styles.itemHeader}>
                    <Text style={styles.price}>R$ {delivery.price}</Text>
                    <View style={styles.itemTimeStart}>
                      <Image source={require("../../assets/deliveries/clock.png")} />
                      <Text style={styles.timeWindow}>
                        {delivery.timeStart}:00 - {delivery.timeStart + 2}:00
                      </Text>
                    </View>
                  </View>
                  {/* body */}
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text style={styles.size}>{delivery.size}</Text>

                    <Text style={styles.timeRemaining}>Janela de entrega</Text>
                  </View>
                  <Text style={styles.addressLabel}>Retirou em</Text>
                  <Text style={styles.pickupName}>{delivery.pickupName}</Text>
                  <Text style={styles.pickupAdress}>{delivery.pickUpAdress}</Text>
                  {/* footer */}
                  <View style={styles.itemFooter}>
                    <View style={styles.detailsBox}>
                      <View style={styles.details}>
                        <Text style={styles.detailsLabel}>Tempo e distância total</Text>
                        <Text style={styles.detailsText}>
                          {delivery.duration}min / {delivery.distance}km
                        </Text>
                      </View>
                    </View>

                    <TouchableOpacity style={styles.button} onPress={openPhoneHelp}>
                      <Text style={styles.buttonText}>Ajuda</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <View style={styles.emptyDeliveries}>
              <Image source={require("../../assets/deliveries/empty.png")} />
              <Text style={styles.emptyDeliveriesText}>Você ainda não entregou nenhum pedido</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  navigation.navigate("Search");
                }}
              >
                <Text style={styles.buttonText}>Procurar</Text>
              </TouchableOpacity>
            </View>
          )}

          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("History")}
            >
              <View style={styles.menuItemBox}>
                <Image source={require(`../../assets/deliveries/history-selected.png`)} />
              </View>
              <Text style={styles.menuTextSelected}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("Deliveries")}
            >
              <View style={styles.menuItemBox}>
                <Image source={require(`../../assets/deliveries/deliveries.png`)} />
              </View>
              <Text style={styles.menuText}>Entregas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Search")}>
              <View style={styles.menuItemBox}>
                <Image source={require(`../../assets/deliveries/search.png`)} />
              </View>
              <Text style={styles.menuText}>Procurar</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}
