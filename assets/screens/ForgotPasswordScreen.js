import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.bgImg}
        source={require('../images/star.jpg')}
        resizeMode="cover">
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.image} source={require('../images/AZY.png')} />
        </View>
        <View style={styles.logContainer}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Forgot Password
          </Text>
          <View style={styles.input}>
            <Text style={{color: 'white', fontSize: 15}}>
              Enter your email for OTP
            </Text>
            <TextInput
              style={{
                backgroundColor: '#312e81',
                borderRadius: 10,
                height: 30,
                color: 'white',
                padding: 25,
                marginTop: 10,
                fontWeight: 'bold',
              }}
              placeholder="Enter Your Email"
              placeholderTextColor="white"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '90%',
            }}>
            <Button
              title="Login Here"
              type="clear"
              titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#3b82f6',
                width: Dimensions.get('window').width / 3,
                paddingVertical: 10,
                marginTop: 10,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Send Password
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  bgImg: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    // backgroundColor: '#ccc',
    margin: 20,
    width: Dimensions.get('window').width / 2.6,
    height: Dimensions.get('window').width / 2.6,
  },
  logContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30,
    margin: 20,
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 20,
    width: '85%',
    // height: '50%',
  },
  input: {
    marginTop: 20,
    width: '90%',
    paddingVertical: 20,
    borderColor: 'black',
    borderWidth: 2,
    color: 'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default ForgotPasswordScreen;
