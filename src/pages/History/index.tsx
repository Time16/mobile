import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, Linking } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { Delivery } from "../../types";

import styles from "./styles";
import { getHistory } from "../../state";

export default function History() {
  const [deliveries, setDeliveries] = useState<Delivery[]>([]);

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

  const isFocused = useIsFocused();
  useEffect(() => {
    setDeliveries(getHistory());
  }, [isFocused]);

  return (
    <View style={styles.container}>
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
            <Image style={styles.diamond} source={require("../../assets/history/diamond.png")} />

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
      <Text style={styles.headerText}>Seu histórico de entregas</Text>

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

            {/* <Text style={styles.timeRemaining}>{delivery.status > 0 && "Tempo restante"}</Text> */}
            <Text style={styles.addressLabel}>Retirou em</Text>
            <Text style={styles.pickupName}>{delivery.pickupName}</Text>
            <Text style={styles.pickupAdress}>{delivery.pickupAddress}</Text>
            {/* footer */}
            <View style={styles.itemFooter}>
              <View style={styles.detailsBox}>
                {/* <View style={styles.details}>
                  <Text style={styles.detailsLabel}>Tempo e distância total</Text>
                  <Text style={styles.detailsText}>
                    {delivery.duration}min / {delivery.distance}km
                  </Text>
                </View> */}
              </View>

              <TouchableOpacity style={styles.button} onPress={openPhoneHelp}>
                <Text style={styles.buttonText}>Ajuda</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("History")}>
          <View style={styles.menuItemBox}>
            <Image source={require(`../../assets/deliveries/history-selected.png`)} />
          </View>
          <Text style={styles.menuTextSelected}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Deliveries")}>
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
    </View>
  );
}
