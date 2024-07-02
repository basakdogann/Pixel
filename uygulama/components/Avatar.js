import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Avatar({avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2FoNFztYrjisKytpNypxcpYf_tQqGme8q5Q&s',size = 110}) {
  return <Image source={require('')} style={[styles.image, { width: size, height: size }]} />;
  
}

const styles = StyleSheet.create({
  image: {
  
    marginBottom: 8,
  },
})
