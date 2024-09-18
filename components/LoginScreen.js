import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        try {
            const response = await fetch('http://192.168.1.7:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            const data = await response.json();
            await AsyncStorage.setItem('token', data.token);
            Alert.alert('Success', 'Logged in successfully');
            navigation.navigate('Home');
        }
        catch (error) {
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