import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <Text style={{color: 'black'}}>HomeScreen</Text>
      <Button title="Earning" />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
