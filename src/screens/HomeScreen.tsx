import React from 'react';
import { View, Text } from 'react-native';
import styles from "../styles/styles";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.containerHome}>
      <Text style={styles.titleHome}>Inicio</Text>
      <Text style={styles.descriptionHome}>
        Bienvenido a la pantalla principal. Aquí podrás ver el contenido destacado de la aplicación.
      </Text>
    </View>
  );
};

export default HomeScreen;