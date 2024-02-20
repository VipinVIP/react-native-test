import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function HomePageHeader() {
  return (
    <View style={styles.headerContrainer}>
      <Image source={require('../assets/camera.png')} style={styles.icon} />
      <Text style={styles.text}>Instagram</Text>
      <Image source={require('../assets/send.png')} style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 80,
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Cochin',
  },
  icon: {
    width: 35,
    height: 35,
    tintColor: '#000000',
  },
});

export default HomePageHeader;
