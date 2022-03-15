import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EarningScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{color: '#000'}}>EarningScreen</Text>
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

export default EarningScreen;
