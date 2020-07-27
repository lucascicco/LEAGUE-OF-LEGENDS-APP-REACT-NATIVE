import React from 'react';
import Navigator from './src/Index';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

export default function App() {
  return <Navigator />
}
