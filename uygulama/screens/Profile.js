import React from 'react';



import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import ProfileSettings from '../components/ProfileSettings';
import Post from '../components/Post';
const userTweets = [
  { id: '1', content: 'My first tweet!', timestamp: '1h ago' },
  { id: '2', content: 'Loving this new app!', timestamp: '2h ago' },
  // Daha fazla tweet eklenebilir
];

const ProfileScreen = () => {
  const renderTweet = ({ item }) => (
    <View style={styles.tweetContainer}>
      <Text style={styles.tweetContent}>{item.content}</Text>
      <Text style={styles.tweetTimestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Username</Text>
          <Text style={styles.handle}>@username</Text>
          <Text style={styles.bio}>This is the user's bio. It can be a couple of lines long.</Text>
        </View>
        <ProfileSettings></ProfileSettings>
      </View>
      <View style={styles.profileStats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>120</Text>
          <Text style={styles.statLabel}>Tweets</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>340</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>180</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
      <FlatList
        data={userTweets}
        renderItem={renderTweet}
        keyExtractor={item => item.id}
        style={styles.tweetsContainer}
      />
      <Post></Post>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileHeader: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  handle: {
    fontSize: 16,
    color: '#555',
  },
  bio: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  profileStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  tweetsContainer: {
    paddingHorizontal: 10,
  },
  tweetContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  tweetContent: {
    fontSize: 16,
  },
  tweetTimestamp: {
    color: '#555',
    fontSize: 12,
    marginTop: 5,
  },
});

export default ProfileScreen;