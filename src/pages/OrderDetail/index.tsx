import React, { useState, useEffect, useRef, createRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, Platform, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import MapViewDirections from 'react-native-maps-directions';
import Header from '../../components/Header';
import { RectButton } from 'react-native-gesture-handler';
import * as Location from 'expo-location';

interface Params {
  item: { 
    id: string,
    store: string,
    address: string,
    location: {
      latitude: number,
      longitude: number
    },
    schedulingTime: {
      initial: number,
      final: number
    }
  };
}

import Config from '../../config/config';

export default function OrderDetail() {
  const mapRef = useRef<MapView>(null);
  const route = useRoute();
  const routeParams = route.params as Params;

  const [initialPosition, setInitialPosition] = useState({latitude: 0, longitude: 0});
  const [distance, setDistance] = useState('');
  const [duration, useDuration] = useState('');

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
      Linking.openURL('http://maps.apple.com/maps?daddr=');
    } else if (Platform.OS === 'android') {
      Linking.openURL(
        `https://www.google.com/maps/dir/`+
        `${initialPosition.latitude},+${initialPosition.longitude}/`+
        `'${routeParams.item.location.latitude},${routeParams.item.location.longitude}'`
      );
    }
  }

  return (
    <>
      <Header />
      <View style={styles.card}>
        <View style={styles.content}>

          <View>
            <Text style={styles.text}>Busque o pedido</Text>
            <Text>
              {routeParams.item.schedulingTime.initial}H - {routeParams.item.schedulingTime.final}H
            </Text>
            <Text>1h20 min restantes</Text>
            <Text>Retirar em: {routeParams.item.store}</Text>
            <Text>{routeParams.item.address}</Text>
            <Text>Tempo até o estabelecimento</Text>
            <Text>Distância: {distance} km / Tempo: {duration} min</Text>
          </View>

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
                  destination={routeParams.item.location}
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
                  coordinate={routeParams.item.location}
                  title={routeParams.item.store}
                  identifier={'mk2'}
                />
              </MapView>
              )}
            </View>

          <View style={styles.buttons}>
            <TouchableOpacity onPress={openMap}>
              <Image source={require('../../assets/openMapButton.png')}/>
              <View>
                <Text>Abrir mapa</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/callClientButton.png')}/>
              <View>
                <Text>Ligar pro cliente</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../../assets/helpButton.png')}/>
              <View>
                <Text>Ajuda</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{justifyContent: 'flex-end',}}>
            <RectButton style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>
                Cheguei no estabelecimento
              </Text>
            </RectButton>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    marginTop: 53,
    alignSelf: 'center',
    borderRadius: 10,
    width: 350,
    height: '90%',
    backgroundColor: '#FFFFFF'
  },

  content: {
    padding: 16,
  },

  text: {
    fontStyle: 'normal',
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 18,
    lineHeight: 18,
    letterSpacing: -0.165,
    color: '#333333',
  },

  buttons: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    borderRadius: 50,
    backgroundColor: '#431E93',
    height: 60,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  mapContainer: {
    width: 298,
    height: 167,
    alignSelf: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 16,
  },

  map: {
    width: '100%',
    height: '100%',
  },
});
