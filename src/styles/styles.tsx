import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  containerHome: {
    flex: 1,
    backgroundColor: '#e0f2fe', // Azul claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  titleHome: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  descriptionHome: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },

  containerSearch: {
    flex: 1,
    backgroundColor: '#dcfce7', // Verde claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  titleSearch: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  descriptionSearch: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },

   containerProfile: {
    flex: 1,
    backgroundColor: '#fef9c3', // Amarillo claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  
  titleProfile: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  
  descriptionProfile: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },

});

export default styles;