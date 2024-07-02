import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const SifreDegistir = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    if (oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun');
    } else if (newPassword !== confirmNewPassword) {
      Alert.alert('Hata', 'Yeni şifreler eşleşmiyor');
    } else {
      // Şifre değiştirme işlemi burada gerçekleştirilebilir
      Alert.alert('Başarılı', 'Şifre başarıyla değiştirildi');
      // Şifre değiştirme işlemi tamamlandıktan sonra inputları sıfırla
      setOldPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Eski Şifre"
        value={oldPassword}
        onChangeText={setOldPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifre"
        value={newPassword}
        onChangeText={setNewPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Yeni Şifreyi Doğrula"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.buttonText}>Şifreyi Değiştir</Text>
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

export default SifreDegistir;