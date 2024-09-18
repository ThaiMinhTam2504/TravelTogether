// import React, { useState, useEffect } from 'react';
// import { View,StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as Location from 'expo-location';

// // Sử dụng AsyncStorage trong component của bạn
// const storeData = async (value) => {
//     try {
//         await AsyncStorage.setItem('@storage_Key', value);
//     } catch (e) {
//         // saving error
//     }
// };

// const getData = async () => {
//     try {
//         const value = await AsyncStorage.getItem('@storage_Key');
//         if (value !== null) {
//             // value previously stored
//         }
//     } catch (e) {
//         // error reading value
//     }
// };

// const HomeScreen = () => {
//     const [friends, setFriends] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`http://192.168.1.7:3000/friends-location?token=${token}`);
//             const data = await response.json();
//             setFriends(data);
//         })();
//     }, []);

//     return (
//         <MapView style={{ flex: 1 }}>
//             {friends.map(friend => (
//                 <Marker
//                     key={friend.username}
//                     coordinate={{ latitude: friend.location.lat, longitude: friend.location.lng }}
//                     title={friend.username}
//                 />
//             ))}
//         </MapView>
//     );
// };

// export default HomeScreen;








// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 return;
//             }

//             let location = await Location.getCurrentPositionAsync({});
//             setLocation(location);
//         })();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location ? location.coords.latitude : 37.78825,
//                     longitude: location ? location.coords.longitude : -122.4324,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 showsUserLocation={true}
//             >
//                 {location && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//             </MapView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     map: {
//         flex: 1,
//     },
// });

// export default HomeScreen;







// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         })();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: John Doe</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 <Text style={styles.userInfoText}>- Friend 1</Text>
//                 <Text style={styles.userInfoText}>- Friend 2</Text>
//                 <Text style={styles.userInfoText}>- Friend 3</Text>
//                 <Button title="Send Friend Request" onPress={() => Alert.alert('Friend request sent')} />
//             </View>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location ? location.coords.latitude : 37.78825,
//                     longitude: location ? location.coords.longitude : -122.4324,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 region={location ? {
//                     latitude: location.coords.latitude,
//                     longitude: location.coords.longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 } : undefined}
//                 showsUserLocation={true}
//             >
//                 {location && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//             </MapView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     userInfo: {
//         flex: 0.3,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     userInfoText: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     map: {
//         flex: 1,
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         height: '50%',
//     },
// });

// export default HomeScreen;









// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });

//     useEffect(() => {
//         (async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 console.log('2')
//                 let location = await Location.getCurrentPositionAsync({});
//                 console.log('2.1')
//                 setLocation(location);
//             } catch (error) {
//                 console.log('3')
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         })();

//         (async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 const response = await fetch(`http://192.168.1.7:3000/user-info?token=${token}`);
//                 const data = await response.json();
//                 setUserInfo(data);
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         })();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends.map((friend, index) => (
//                     <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
//                 ))}
//                 <Button title="Send Friend Request" onPress={() => Alert.alert('Friend request sent')} />
//             </View>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location ? location.coords.latitude : 37.78825,
//                     longitude: location ? location.coords.longitude : -122.4324,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 region={location ? {
//                     latitude: location.coords.latitude,
//                     longitude: location.coords.longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 } : undefined}
//                 showsUserLocation={true}
//             >
//                 {location && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//             </MapView>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     userInfo: {
//         flex: 0.3,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },
//     userInfoText: {
//         fontSize: 18,
//         marginBottom: 10,
//     },
//     map: {
//         flex: 1,
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         height: '50%',
//     },
// });

// export default HomeScreen;











import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userInfo, setUserInfo] = useState({ username: '', friends: [] });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                Alert.alert('Error', 'Permission to access location was denied');
                return;
            }

            try {
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);
            } catch (error) {
                setErrorMsg(error.message);
                Alert.alert('Error', error.message);
            }
        })();

        (async () => {
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    Alert.alert('Error', 'No token found');
                    return;
                }

                const response = await fetch(`http://192.168.1.7:3000/user-info?token=${token}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch user info');
                }

                const data = await response;
                console.log('User Info:', data); // Log dữ liệu nhận được từ API
                setUserInfo(data);
            } catch (error) {
                Alert.alert('Error', error.message);
            }
        })();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
                <Text style={styles.userInfoText}>Friends:</Text>
                {userInfo.friends.map((friend, index) => (
                    <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
                ))}
                <Button title="Send Friend Request" onPress={() => Alert.alert('Friend request sent')} />
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location ? location.coords.latitude : 37.78825,
                    longitude: location ? location.coords.longitude : -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={location ? {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                } : undefined}
                showsUserLocation={true}
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        title="You are here"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfo: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    userInfoText: {
        fontSize: 18,
        marginBottom: 10,
    },
    map: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
    },
});

export default HomeScreen;