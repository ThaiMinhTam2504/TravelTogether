import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SERVER_URL, HELLO } from '@env';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const response = await fetch(`${SERVER_URL}/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
            console.log('chạy api login OK');

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            await AsyncStorage.setItem('token', data.token);
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