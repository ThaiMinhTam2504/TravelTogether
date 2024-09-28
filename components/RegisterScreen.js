// import React, { useState } from "react";
// import { View, TextInput, Button, Alert } from 'react-native'


// const RegisterScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     const register = async () => {
//         try {
//             const response = await fetch('http://192.168.1.7:3000/register', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });

//             const responseText = await response.text(); // Lấy nội dung phản hồi dưới dạng văn bản
//             console.log('Response Text:', responseText);


//             if (!response.ok) {
//                 console.log('1')
//                 const errorData = await response.json();
//                 console.error('HTTP Status:', response.status);
//                 console.error('Response Data', errorData);
//                 throw new Error(`Network response was not ok: ${response.status}`);

//             }
//             console.log('2')
//             const data = JSON.parse(responseText);
//             console.log('2.1')
//             console.log('Response Data:', data);
//             console.log('2.2')
//             Alert.alert('Success', 'User registered successfully');
//             console.log('2.3')
//             navigation.navigate('Login')
//         } catch (error) {
//             console.log('3')
//             Alert.alert('Error', error.message)
//         }
//     };

//     return (
//         <View>
//             <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
//             <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
//             <Button title="Register" onPress={register} />
//         </View>
//     )
// }

// export default RegisterScreen











// import React, { useState } from "react";
// import { View, TextInput, Button, Alert } from 'react-native';
// import { SERVER_URL, HELLO } from '@env';

// const RegisterScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const register = async () => {
//         try {
//             const response = await fetch(`${SERVER_URL}/register`, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ username, password })
//             });
//             console.log('chạy api register OK');

//             if (!response.ok) {
//                 console.log('1');
//                 const errorData = await response.json();
//                 console.error('HTTP Status:', response.status);
//                 console.error('Response Data:', errorData);
//                 throw new Error(`Network response was not ok: ${response.status}`);
//             }

//             console.log('2');
//             const data = await response;
//             console.log('2.1');
//             console.log('Response Data:', data);
//             console.log('2.2');
//             Alert.alert('Success', data.message || 'User registered successfully');
//             console.log('2.3');
//             navigation.navigate('Login');
//         } catch (error) {
//             console.log('3');
//             console.log(`${SERVER_URL}/register`);
//             console.log(HELLO);
//             Alert.alert('Error', error.message);
//         }
//     };

//     return (
//         <View>
//             <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
//             <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
//             <Button title="Register" onPress={register} />
//             <Button title="Go back" onPress={() => navigation.navigate('Login')} />
//         </View>
//     );
// };

// export default RegisterScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
// import { SERVER_URL } from '@env';

// const RegisterScreen = ({ navigation }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');

//     const handleRegister = async () => {
//         try {
//             const response = await fetch(`${SERVER_URL}/register`, {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ username, password, name, email, phone })
//             });
//             const data = await response.json();
//             if (response.ok) {
//                 Alert.alert('Success', data.message);
//                 navigation.navigate('Login');
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
//             <TextInput
//                 style={styles.input}
//                 placeholder="Name"
//                 value={name}
//                 onChangeText={setName}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Phone"
//                 value={phone}
//                 onChangeText={setPhone}
//             />
//             <Button title="Register" onPress={handleRegister} />
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

// export default RegisterScreen;

import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SERVER_URL } from '@env';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = async () => {
        try {
            const response = await fetch(`${SERVER_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, name, email, phone })
            });
            const data = await response.json();
            if (response.ok) {
                Alert.alert('Success', data.message);
                navigation.navigate('Login');
            } else {
                Alert.alert('Error', data.message);
            }
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingLeft: 10,
    },
});

export default RegisterScreen;