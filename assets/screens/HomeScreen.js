import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const HomeScreen = () => {
  return (
    <View style={{marginVertical: 20}}>
      <Text>HomeScreen</Text>

      <View
        style={{
          flexDirection: 'row',
          marginVertical: 10,
          justifyContent: 'space-evenly',
        }}>
        {/* Ait Price */}
        <View style={styles.topContainers}>
          <Text>Ait Price</Text>
        </View>
        {/* Ait Price close */}
        {/* Withdrawl Balance */}
        <View style={styles.topContainers}>
          <Text>Withdrawl Balance</Text>
        </View>
        {/* Withdrawl balance close */}
      </View>

      {/* Farming Amount */}
      <View style={styles.container}>
        <Text>Farming Amount</Text>
      </View>
      {/* Farming Amount Close */}

      {/* APY */}
      <View style={styles.container}>
        <Text>APY</Text>
      </View>
      {/* APY Close */}

      {/* Member Business */}
      <View style={styles.container}>
        <Text>Member Business</Text>

        {/* Table Item-1 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>Name</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>name</Text>
          </View>
        </View>
        {/* Table Item-1 inside flexbox */}

        {/* Table Item-2 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>Email</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>email</Text>
          </View>
        </View>
        {/* Table Item-2 inside flexbox */}

        {/* Table Item-3 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>Mobile</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>mobile</Text>
          </View>
        </View>
        {/* Table Item-3 inside flexbox */}

        {/* Table Item-4 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>Country</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>country</Text>
          </View>
        </View>
        {/* Table Item-4 inside flexbox */}

        {/* Table Item-5 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>TRC20 Address</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>address</Text>
          </View>
        </View>
        {/* Table Item-5 inside flexbox */}

        {/* Table Item-6 inside flexbox */}
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'blue',
            borderWidth: 1,
          }}>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '40%'}}>
            <Text>Date of Joining</Text>
          </View>
          <View style={{borderWidth: 1, borderColor: 'yellow', width: '60%'}}>
            <Text>date</Text>
          </View>
        </View>
        {/* Table Item-6 inside flexbox */}
      </View>
      {/* Member Business Close */}

      {/* AitCoin Link */}
      <View style={styles.container}>
        <Text>Link here</Text>
      </View>
      {/* AitCoin Link Close */}

      {/* Social Media Link */}
      <View style={styles.container}>
        <Text>Social Media Link</Text>
        <View>
          <Entypo name="facebook-with-circle" />
        </View>
      </View>
      {/* Social Media Link Close */}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainers: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '45%',
    marginHorizontal: 10,
  },
  container: {
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default HomeScreen;
