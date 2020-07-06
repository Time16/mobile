import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform, Linking, Alert } from "react-native";
import { useNavigation, useRoute, useIsFocused } from "@react-navigation/native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

import styles from "./styles";
import Config from "../../config/config";
import { Delivery } from "../../types";

interface Params {
  delivery: Delivery;
}

export default function DeliveryFlow() {
  const navigation = useNavigation();
  const dictionary = [
    {
      status: "Pendente",
      addressLabel: "Buscar em",
      distanceLabel: "Tempo até o estabelecimento",
      title: "Busque o pedido",
      buttonMessage: "Cheguei no estabelecimento",
      navigation: "PickupConfirmation",
    },
    {
      status: "Buscando",
      addressLabel: "Buscar em",
      distanceLabel: "Tempo até o estabelecimento",
      title: "Busque o pedido",
      buttonMessage: "Cheguei no estabelecimento",
      navigation: "PickupConfirmation",
    },
    {
      status: "Entregando",
      addressLabel: "Entregar em",
      distanceLabel: "Tempo até o destino",
      title: "Entregue o pedido",
      buttonMessage: "Entreguei o pedido",
      navigation: "DeliveryConfirmation",
    },
  ];

  const mapRef = useRef<MapView>(null);

  const [initialPosition, setInitialPosition] = useState({ latitude: 0, longitude: 0 });
  const [distance, setDistance] = useState("");
  const [duration, useDuration] = useState("");

  const [mk1Coordinate, setMk1Coordinate] = useState({ latitude: 0, longitude: 0 });
  const [mk2Coordinate, setMk2Coordinate] = useState({ latitude: 0, longitude: 0 });

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  const isFocused = useIsFocused();
  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== "granted") {
        Alert.alert("Ops", "Precisamos de sua permissão para calcular sua rota");
        return;
      }

      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      if (delivery.status === 2) {
        setInitialPosition({
          latitude: delivery.pickupLocation.latitude,
          longitude: delivery.pickupLocation.longitude,
        });
        setMk1Coordinate({
          latitude: delivery.pickupLocation.latitude,
          longitude: delivery.pickupLocation.longitude,
        });
      } else {
        setInitialPosition({ latitude, longitude });
        setMk1Coordinate({ latitude, longitude });
      }
    }
    loadPosition();

    setMk2Coordinate(delivery.status === 1 ? delivery.pickupLocation : delivery.deliveryLocation);
  }, [isFocused]);

  useEffect(() => {
    mapRef.current?.fitToSuppliedMarkers(["mk1", "mk2"], {
      edgePadding: { top: 100, right: 0, bottom: 0, left: 0 },
    });
  }, [mk1Coordinate, mk2Coordinate]);

  function openMap() {
    if (Platform.OS === "ios") {
      Linking.openURL(
        `http://maps.apple.com/maps/dir/` +
          `${mk1Coordinate.latitude},+${mk1Coordinate.longitude}/` +
          `'${mk2Coordinate.latitude},${mk2Coordinate.longitude}'`
      );
    } else if (Platform.OS === "android") {
      Linking.openURL(
        `https://www.google.com/maps/dir/` +
          `${mk1Coordinate.latitude},+${mk1Coordinate.longitude}/` +
          `'${mk2Coordinate.latitude},${mk2Coordinate.longitude}'`
      );
    }
  }

  function openPhoneClient() {
    Linking.openURL(`tel:${"35353535"}`);
  }

  function openPhoneHelp() {
    Linking.openURL(`tel:${"36363636"}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header} />

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
          <Text style={styles.statusLabel}>{dictionary[delivery.status].title}</Text>

          <View style={styles.itemTimeStart}>
            <Image source={require("../../assets/deliveries/clock.png")} />
            <Text style={styles.statusLabel}>
              {delivery.timeStart}:00 - {delivery.timeStart + 2}:00
            </Text>
          </View>
        </View>
        {/* body */}
        <Text style={styles.timeRemaining}>{delivery.status > 0 && "Tempo restante"}</Text>
        <Text style={styles.price}>R$ {delivery.price}</Text>
        <Text style={styles.size}>{delivery.size}</Text>
        <Text style={styles.addressLabel}>{dictionary[delivery.status].addressLabel}</Text>
        {delivery.status === 1 && (
          <>
            <Text style={styles.pickupName}>{delivery.pickupName}</Text>
            <Text style={styles.pickupAdress}>{delivery.pickupAddress}</Text>
          </>
        )}
        {delivery.status === 2 && (
          <>
            <Text style={styles.pickupName}>{delivery.deliveryName}</Text>
            <Text style={styles.pickupAdress}>{delivery.deliveryAddress}</Text>
          </>
        )}
        <Text style={styles.detailsLabel}>{dictionary[delivery.status].distanceLabel}</Text>
        <Text style={styles.detailsText}>
          {duration} min / {distance} km
        </Text>

        {/* map */}
        <View style={styles.mapContainer}>
          {initialPosition.latitude !== 0 && (
            <MapView
              style={styles.map}
              ref={mapRef}
              loadingEnabled={true}
              onMapReady={() => {
                mapRef.current?.fitToElements(true);
                mapRef.current?.fitToSuppliedMarkers(["mk1", "mk2"], {
                  edgePadding: { top: 100, right: 0, bottom: 0, left: 0 },
                });
              }}
            >
              <MapViewDirections
                origin={initialPosition}
                destination={
                  delivery.status === 1 ? delivery.pickupLocation : delivery.deliveryLocation
                }
                apikey={Config.GOOGLE_MAPS_APIKEY}
                region="BR"
                strokeWidth={5}
                strokeColor="#431E93"
                onReady={(result) => {
                  setDistance(result.distance.toFixed(1));
                  useDuration(result.duration.toFixed(0));
                }}
              />
              <Marker
                key={String(1)}
                onPress={() => {}}
                coordinate={mk1Coordinate}
                title={"Você"}
                identifier={"mk1"}
              />
              <Marker
                key={String(2)}
                onPress={() => {}}
                coordinate={mk2Coordinate}
                title={delivery.pickupName.toString()}
                identifier={"mk2"}
              />
            </MapView>
          )}
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity onPress={openMap} style={styles.openMapButton}>
              <Image source={require("../../assets/openMapButton.png")} />
              <Text>Abrir mapa</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={openPhoneClient} style={styles.callClientButton}>
              <Image source={require("../../assets/callClientButton.png")} />
              <Text>Ligar pro{"\n"}cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openPhoneHelp} style={styles.helpButton}>
              <Image source={require("../../assets/helpButton.png")} />
              <Text>Ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(dictionary[delivery.status].navigation, { delivery: delivery });
            }}
          >
            <Text style={styles.buttonText}>{dictionary[delivery.status].buttonMessage}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
