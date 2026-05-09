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

  containerLista: {
    flex: 1,
    backgroundColor: '#e0f2fe',
    padding: 20,
  },
  
  titleLista: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  
  listContainerLista: {
    flex: 1,
    gap: 15,
  },
  
  itemButtonLista: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  itemNameLista: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  
  itemDescriptionLista: {
    fontSize: 14,
    color: '#666',
  },

  containerDetail: {
    flex: 1,
    backgroundColor: '#e0f2fe',
    padding: 20,
  },
  
  titleDetail: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  cardDetail: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },

  itemNameDetail: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  itemDescriptionDetail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },

  stepsTitleDetail: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  stepsDetail: {
    fontSize: 16,
    color: '#444',
    lineHeight: 24,
  },

  backButtonDetail: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },

  backButtonTextDetail: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default styles;