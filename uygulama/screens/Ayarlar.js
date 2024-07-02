import React from "react";
import { View, Text, StyleSheet, SafeAreaView,TouchableOpacity,Platform } from "react-native";
import Constants from 'expo-constants';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Ayarlar = () => {
  const navigation=useNavigation();

  const handleChangeProfilePicture = () => {
    navigation.navigate("profilfotodegis");
    // Profil fotoğrafını değiştirme işlevi
  };

  const handleChangePassword = () => {
    // Şifre değiştirme işlevi
    navigation.navigate("sifredegistir");
  };

  const handleChangeUsername = () => {
    navigation.navigate("kullaniciadidegistir");
    // Kullanıcı adı değiştirme işlevi
  };

  const handleAddAccount = () => {
    navigation.navigate("girisEkrani");
    // Hesap ekleme işlevi
  };

  const handleAbout = () => {
    navigation.navigate("hakkinda");

    // Hakkında ekranına yönlendirme işlevi
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleChangeProfilePicture}
        >
          <Text style={styles.settingLabel}>Profil Fotoğrafını Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleChangePassword}
        >
          <Text style={styles.settingLabel}>Şifre Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingItem}
          onPress={handleChangeUsername}
        >
          <Text style={styles.settingLabel}>Kullanıcı Adı Değiştir</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleAddAccount}>
          <Text style={styles.settingLabel}>Hesap Ekle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleAbout}>
          <Text style={styles.settingLabel}>Hakkında</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: statusBarHeight,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  settingLabel: {
    fontSize: 16,
  },
});

export default Ayarlar;
