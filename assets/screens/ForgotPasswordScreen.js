import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../Buttons/CustomButton';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.screen}>
      <ImageBackground
        style={styles.bgImg}
        source={require('../images/star.jpg')}
        resizeMode="cover">
        <ScrollView style={{width: '90%'}}>
          <View
            style={{
              // borderColor: '#fff',
              // borderWidth: 1,
              marginVertical: 40,
              alignItems: 'center',
            }}>
            <Image
              style={styles.image}
              source={require('../images/AZY.png')}
              resizeMode="cover"
            />
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
                  color: 'white',
                  padding: 5,
                  marginTop: 10,
                  fontWeight: 'bold',
                }}
                placeholder="Enter Your Email"
                // placeholderTextColor="white"
                keyboardType="numeric"
              />
            </View>

            <CustomButton>LOGIN HERE</CustomButton>

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
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}>
                  Send Password
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    width: 130,
    height: 130,
    // width: Dimensions.get('window').width / 2,
    // height: Dimensions.get('window').width / 2,
  },
  logContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 20,
    marginVertical: 20,
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 20,
    width: '100%',
  },
  input: {
    marginVertical: 10,
    width: '90%',
    paddingVertical: 10,
    color: 'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default ForgotPasswordScreen;
