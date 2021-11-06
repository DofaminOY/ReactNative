import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function PhotosScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </SafeAreaView>
  );
}

function FavoritesScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();



export default function App() {
 
  return (
    <SafeAreaView style={styles.container}>
      
    
    <StatusBar style="auto" />
    <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Photos" component={PhotosScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
 
  
  
});


