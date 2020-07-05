import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

import { Delivery } from "../../types";

import styles from "./styles";

export default function Home() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: 0,
      status: 0,
      price: 0,
      size: "",
      pickupName: "",
      pickupAddress: "",
      pickupLocation: {
        latitude: 0,
        longitude: 0,
      },
      deliveryName: "",
      deliveryAddress: "",
      deliveryLocation: {
        latitude: 0,
        longitude: 0,
      },
      timeStart: 0,
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
    setDeliveries([
      {
        id: 2,
        status: 1,
        price: 9,
        size: "Grande",
        pickupName: "Padaria Alem do Pão",
        pickupAddress: "R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340",
        pickupLocation: {
          latitude: -15.8703626,
          longitude: -47.9686797,
        },
        deliveryName: "João Carlos Marinho",
        deliveryAddress: "R. São Francisco número 202",
        deliveryLocation: {
          latitude: -15.8687677,
          longitude: -47.9663086,
        },
        timeStart: 12,
      },
      {
        id: 34343431,
        status: 0,
        price: 5,
        size: "Pequeno",
        pickupName: "Mercado da Ana",
        pickupAddress: "R. Jandira Lote 2 Número 1",
        pickupLocation: {
          latitude: -15.8703626,
          longitude: -47.9686797,
        },
        deliveryName: "Maria Aparecida",
        deliveryAddress: "R. Araguaia Casa 503",
        deliveryLocation: {
          latitude: -15.8687677,
          longitude: -47.9663086,
        },
        timeStart: 10,
      },
      {
        id: 2343434,
        status: 0,
        price: 7,
        size: "Médio",
        pickupName: "Mercadinho Melhor Preço",
        pickupAddress: "Avenida Araújo número 2",
        pickupLocation: {
          latitude: -15.8703626,
          longitude: -47.9686797,
        },
        deliveryName: "João Carlos Marinho",
        deliveryAddress: "Avenida Araújo Número 505",
        deliveryLocation: {
          latitude: -15.8687677,
          longitude: -47.9663086,
        },
        timeStart: 18,
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
            <Text style={styles.headerText}>Suas entregas</Text>
            <Image source={require("../../assets/options.png")} />
          </View>

          {deliveries.length > 0 ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.deliveries}
              data={deliveries.filter((delivery) => delivery.status < 2)}
              keyExtractor={(delivery) => String(delivery.id)}
              renderItem={({ item: delivery }) => (
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
                      <Text style={styles.timeWindow}>
                        {delivery.timeStart}:00 - {delivery.timeStart + 2}
                      </Text>
                    </View>
                  </View>
                  {/* body */}
                  <Text style={styles.timeRemaining}>
                    {delivery.status > 0 && "Tempo restante"}
                  </Text>
                  <Text style={styles.price}>R$ {delivery.price}</Text>
                  <Text style={styles.size}>{delivery.size}</Text>
                  <Text style={styles.addressLabel}>
                    {dictionary[delivery.status].addressLabel}
                  </Text>
                  <Text style={styles.pickupName}>{delivery.pickupName}</Text>
                  <Text style={styles.pickupAdress}>{delivery.pickupAddress}</Text>
                  {/* footer */}
                  <View style={styles.itemFooter}>
                    <View style={styles.detailsBox}>
                      <Image source={require("../../assets/deliveries/route.png")} />

                      {/* <View style={styles.details}>
                        <Text style={styles.detailsLabel}>Tempo e distância estimada</Text>
                        <Text style={styles.detailsText}>
                          {delivery.duration}min / {delivery.distance}km
                        </Text>
                      </View> */}
                    </View>

                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        if (delivery.status < 2) {
                          delivery.status++;
                        }
                        navigation.navigate("DeliveryFlow", { delivery: delivery });
                      }}
                    >
                      <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          ) : (
            <View style={styles.emptyDeliveries}>
              <Image source={require("../../assets/deliveries/empty.png")} />
              <Text style={styles.emptyDeliveriesText}>
                Você não tem nenhum pedido pra entregar
              </Text>
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
                <Image source={require(`../../assets/deliveries/history.png`)} />
              </View>
              <Text style={styles.menuText}>Histórico</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("Deliveries")}
            >
              <View style={styles.menuItemBox}>
                <Image source={require(`../../assets/deliveries/deliveries-selected.png`)} />
              </View>
              <Text style={styles.menuTextSelected}>Entregas</Text>
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
