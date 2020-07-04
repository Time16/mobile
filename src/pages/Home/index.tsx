import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <RectButton
          style={styles.button}
          onPress={() => navigation.navigate('OrderList')}
        >
          <Text style={styles.buttonText}>
            Procurar
          </Text>
        </RectButton>
      </View>
    </View>
  );
}
