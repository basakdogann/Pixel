import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const KullaniciAdiDegis = () => {
  const [newUsername, setNewUsername] = useState('');

  const handleChangeUsername = () => {
    if (newUsername === '') {
      Alert.alert('Hata', 'Lütfen yeni kullanıcı adını girin');
    } else {
      // Kullanıcı adı değiştirme işlemi burada gerçekleştirilebilir
      Alert.alert('Başarılı', 'Kullanıcı adı başarıyla değiştirildi');
      // Kullanıcı adı değiştirme işlemi tamamlandıktan sonra inputu sıfırla
      setNewUsername('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Yeni Kullanıcı Adı"
        value={newUsername}
        onChangeText={setNewUsername}
      />
      <TouchableOpacity style={styles.button} onPress={handleChangeUsername}>
        <Text style={styles.buttonText}>Kullanıcı Adını Değiştir</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default KullaniciAdiDegis;