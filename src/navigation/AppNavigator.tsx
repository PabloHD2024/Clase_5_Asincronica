import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { RootTabParamList } from '../types/navigation';
import HomeStack from './HomeStack';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator<RootTabParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Buscar') {
            iconName = focused ? 'search' : 'search-outline';
          } else {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#6b7280',
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeStack} 
        options={{ title: 'Inicio' }}
      />
      <Tab.Screen 
        name="Buscar" 
        component={SearchScreen}
        options={{
          tabBarBadge: 5,
          tabBarBadgeStyle: { backgroundColor: '#2563eb' }
        }}
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Mi cuenta'
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;