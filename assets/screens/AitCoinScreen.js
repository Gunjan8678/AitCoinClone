import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AitCoinScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{color: '#000'}}>AitCoinScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default AitCoinScreen;
