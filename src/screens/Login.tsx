import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import ButtonComponent from '../components/Button';
function Login() {
  return (
    <View style={styles.layout}>
      <TextInput
        style={styles.input}
        placeholder="UserName"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text style={styles.linkText}>Forgot password</Text>
      <ButtonComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    padding: 40,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Login;
