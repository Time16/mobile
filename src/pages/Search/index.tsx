import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from '@react-navigation/native';

import { getAvailable } from "../../state";
import { Delivery } from "../../types";

import styles from "./styles";

export default function Search() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

  const navigation = useNavigation();

  const isFocused = useIsFocused();
  useEffect(() => {
    setDeliveries(getAvailable());
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pedidos próximos a você</Text>
        <Image source={require("../../assets/options.png")} />
      </View>

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
                  {delivery.timeStart}:00 - {delivery.timeStart + 2}
                </Text>
              </View>
            </View>
            {/* body */}
            <Text style={styles.size}>{delivery.size}</Text>

            <Text style={styles.timeRemaining}>{delivery.status > 0 && "Tempo restante"}</Text>
            <Text style={styles.addressLabel}>Retirar em</Text>
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
                onPress={() => navigation.navigate("SearchFlow", { delivery: delivery })}
              >
                <Text style={styles.buttonText}>Aceitar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("History")}>
          <View style={styles.menuItemBox}>
            <Image source={require(`../../assets/deliveries/history.png`)} />
          </View>
          <Text style={styles.menuText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Deliveries")}>
          <View style={styles.menuItemBox}>
            <Image source={require(`../../assets/deliveries/deliveries.png`)} />
          </View>
          <Text style={styles.menuText}>Entregas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Search")}>
          <View style={styles.menuItemBox}>
            <Image source={require(`../../assets/deliveries/search-selected.png`)} />
          </View>
          <Text style={styles.menuTextSelected}>Procurar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
