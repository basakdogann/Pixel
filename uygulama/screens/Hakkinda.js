import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Hakkinda = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hakkında</Text>
      <Text style={styles.content}>
        Bu uygulama, kullanıcıların tweet atmasına, fotoğraf paylaşmasına ve
        diğer kullanıcılarla etkileşimde bulunmasına olanak tanır. Geliştirici ekibimiz
        tarafından sürekli olarak güncellenmekte ve geliştirilmektedir.
      </Text>
      <Text style={styles.content}>
        Uygulama sürümü: 1.0.0
      </Text>
      <Text style={styles.content}>
        Geliştirici ekibiyle iletişime geçmek için: developer @bbasakkdogann@gmail.com

        
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Hakkinda;