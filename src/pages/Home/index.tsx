import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

export default function Home() {
  const navigation = useNavigation();

  function HandleNavigateToDeliveries() {
    navigation.navigate("Deliveries");
  }

  return (
    <View style={styles.container}>
      <Text>Welcome, Agente Mercado Aqui!</Text>

      <RectButton style={styles.button} onPress={HandleNavigateToDeliveries}>
        <Text style={styles.buttonText}>Entrar</Text>
      </RectButton>
    </View>
  );
}
