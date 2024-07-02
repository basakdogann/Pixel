import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo({size = 110}) {
  return <Image source={require('../assets/icon.png')} style={[styles.image, { width: size, height: size }]} />;
  
}

const styles = StyleSheet.create({
  image: {
  
    marginBottom: 8,
  },
})
