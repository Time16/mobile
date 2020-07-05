import React, { useRef, useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, Platform, Linking, Alert, Modal, TouchableHighlight } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from 'expo-location';

import styles from "./styles";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
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
      navigation: "PickupConfirmation"
    },
    {
      status: "Buscando",
      addressLabel: "Buscar em",
      distanceLabel: "Tempo até o estabelecimento",
      title: "Busque o pedido",
      buttonMessage: "Cheguei no estabelecimento",
      navigation: "PickupConfirmation"
    },
    {
      status: "Entregando",
      addressLabel: "Entregar em",
      distanceLabel: "Tempo até o destino",
      title: "Entregue o pedido",
      buttonMessage: "Entreguei o pedido",
      navigation: "DeliveryConfirmation"
    },
  ];

  const mapRef = useRef<MapView>(null);

  const [initialPosition, setInitialPosition] = useState({latitude: 0, longitude: 0});
  const [distance, setDistance] = useState('');
  const [duration, useDuration] = useState('');

  const route = useRoute();
  const routeParams = route.params as Params;
  const delivery = routeParams.delivery;

  useEffect(() => {
    async function loadPosition() {
      const { status } = await Location.requestPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert('Ops', 'Precisamos de sua permissão para calcular sua rota');
        return;
      }
  
      const location = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = location.coords;

      setInitialPosition({latitude, longitude});
    }
    loadPosition();
  }, []);

  function openMap() {
    if (Platform.OS === 'ios') {
      Linking.openURL(
        `http://maps.apple.com/maps/dir/`+
        `${initialPosition.latitude},+${initialPosition.longitude}/`+
        `'${delivery.pickUpLocation.latitude},${delivery.pickUpLocation.longitude}'`
      );
    } else if (Platform.OS === 'android') {
      Linking.openURL(
        `https://www.google.com/maps/dir/`+
        `${initialPosition.latitude},+${initialPosition.longitude}/`+
        `'${delivery.pickUpLocation.latitude},${delivery.pickUpLocation.longitude}'`
      );
    }
  }

  function openPhoneClient() {
    Linking.openURL(`tel:${'35353535'}`);
  }

  function openPhoneHelp() { 
    Linking.openURL(`tel:${'36363636'}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Suas entregas</Text>
        <Image style={styles.headerImage} source={require("../../assets/options.png")} />
      </View>

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
        <Text style={styles.detailsLabel}>{dictionary[delivery.status].distanceLabel}</Text>
        <Text style={styles.detailsText}>{duration} min / {distance} km</Text>

        {/* map */}
        <View style={styles.mapContainer}>
        { initialPosition.latitude !== 0 && (
          <MapView
            style={styles.map}
            ref={mapRef}
            loadingEnabled={true}
            onMapReady={() => {
              mapRef.current?.fitToElements(true);
              mapRef.current?.fitToSuppliedMarkers(
                  ['mk1','mk2'],
                  {edgePadding: {top: 100, right: 0, bottom: 0, left: 0}}
                )
              }
            }
          >
            <MapViewDirections
              origin={initialPosition}
              destination={delivery.pickUpLocation}
              apikey={Config.GOOGLE_MAPS_APIKEY}
              region='BR'
              strokeWidth={5}
              strokeColor="#431E93"
              onReady={result => {
                setDistance(result.distance.toFixed(1));
                useDuration(result.duration.toFixed(0));
              }}
            />
            <Marker
              key={String(1)}
              onPress={() => {}}
              coordinate={initialPosition}
              title={'Você'}
              identifier={'mk1'}
            />
            <Marker
              key={String(2)}
              onPress={() => {}}
              coordinate={delivery.pickUpLocation}
              title={delivery.pickupName.toString()}
              identifier={'mk2'}
            />
          </MapView>
        )}
        </View>

        <View style={styles.buttonContainer}>
          <View>
            <TouchableOpacity onPress={openMap} style={styles.openMapButton}>
              <Image source={require('../../assets/openMapButton.png')}/>
              <Text>Abrir mapa</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row',}}>
            <TouchableOpacity onPress={openPhoneClient} style={styles.callClientButton}>
              <Image source={require('../../assets/callClientButton.png')}/>
              <Text>Ligar pro{"\n"}cliente</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={openPhoneHelp} style={styles.helpButton}>
              <Image source={require('../../assets/helpButton.png')}/>
              <Text>Ajuda</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate(dictionary[delivery.status].navigation, {delivery: delivery})
            }}
          >
            <Text style={styles.buttonText}>{dictionary[delivery.status].buttonMessage}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
