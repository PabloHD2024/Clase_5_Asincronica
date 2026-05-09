import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';
import styles from '../styles/styles';

type ListScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Lista'>;

const ListScreen: React.FC = () => {
  const navigation = useNavigation<ListScreenNavigationProp>();

  const items = [
    { id: 1, name: 'Receta de Pizza', description: 'Deliciosa pizza casera' },
    { id: 2, name: 'Receta de Pasta', description: 'Pasta al dente con salsa' },
    { id: 3, name: 'Receta de Ensalada', description: 'Ensalada fresca y saludable' },
  ];

  return (
    <View style={styles.containerLista}>
      <Text style={styles.titleLista}>Lista de Recetas</Text>
      <View style={styles.listContainerLista}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.itemButtonLista}
            onPress={() => navigation.navigate('Detalle', { id: item.id })}
          >
            <Text style={styles.itemNameLista}>{item.name}</Text>
            <Text style={styles.itemDescriptionLista}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ListScreen;