// src/screens/RegisterScreen.jsx
import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { Video } from 'expo-av';

const RegisterScreen = ({ navigation }) => {
    // Animaciones para el botón
    const scaleAnim = new Animated.Value(1);
    const shadowAnim = new Animated.Value(0.2);

    const handlePressIn = () => {
        Animated.timing(scaleAnim, {
            toValue: 0.95,
            duration: 100,
            useNativeDriver: true,
        }).start();
        Animated.timing(shadowAnim, {
            toValue: 0.3,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
        Animated.timing(shadowAnim, {
            toValue: 0.2,
            duration: 100,
            useNativeDriver: true,
        }).start();
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Video
                source={{uri: 'https://drive.google.com/file/d/1-NVqAXn3wtWeyOeo2T13I34e78j1xKsX/view?usp=sharing'}}
                style={styles.backgroundVideo}
                isMuted={true}
                isLooping
                shouldPlay
                resizeMode="cover"
            />
            <View style={styles.card}>
                <Text style={styles.title}>Turismap</Text>
                <Image source={require('../../assets/Turismap Logo Minimalist.png')} style={styles.logo} />
                <TextInput placeholder="Username" style={styles.input} placeholderTextColor="#f8f9fa" />
                <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" placeholderTextColor="#f8f9fa" />
                <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} placeholderTextColor="#f8f9fa" />
                <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true} placeholderTextColor="#f8f9fa" />
                <Text style={styles.passwordInfo}>
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </Text>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={styles.button}
                >
                    <Animated.View
                        style={[
                            styles.buttonContent,
                            {
                                transform: [{ scale: scaleAnim }],
                                shadowOpacity: shadowAnim,
                            },
                        ]}
                    >
                        <Text style={styles.buttonText}>Sign in</Text>
                    </Animated.View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
                    <Text style={styles.loginText}>Log in</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
    },
    card: {
        backgroundColor: '#343a4011',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        color: '#f8f9fa',
    },
    logo: {
        width: '25%',
        height: undefined,
        aspectRatio: 1,
        marginBottom: 20,
    },
    input: {
        backgroundColor: 'transparent',       
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        borderRadius: 15,
        width: '100%',
        padding: 10,
        marginBottom: 10,
        color: '#f8f9fa',
    },
    passwordInfo: {
        color: '#f8f9fa',
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#fff',
    },
    buttonContent: {
        backgroundColor: 'transparent', 
        paddingVertical: 14,
        paddingHorizontal: 28,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        elevation: 5,
    },
    buttonText: {
        color: '#000',
        fontFamily: 'Segoe UI',
        fontWeight: 'bold',
        fontSize: 18,
    },
    loginButton: {
        marginTop: 10,
    },
    loginText: {
        color: '#6c757d',
        fontSize: 16,
    },
});

export default RegisterScreen;
