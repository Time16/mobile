import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>
        Welcome, Agente MELI!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
