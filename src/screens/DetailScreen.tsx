import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../types/navigation';
import styles from '../styles/styles';

type DetailScreenRouteProp = {
  key: string;
  name: string;
  params: { id: number };
};

type DetailScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Detalle'>;

const DetailScreen: React.FC = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const navigation = useNavigation<DetailScreenNavigationProp>();
  const { id } = route.params;

  const getItemDetails = (id: number) => {
    const items = {
      1: { name: 'Pizza', description: 'Pizza casera con ingredientes frescos', steps: 'Amasar, agregar salsa, queso y hornear' },
      2: { name: 'Pasta', description: 'Pasta al dente con salsa de tomate', steps: 'Cocer pasta, preparar salsa, mezclar' },
      3: { name: 'Ensalada', description: 'Ensalada fresca con vegetales', steps: 'Lavar vegetales, cortar, mezclar' },
    };
    return items[id as keyof typeof items] || items[1];
  };

  const item = getItemDetails(id);

  return (
    <View style={styles.containerDetail}>
      <Text style={styles.titleDetail}>Detalle #{id}</Text>
      <View style={styles.cardDetail}>
        <Text style={styles.itemNameDetail}>{item.name}</Text>
        <Text style={styles.itemDescriptionDetail}>{item.description}</Text>
        <Text style={styles.stepsTitleDetail}>Pasos:</Text>
        <Text style={styles.stepsDetail}>{item.steps}</Text>
      </View>
      <TouchableOpacity 
        style={styles.backButtonDetail}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonTextDetail}>Volver a la lista</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;