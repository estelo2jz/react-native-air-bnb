import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';
import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/Searchresults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import Post from './src/components/Post';
import GuestsScreen from './src/screens/Guests';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[2];


// alt + z will make the code auto-fit to the screen

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <Post post={post1} /> */}
        {/* <SearchResultsScreen /> */}
        {/* <DestinationSearchScreen /> */}
        <GuestsScreen />
      </SafeAreaView>
    </>
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
