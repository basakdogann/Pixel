import React from 'react';
import { View, Text, SafeAreaView,TextInput, TouchableOpacity, StyleSheet, FlatList, Image,Platform } from 'react-native';
import Constants from 'expo-constants';


const tweets = [
  {
    id: '1',
    user: {
      name: 'User One',
      handle: '@userone',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'This is a tweet from user one.',
    image: 'https://via.placeholder.com/300',
    timestamp: '2h',
  },
  {
    id: '2',
    user: {
      name: 'User Two',
      handle: '@usertwo',
      avatar: 'https://via.placeholder.com/50',
    },
    content: 'Another tweet from user two.',
    image: 'https://via.placeholder.com/300',
    timestamp: '3h',
  },
  // Daha fazla tweet eklenebilir
];

const Anasayfa = () => {
  const renderTweet = ({ item }) => (
    <View style={styles.tweetContainer}>
      <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
      <View style={styles.tweetContent}>
        <View style={styles.tweetHeader}>
          <Text style={styles.tweetName}>{item.user.name}</Text>
          <Text style={styles.tweetHandle}>{item.user.handle}</Text>
          <Text style={styles.tweetTimestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.tweetText}>{item.content}</Text>
        <Image source={{ uri: item.image }} style={styles.tweetImage} />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={tweets}
        renderItem={renderTweet}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraPlaceholder: {
    height: 50, // Kamera boşluğu için ayarlanacak yükseklik
    backgroundColor: '#ddd',
  },
  tweetContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  tweetContent: {
    flex: 1,
  },
  tweetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tweetName: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  tweetHandle: {
    color: '#555',
    marginRight: 5,
  },
  tweetTimestamp: {
    color: '#555',
  },
  tweetText: {
    marginTop: 5,
  },
  tweetImage: {
    marginTop: 10,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  newTweetButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  newTweetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default Anasayfa;