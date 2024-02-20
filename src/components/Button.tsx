import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const ButtonComponent = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Press Here</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default ButtonComponent;
