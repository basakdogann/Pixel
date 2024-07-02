import Logo from './Logo';
import { Text, StyleSheet, View, SafeAreaView, Platform } from 'react-native';
import Constants from 'expo-constants';

function TopCard(props) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Logo size={75} />
                <View style={styles.textContainer}>
                    <Text style={styles.boldText}>{props.name}</Text>
                    <Text style={styles.lightText}>{props.department}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}
const statusBarHeight = Platform.OS === 'android' ? Constants.statusBarHeight : 0;
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: statusBarHeight,

    },
    textContainer: {
        marginLeft: 10,
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    lightText: {
        fontSize: 14,
        color: 'gray',
    },
});
export default TopCard;