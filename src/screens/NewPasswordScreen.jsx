import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const NewPasswordScreen = ({ navigation }) => {
  const [newPassword, setNewPassword] = useState('');

  const handleConfirm = () => {
    console.log('Nueva contraseña:', newPassword);
    navigation.navigate('Login'); // Asegúrate de que 'Login' coincida con el nombre de la ruta en App.js
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Nueva contraseña"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
      </View>
      <Button title="Confirmar" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  inputField: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    width: '100%',
  },
});

export default NewPasswordScreen;
