import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Button,
  TextInput,
  Text,
  Keyboard,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../Buttons/CustomButton';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      {/* <ScrollView> */}
      <ImageBackground
        style={styles.bgImg}
        source={require('../images/star.jpg')}
        resizeMode="cover">
        <ScrollView>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <Image style={styles.image} source={require('../images/AZY.png')} />
          </View>

          <View style={styles.logContainer}>
            <Text style={styles.headingStyle}>LOG IN</Text>
            <View style={styles.input}>
              <View
                style={{
                  borderRadius: 10,
                  flexDirection: 'row',
                  backgroundColor: '#312e81',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <Ionicon
                  name={Platform.select({
                    ios: 'ios-person',
                    android: 'md-person',
                  })}
                  size={20}
                  color="#fff"
                />
                <TextInput
                  style={{
                    width: '87%',
                    fontSize: 12,
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                    fontWeight: 'bold',
                  }}
                  selectionColor="white"
                  placeholder="Enter your email"
                  placeholderTextColor="white"
                  // keysboardType="numeric"
                />
              </View>

              <View
                style={{
                  borderRadius: 10,
                  flexDirection: 'row',
                  backgroundColor: '#312e81',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                }}>
                <Ionicon name="key" size={20} color="#fff" />

                <TextInput
                  sectionColor="white"
                  style={{
                    borderRadius: 10,
                    fontSize: 12,
                    fontWeight: 'bold',

                    width: '80%',
                    paddingVertical: 5,
                    paddingHorizontal: 7,
                  }}
                  placeholder="Password"
                  secureTextEntry={true}
                  placeholderTextColor="white"
                />
                <Ionicon name="eye-off" size={20} color="#fff" />
              </View>
            </View>

            <CustomButton>FORGOT PASSWORD?</CustomButton>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: '#3b82f6',
                  width: Dimensions.get('window').width / 3,
                  paddingVertical: 10,
                  marginTop: 20,
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>LOGIN</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    // height: '100%',
  },
  bgImg: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    // backgroundColor: '#ccc',
    margin: 20,
    width: 130,
    height: 130,
    // width: Dimensions.get('window').width / 3,
    // height: Dimensions.get('window').width / 3,
  },
  logContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30,
    margin: 20,
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 20,
    width: '90%',
    // height: '50%',
  },
  input: {
    width: '90%',
    paddingVertical: 20,
    // borderColor: 'black',
    marginVertical: 5,
    // borderWidth: 2,
    color: 'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headingStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textInput: {
    height: 30,
    width: '80%',
    color: 'white',
    padding: 20,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
