import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/styles'

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.containerProfile}>
      <Text style={styles.titleProfile}>Perfil</Text>
      <Text style={styles.descriptionProfile}>
        Administra tu información personal, configuración y preferencias.
      </Text>
    </View>
  );
};

export default ProfileScreen;