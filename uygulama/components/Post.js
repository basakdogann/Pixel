import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity,TextInput,Button } from 'react-native';


  export default function Post(ozellilkler){
    return (<View>
        <TextInput placeholder="Gönderi gir"></TextInput>
        <Button title="Gönder"></Button>
    </View>)
  }

  
  