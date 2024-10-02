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
//                  2')
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
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         })();

//         (async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`http://172.23.247.78:3000/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }

//                 const data = await response;
//                 console.log('User Info:', data); // Log dữ liệu nhận được từ API
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







// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

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
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         })();

//         (async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }
//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }

//                 const data = await response.json();
//                 console.log('User Info:', data); // Log dữ liệu nhận được từ API
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
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
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
// import { SERVER_URL, HELLO } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }

//                 const data = await response.json();
//                 setUserInfo(data);
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Send Friend Request" onPress={() => Alert.alert('Friend request sent')} />
//             </View>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location ? location.coords.latitude : 37.78825,  ///37.78825
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
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 console.log('api location OK')

//                 // console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 // console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 // console.log(response)

//                 const data = await response.json();
//                 console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
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
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 // console.log('api location OK')

//                 // console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 // console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 // console.log(response)

//                 const data = await response.json();
//                 console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText}>- {friend.username}</Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
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
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 console.log('api location OK')

//                 console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 console.log(response)

//                 const data = await response.json();
//                 console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
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
//                 {selectedFriend && selectedFriend.location && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
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







//thêm mục kết bạn



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button, TextInput, Modal } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [friendUsername, setFriendUsername] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 console.log('api location OK')

//                 console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 console.log(response)

//                 const data = await response.json();
//                 console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const sendFriendRequest = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/send-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendUsername })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setModalVisible(false);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
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
//                 {selectedFriend && selectedFriend.location && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
//                     />
//                 )}
//             </MapView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Nhập tên người bạn muốn kết bạn:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Tên người bạn"
//                         value={friendUsername}
//                         onChangeText={setFriendUsername}
//                     />
//                     <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
//                     <Button title="Hủy" onPress={() => setModalVisible(false)} />
//                 </View>
//             </Modal>
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
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//         width: '80%',
//     },
// });

// export default HomeScreen;







// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button, TextInput, Modal } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [friendUsername, setFriendUsername] = useState('');
//     const [friendEmail, setFriendEmail] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: { 'Content-Type': 'application/json' },
//                     body: JSON.stringify({ token, lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 // console.log('api location OK')

//                 // console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 // console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 // console.log(response)

//                 const data = await response.json();
//                 // console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const sendFriendRequest = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/send-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendUsername, friendEmail })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setModalVisible(false);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
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
//                 {location && location.coords && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//                 {selectedFriend && selectedFriend.location && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
//                     />
//                 )}
//             </MapView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Nhập tên và email người bạn muốn kết bạn:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Tên người bạn"
//                         value={friendUsername}
//                         onChangeText={setFriendUsername}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email người bạn"
//                         value={friendEmail}
//                         onChangeText={setFriendEmail}
//                     />
//                     <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
//                     <Button title="Hủy" onPress={() => setModalVisible(false)} />
//                 </View>
//             </Modal>
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
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//         width: '80%',
//     },
// });

// export default HomeScreen;









// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button, TextInput, Modal } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [friendUsername, setFriendUsername] = useState('');
//     const [friendEmail, setFriendEmail] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);


//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({ lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 // console.log('api location OK')

//                 // console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//                 console.log('Lỗi ở đoạn này')
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 // console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 // console.log('đã fetch user info')
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 // console.log(response)

//                 const data = await response.json();
//                 console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const sendFriendRequest = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/send-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendUsername, friendEmail })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setModalVisible(false);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
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
//                 {location && location.coords && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//                 {selectedFriend && selectedFriend.location && selectedFriend.location.lat && selectedFriend.location.lng && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
//                     />
//                 )}
//             </MapView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Nhập tên và email người bạn muốn kết bạn:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Tên người bạn"
//                         value={friendUsername}
//                         onChangeText={setFriendUsername}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email người bạn"
//                         value={friendEmail}
//                         onChangeText={setFriendEmail}
//                     />
//                     <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
//                     <Button title="Hủy" onPress={() => setModalVisible(false)} />
//                 </View>
//             </Modal>
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
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//         width: '80%',
//     },
// });

// export default HomeScreen;




// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button, TextInput, Modal } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [], friendRequests: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [friendUsername, setFriendUsername] = useState('');
//     const [friendEmail, setFriendEmail] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({ lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//                 // console.log('api location OK')

//                 // console.log('Location hiện tại là:', location.coords.latitude, location.coords.longitude); // Log vị trí hiện tại
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 5000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 // console.log('lấy được token rồi token là:', token)
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 // console.log(response)

//                 const data = await response.json();
//                 // console.log(data)
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const sendFriendRequest = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/send-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendUsername, friendEmail })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setModalVisible(false);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const acceptFriendRequest = async (friendId) => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/accept-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendId })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const rejectFriendRequest = async (friendId) => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/reject-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendId })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
//                 <Text style={styles.userInfoText}>Friend Requests:</Text>
//                 {userInfo.friendRequests && userInfo.friendRequests.length > 0 ? (
//                     userInfo.friendRequests.map((request, index) => (
//                         <View key={index} style={styles.friendRequest}>
//                             <Text style={styles.userInfoText}>{request.username}</Text>
//                             <Button title="Accept" onPress={() => acceptFriendRequest(request._id)} />
//                             <Button title="Reject" onPress={() => rejectFriendRequest(request._id)} />
//                         </View>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friend requests</Text>
//                 )}
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
//                 {location && location.coords && (
//                     <Marker
//                         coordinate={{
//                             latitude: location.coords.latitude,
//                             longitude: location.coords.longitude,
//                         }}
//                         title="You are here"
//                     />
//                 )}
//                 {selectedFriend && selectedFriend.location && selectedFriend.location.lat && selectedFriend.location.lng && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
//                     />
//                 )}
//             </MapView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Nhập tên và email người bạn muốn kết bạn:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Tên người bạn"
//                         value={friendUsername}
//                         onChangeText={setFriendUsername}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email người bạn"
//                         value={friendEmail}
//                         onChangeText={setFriendEmail}
//                     />
//                     <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
//                     <Button title="Hủy" onPress={() => setModalVisible(false)} />
//                 </View>
//             </Modal>
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
//     friendRequest: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '80%',
//         marginBottom: 10,
//     },
//     map: {
//         flex: 1,
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         height: '50%',
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//         width: '80%',
//     },
// });

// export default HomeScreen;




// cập nhật việc chờ lấy được location rồi mới đó render mapview cho các lần đầu tiên login 1 tài khoản
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Alert, Button, TextInput, Modal, ActivityIndicator } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SERVER_URL } from '@env';

// const HomeScreen = () => {
//     const [location, setLocation] = useState(null);
//     const [errorMsg, setErrorMsg] = useState(null);
//     const [userInfo, setUserInfo] = useState({ username: '', friends: [], friendRequests: [] });
//     const [selectedFriend, setSelectedFriend] = useState(null);
//     const [friendUsername, setFriendUsername] = useState('');
//     const [friendEmail, setFriendEmail] = useState('');
//     const [modalVisible, setModalVisible] = useState(false);

//     useEffect(() => {
//         const getLocationAndUpdateServer = async () => {
//             let { status } = await Location.requestForegroundPermissionsAsync();
//             if (status !== 'granted') {
//                 setErrorMsg('Permission to access location was denied');
//                 Alert.alert('Error', 'Permission to access location was denied');
//                 return;
//             }

//             try {
//                 let location = await Location.getCurrentPositionAsync({});
//                 setLocation(location);

//                 const token = await AsyncStorage.getItem('token');
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 await fetch(`${SERVER_URL}/location`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Authorization': `Bearer ${token}`
//                     },
//                     body: JSON.stringify({ lat: location.coords.latitude, lng: location.coords.longitude })
//                 });
//             } catch (error) {
//                 setErrorMsg(error.message);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         const intervalId = setInterval(getLocationAndUpdateServer, 300000); // Cập nhật vị trí mỗi 5 giây

//         return () => clearInterval(intervalId); // Clear interval khi component unmount
//     }, []);

//     useEffect(() => {
//         // const fetchUserInfo = async () => {
//         //     try {
//         //         const token = await AsyncStorage.getItem('token');
//         //         console.log('Lấy được token từ AsyncStorage:', token)
//         //         if (!token) {
//         //             Alert.alert('Error', 'No token found');
//         //             return;
//         //         }

//         //         const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//         //         console.log('fecth user info OK')
//         //         console.log('HomeScreen->fetchUserInfo: response là:', response)
//         //         if (!response.ok) {
//         //             const errorData = await response.json();
//         //             console.log('HomeScreen->fetchUserInfo: errorData là:', errorData);
//         //             throw new Error(errorData.message || 'Failed to fetch user info');
//         //         }
//         //         const data = await response.json();
//         //         console.log('HOMESCREEN: data là:', data)
//         //         setUserInfo(data);
//         //         if (data.location) {
//         //             setLocation({
//         //                 coords: {
//         //                     latitude: data.location.lat,
//         //                     longitude: data.location.lng
//         //                 }
//         //             });
//         //         }
//         //     } catch (error) {
//         //         Alert.alert('Error', error.message);
//         //     }
//         // };

//         // const fetchUserInfo = async () => {
//         //     try {
//         //         const token = await AsyncStorage.getItem('token');
//         //         console.log('Lấy được token từ AsyncStorage:', token);
//         //         if (!token) {
//         //             Alert.alert('Error', 'No token found');
//         //             return;
//         //         }

//         //         const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//         //         console.log('fetch user info OK');
//         //         console.log('HomeScreen->fetchUserInfo: response là:', response);
//         //         if (!response.ok) {
//         //             const errorData = await response.json();
//         //             console.log('HomeScreen->fetchUserInfo: errorData là:', errorData);
//         //             throw new Error(errorData.message || 'Failed to fetch user info');
//         //         }
//         //         const data = await response.json();
//         //         console.log('HOMESCREEN: data là:', data);
//         //         setUserInfo(data);
//         //         if (data.location) {
//         //             setLocation({
//         //                 coords: {
//         //                     latitude: data.location.lat,
//         //                     longitude: data.location.lng
//         //                 }
//         //             });
//         //         }
//         //     } catch (error) {
//         //         console.log('HomeScreen->fetchUserInfo: error là:', error);
//         //         Alert.alert('Error', error.message);
//         //     }
//         // };

//         const fetchUserInfo = async () => {
//             try {
//                 const token = await AsyncStorage.getItem('token');
//                 console.log('Lấy được token từ AsyncStorage:', token);
//                 if (!token) {
//                     Alert.alert('Error', 'No token found');
//                     return;
//                 }

//                 const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
//                 console.log('fetch user info OK');
//                 // console.log('HomeScreen->fetchUserInfo: response là:', response);
//                 if (!response.ok) {
//                     const errorData = await response.json();
//                     // console.log('HomeScreen->fetchUserInfo: errorData là:', errorData);
//                     throw new Error(errorData.message || 'Failed to fetch user info');
//                 }
//                 const data = await response.json();
//                 // console.log('HOMESCREEN: data là:', data);
//                 setUserInfo(data);
//                 if (data.location) {
//                     setLocation({
//                         coords: {
//                             latitude: data.location.lat,
//                             longitude: data.location.lng
//                         }
//                     });
//                 }
//             } catch (error) {
//                 console.log('HomeScreen->fetchUserInfo: error là:', error);
//                 Alert.alert('Error', error.message);
//             }
//         };

//         fetchUserInfo();
//     }, []);

//     const toggleShareLocation = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
//             });
//             const data = await response.json();
//             setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
//             Alert.alert('Success', data.message);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const sendFriendRequest = async () => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/send-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendUsername, friendEmail })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setModalVisible(false);
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const acceptFriendRequest = async (friendId) => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/accept-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendId })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const rejectFriendRequest = async (friendId) => {
//         try {
//             const token = await AsyncStorage.getItem('token');
//             const response = await fetch(`${SERVER_URL}/reject-friend-request`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ token, friendId })
//             });
//             const data = await response.json();
//             Alert.alert('Success', data.message);
//             setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const calculateDistance = (lat1, lon1, lat2, lon2) => {
//         const R = 6371; // Radius of the Earth in km
//         const dLat = (lat2 - lat1) * Math.PI / 180;
//         const dLon = (lon2 - lon1) * Math.PI / 180;
//         const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//             Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
//             Math.sin(dLon / 2) * Math.sin(dLon / 2);
//         const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//         const distance = R * c; // Distance in km
//         return distance;
//     };

//     if (!location) {
//         return (
//             <View style={styles.loadingContainer}>
//                 <ActivityIndicator size="large" color="#0000ff" />
//                 <Text>Loading...</Text>
//             </View>
//         );
//     }

//     return (
//         <View style={styles.container}>
//             <View style={styles.userInfo}>
//                 <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
//                 <Text style={styles.userInfoText}>Friends:</Text>
//                 {userInfo.friends && userInfo.friends.length > 0 ? (
//                     userInfo.friends.map((friend, index) => (
//                         <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
//                             - {friend.username}
//                         </Text>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friends found</Text>
//                 )}
//                 <Button title="Toggle Share Location" onPress={toggleShareLocation} />
//                 <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
//                 {selectedFriend && selectedFriend.location && (
//                     <Text style={styles.userInfoText}>
//                         Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
//                     </Text>
//                 )}
//                 <Text style={styles.userInfoText}>Friend Requests:</Text>
//                 {userInfo.friendRequests && userInfo.friendRequests.length > 0 ? (
//                     userInfo.friendRequests.map((request, index) => (
//                         <View key={index} style={styles.friendRequest}>
//                             <Text style={styles.userInfoText}>{request.username}</Text>
//                             <Button title="Accept" onPress={() => acceptFriendRequest(request._id)} />
//                             <Button title="Reject" onPress={() => rejectFriendRequest(request._id)} />
//                         </View>
//                     ))
//                 ) : (
//                     <Text style={styles.userInfoText}>No friend requests</Text>
//                 )}
//             </View>
//             <MapView
//                 style={styles.map}
//                 initialRegion={{
//                     latitude: location.coords.latitude,
//                     longitude: location.coords.longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 region={{
//                     latitude: location.coords.latitude,
//                     longitude: location.coords.longitude,
//                     latitudeDelta: 0.0922,
//                     longitudeDelta: 0.0421,
//                 }}
//                 showsUserLocation={true}
//             >
//                 <Marker
//                     coordinate={{
//                         latitude: location.coords.latitude,
//                         longitude: location.coords.longitude,
//                     }}
//                     title="You are here"
//                 />
//                 {selectedFriend && selectedFriend.location && selectedFriend.location.lat && selectedFriend.location.lng && (
//                     <Marker
//                         coordinate={{
//                             latitude: selectedFriend.location.lat,
//                             longitude: selectedFriend.location.lng,
//                         }}
//                         title={`${selectedFriend.username} is here`}
//                     />
//                 )}
//             </MapView>
//             <Modal
//                 animationType="slide"
//                 transparent={true}
//                 visible={modalVisible}
//                 onRequestClose={() => {
//                     setModalVisible(!modalVisible);
//                 }}
//             >
//                 <View style={styles.modalView}>
//                     <Text style={styles.modalText}>Nhập tên và email người bạn muốn kết bạn:</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Tên người bạn"
//                         value={friendUsername}
//                         onChangeText={setFriendUsername}
//                     />
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Email người bạn"
//                         value={friendEmail}
//                         onChangeText={setFriendEmail}
//                     />
//                     <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
//                     <Button title="Hủy" onPress={() => setModalVisible(false)} />
//                 </View>
//             </Modal>
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
//     friendRequest: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         width: '80%',
//         marginBottom: 10,
//     },
//     map: {
//         flex: 1,
//         position: 'absolute',
//         bottom: 0,
//         width: '100%',
//         height: '50%',
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//         width: '80%',
//     },
//     loadingContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });

// export default HomeScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button, TextInput, Modal, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL } from '@env';

const HomeScreen = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [userInfo, setUserInfo] = useState({ username: '', friends: [], friendRequests: [] });
    const [selectedFriend, setSelectedFriend] = useState(null);
    const [friendUsername, setFriendUsername] = useState('');
    const [friendEmail, setFriendEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const initialize = async () => {
            try {
                // Lấy token từ AsyncStorage
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    Alert.alert('Error', 'No token found');
                    return;
                }

                // Yêu cầu quyền truy cập vị trí
                let { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    Alert.alert('Error', 'Permission to access location was denied');
                    return;
                }

                // Lấy vị trí hiện tại
                let location = await Location.getCurrentPositionAsync({});
                setLocation(location);

                // Cập nhật vị trí lên máy chủ
                await fetch(`${SERVER_URL}/location`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify({ lat: location.coords.latitude, lng: location.coords.longitude })
                });

                // Lấy thông tin người dùng từ máy chủ
                const response = await fetch(`${SERVER_URL}/user-info?token=${token}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Failed to fetch user info');
                }
                const data = await response.json();
                setUserInfo(data);

                // Cập nhật vị trí nếu có
                if (data.location) {
                    setLocation({
                        coords: {
                            latitude: data.location.lat,
                            longitude: data.location.lng
                        }
                    });
                }

                // Thiết lập interval để cập nhật vị trí mỗi 5 phút
                const intervalId = setInterval(async () => {
                    let location = await Location.getCurrentPositionAsync({});
                    setLocation(location);
                    await fetch(`${SERVER_URL}/location`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ lat: location.coords.latitude, lng: location.coords.longitude })
                    });
                }, 300000); // 5 phút

                return () => clearInterval(intervalId); // Clear interval khi component unmount
            } catch (error) {
                setErrorMsg(error.message);
                Alert.alert('Error', error.message);
            }
        };

        initialize();
    }, []);

    const toggleShareLocation = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/toggle-share-location`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, shareLocation: !userInfo.shareLocation })
            });
            const data = await response.json();
            setUserInfo({ ...userInfo, shareLocation: !userInfo.shareLocation });
            Alert.alert('Success', data.message);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const sendFriendRequest = async () => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/send-friend-request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, friendUsername, friendEmail })
            });
            const data = await response.json();
            Alert.alert('Success', data.message);
            setModalVisible(false);
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const acceptFriendRequest = async (friendId) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/accept-friend-request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, friendId })
            });
            const data = await response.json();
            Alert.alert('Success', data.message);
            setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const rejectFriendRequest = async (friendId) => {
        try {
            const token = await AsyncStorage.getItem('token');
            const response = await fetch(`${SERVER_URL}/reject-friend-request`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token, friendId })
            });
            const data = await response.json();
            Alert.alert('Success', data.message);
            setUserInfo({ ...userInfo, friendRequests: userInfo.friendRequests.filter(id => id !== friendId) });
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c; // Distance in km
        return distance;
    };

    if (!location) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <Text style={styles.userInfoText}>User: {userInfo.username}</Text>
                <Text style={styles.userInfoText}>Friends:</Text>
                {userInfo.friends && userInfo.friends.length > 0 ? (
                    userInfo.friends.map((friend, index) => (
                        <Text key={index} style={styles.userInfoText} onPress={() => setSelectedFriend(friend)}>
                            - {friend.username}
                        </Text>
                    ))
                ) : (
                    <Text style={styles.userInfoText}>No friends found</Text>
                )}
                <Button title="Toggle Share Location" onPress={toggleShareLocation} />
                <Button title="Kết bạn" onPress={() => setModalVisible(true)} />
                {selectedFriend && selectedFriend.location && (
                    <Text style={styles.userInfoText}>
                        Distance to {selectedFriend.username}: {calculateDistance(location.coords.latitude, location.coords.longitude, selectedFriend.location.lat, selectedFriend.location.lng).toFixed(2)} km
                    </Text>
                )}
                <Text style={styles.userInfoText}>Friend Requests:</Text>
                {userInfo.friendRequests && userInfo.friendRequests.length > 0 ? (
                    userInfo.friendRequests.map((request, index) => (
                        <View key={index} style={styles.friendRequest}>
                            <Text style={styles.userInfoText}>{request.username}</Text>
                            <Button title="Accept" onPress={() => acceptFriendRequest(request._id)} />
                            <Button title="Reject" onPress={() => rejectFriendRequest(request._id)} />
                        </View>
                    ))
                ) : (
                    <Text style={styles.userInfoText}>No friend requests</Text>
                )}
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            >
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title="You are here"
                />
                {selectedFriend && selectedFriend.location && selectedFriend.location.lat && selectedFriend.location.lng && (
                    <Marker
                        coordinate={{
                            latitude: selectedFriend.location.lat,
                            longitude: selectedFriend.location.lng,
                        }}
                        title={`${selectedFriend.username} is here`}
                    />
                )}
            </MapView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Nhập tên và email người bạn muốn kết bạn:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên người bạn"
                        value={friendUsername}
                        onChangeText={setFriendUsername}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email người bạn"
                        value={friendEmail}
                        onChangeText={setFriendEmail}
                    />
                    <Button title="Gửi yêu cầu kết bạn" onPress={sendFriendRequest} />
                    <Button title="Hủy" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
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
    friendRequest: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 10,
    },
    map: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '50%',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
        width: '80%',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default HomeScreen;