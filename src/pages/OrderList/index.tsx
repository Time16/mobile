import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';

import Config from '../../config/config';

const DATA = [
  {
    id: '1',
    store: 'Padaria alem do Pao',
    address: 'R. Prof. Augusto Lins e Silva, 211 - Boa Viagem, Recife - PE, 51030-340',
    location: Config.NEIGHBOR_LOCATION,
    schedulingTime: {
      initial: 12,
      final: 14
    }
  },
];

export default function OrderList() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View
            style={styles.item}
            onTouchEnd={() => navigation.navigate('OrderDetail', {item: item})}
          >
            <Text style={styles.itemTitle}>{item.store}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
