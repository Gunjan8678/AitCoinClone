import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DownlineScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={{color: '#000'}}>DownlineScreen</Text>
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

export default DownlineScreen;
