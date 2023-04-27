/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Pediatric_Assessment from './src/Components/Pediatric Assessment';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Form1 from './src/Components/Form1';
import Phase_1_Assessment_Form from './src/Components/Phase 1 Assessment Form ';
import Orientation from 'react-native-orientation-locker';
import Immersive from 'react-native-immersive';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    Orientation.lockToPortrait();
    return () => {
      Orientation.unlockAllOrientations(); // Unlocks all orientations when the component unmounts
    };
  }, []);

  Immersive.setImmersive(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pediatric Assessment"
          component={Pediatric_Assessment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phase 1 Assessment Form"
          component={Phase_1_Assessment_Form}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
