import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import SearchResultsScreen from '../screens/Searchresults';
// import HomeScreen from '../screens/Home';
import GuestsScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name={"Welcome"}
          component={HomeScreen}
          options={{
            title: "Where to?"
          }}
        /> */}
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "How many people?"
          }}
        />
        {/* <Stack.Screen
          name={"Search"}
          component={SearchResultsScreen}
          options={{
            title: "Search your destination"
          }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;
