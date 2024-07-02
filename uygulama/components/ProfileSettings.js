import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileSettings() {
  const navigation=useNavigation();
  const handleAccountSettingsPress = () => {
    navigation.navigate("ayarlar");
    console.log("Hesap ayarları sayfasına yönlendirme");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.settingsButton} onPress={handleAccountSettingsPress}>
        <Ionicons name="settings-outline" size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.profileHeader}>{/* Profil bilgileri */}</View>
      {/* Profil ayarları buraya eklenecek */}
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 5,
    backgroundColor: 'white',
},
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  settingsButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  profileHeader: {
    // Profil bilgileri stilleri
  },
});
