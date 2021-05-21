import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreen from '../screens/Searchresults';

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* when we go back, it will redirecus to the home page on top. */}
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsScreen}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  )
}

export default Router;
