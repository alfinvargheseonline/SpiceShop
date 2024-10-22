import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './Components/Home';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Home />
    </View>
  );
}