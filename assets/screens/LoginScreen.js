import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Button,
  TextInput,
  Text,
  Keyboard,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <View style={styles.screenContainer}>
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
              fontSize: 18,
            }}>
            LOG IN
          </Text>
          <View style={styles.input}>
            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#312e81',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
              }}>
              <Ionicon name="mail" size={20} color="#fff" />
              <TextInput
                style={{
                  // borderColor: 'white',
                  // borderWidth: 2,
                  // borderRadius: 10,
                  height: 30,
                  width: '90%',
                  color: 'white',
                  padding: 20,
                  // marginVertical: 20,
                  fontWeight: 'bold',
                }}
                placeholder="Enter Your Email"
                placeholderTextColor="white"
                keyboardType="numeric"
              />
            </View>

            <View
              style={{
                borderRadius: 10,
                flexDirection: 'row',
                backgroundColor: '#312e81',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicon name="key" size={20} color="#fff" />

              <TextInput
                sectionColor="white"
                style={{
                  // borderColor: 'white',
                  // borderWidth: 2,
                  color: 'white',
                  backgroundColor: '#312e81',
                  borderRadius: 10,
                  fontWeight: 'bold',
                  height: 30,
                  width: '80%',
                  padding: 20,
                }}
                placeholder="password"
                secureTextEntry={true}
                placeholderTextColor="white"
              />
              <Ionicon name="eye-off" size={20} color="#fff" />
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-start',
              marginBottom: 20,
              width: '90%',
            }}>
            <View>
              <Button
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
                title="Forgot Password?"
                type="clear"
                titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
              />
            </View>
            <View>
              <Button title="Don't have an account? Create" />
            </View>
          </View>
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  bgImg: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    // backgroundColor: '#ccc',
    margin: 20,
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
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
    width: '90%',
    paddingVertical: 20,
    // borderColor: 'black',
    marginVertical: 10,
    // borderWidth: 2,
    color: 'white',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default LoginScreen;
