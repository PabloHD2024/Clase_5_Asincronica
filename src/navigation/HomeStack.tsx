import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';
import ListaScreen from '../screens/ListaScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen 
        name="Lista" 
        component={ListaScreen} 
        options={{ title: 'Lista de Recetas' }}
      />
      <Stack.Screen 
        name="Detalle" 
        component={DetailScreen} 
        options={{ title: 'Detalle de Receta' }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;