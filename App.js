// import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import Router from './src/navigation/Router';

// alt + z will make the code auto-fit to the screen

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
