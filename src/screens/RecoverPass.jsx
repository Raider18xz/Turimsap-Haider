import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, Text } from 'react-native';

const RecoverPass = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = () => {
    console.log('Recuperar contraseña para:', email);
    navigation.navigate('NewPasswordScreen');
  };

  const handleCancel = () => {
    navigation.navigate('Login'); // Asegúrate de que 'Login' coincida con el nombre en App.js
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <Button title="Siguiente" onPress={handleRecoverPassword} />
      <Pressable onPress={handleCancel}>
        <Text style={styles.link}>Cancelar</Text>
      </Pressable>
      
 
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
  link: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default RecoverPass;
