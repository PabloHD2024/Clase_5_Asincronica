import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const SearchScreen: React.FC = () => {
  return (
    <View style={styles.containerSearch}>
      <Text style={styles.titleSearch}>Buscar</Text>
      <Text style={styles.descriptionSearch}>
        Encuentra lo que necesitas utilizando nuestro sistema de búsqueda avanzada.
      </Text>
    </View>
  );
};


export default SearchScreen;