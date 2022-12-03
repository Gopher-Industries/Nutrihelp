

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Health() {
  console.log("Health.js working")
  return (
    <View  style={{
        color: 'grey'
      }}>
      <Text>B12</Text>
      <Text>Vitamin C</Text>
    </View>
  )
}