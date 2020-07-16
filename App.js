import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './src/routes';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <AppNavigator />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

