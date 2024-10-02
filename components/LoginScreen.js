// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { SERVER_URL } from '@env';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await fetch(`${SERVER_URL}/login`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password })
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 await AsyncStorage.setItem('token', data.token);
//                 navigation.navigate('Home');
//             } else {
//                 Alert.alert('Error', data.message);
//             }
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//             <Button title="Login" onPress={handleLogin} />
//             <Button title="Register" onPress={() => navigation.navigate('Register')} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//     },
// });

// export default LoginScreen;

//mỡi nhất
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { SERVER_URL } from '@env';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const LoginScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await fetch(`${SERVER_URL}/login`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password })
//             });

//             const contentType = response.headers.get('content-type');
//             if (!contentType || !contentType.includes('application/json')) {
//                 const text = await response.text();
//                 throw new Error(`Unexpected response: ${text}`);
//             }

//             const data = await response.json();
//             if (response.ok) {
//                 await AsyncStorage.setItem('token', data.token);
//                 navigation.navigate('Home');
//             } else {
//                 Alert.alert('Error', data.message);
//             }
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Username"
//                 value={username}
//                 onChangeText={setUsername}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />
//             <Button title="Login" onPress={handleLogin} />
//             <Button title="Register" onPress={() => navigation.navigate('Register')} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//     },
//     input: {
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         marginBottom: 20,
//         paddingLeft: 10,
//     },
// });

// export default LoginScreen;




//cũ nhất.
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL, HELLO } from '@env';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            console.log('đã ấn nút login')
            const response = await fetch(`${SERVER_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            console.log(response);
            console.log('chạy api login OK');

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
                console.log(errorData)
            }
            const data = await response.json();
            console.log(data.token)
            await AsyncStorage.setItem('token', data.token);
            console.log('đã lưu token vào asyncstorage');
            Alert.alert('Success', 'Logged in successfully');
            console.log(SERVER_URL);
            navigation.navigate('Home');
        }
        catch (error) {
            console.log('Lỗi login')
            Alert.alert('Error', error.message);
        }
    }


    return (
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={login} />
            <Button title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;
