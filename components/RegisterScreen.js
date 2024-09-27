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











import React, { useState } from "react";
import { View, TextInput, Button, Alert } from 'react-native';
import { SERVER_URL, HELLO } from '@env';

const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            const response = await fetch(`${SERVER_URL}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            console.log('chạy api register OK');

            if (!response.ok) {
                console.log('1');
                const errorData = await response.json();
                console.error('HTTP Status:', response.status);
                console.error('Response Data:', errorData);
                throw new Error(`Network response was not ok: ${response.status}`);
            }

            console.log('2');
            const data = await response;
            console.log('2.1');
            console.log('Response Data:', data);
            console.log('2.2');
            Alert.alert('Success', data.message || 'User registered successfully');
            console.log('2.3');
            navigation.navigate('Login');
        } catch (error) {
            console.log('3');
            console.log(`${SERVER_URL}/register`);
            console.log(HELLO);
            Alert.alert('Error', error.message);
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={register} />
            <Button title="Go back" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

export default RegisterScreen;