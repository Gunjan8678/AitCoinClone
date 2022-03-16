import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../Buttons/CustomButton';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const NewWalletScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.bgImage}
        source={require('../images/star.jpg')}>
        <View
        //   style={{
        //     // justifyContent: 'center',
        //     // backgroundColor: 'black',
        //     // backgroundWidth: 2,
        //   }}
        >
          <Image
            style={{
              // marginTop: 60,
              paddingTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              width: 130,
              height: 130,
              marginBottom: 10,
            }}
            source={require('../images/AZY.png')}
          />
        </View>
        <ScrollView>
          <View style={styles.container}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: 'bold',
                marginBottom: 20,
              }}>
              Create a new wallet
            </Text>
            <View style={{width: '100%'}}>
              <View style={styles.inputContainer}>
                <Icon name="user" size={20} color="#fff" />

                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Referral ID"
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicon name="mail" size={20} color="#fff" />

                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Email ID"
                />
              </View>
              <View style={styles.inputContainer}>
                <Ionicon name="key" size={20} color="#fff" />

                <TextInput
                  style={styles.textInput}
                  color="white"
                  secureTextEntry={true}
                  placeholderTextColor="white"
                  placeholder=" ***** "
                />
              </View>
              <View style={styles.inputContainer}>
                <Entypo name="lock" size={20} color="#fff" />

                <TextInput
                  style={styles.textInput}
                  secureTextEntry={true}
                  placeholderTextColor="white"
                  placeholder=" ***** "
                />
              </View>
              <View style={styles.inputContainer}>
                <Entypo name="user" size={20} color="#fff" />

                <TextInput
                  style={styles.textInput}
                  placeholderTextColor="white"
                  placeholder="Full Name"
                />
              </View>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{fontSize: 18}}
                  placeholderTextColor="white"
                  placeholder=" AFGANISTAN "
                />
              </View>
            </View>
            <View style={{width: '100%'}}>
              <CustomButton>LOGIN HERE</CustomButton>
            </View>

            <TouchableOpacity>
              <View
                style={{
                  marginVertical: 20,
                  borderColor: 'white',
                  borderwidth: 2,
                  padding: 10,
                  borderRadius: 5,
                  backgroundColor: '#3b82f6',
                }}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  Create New Wallet
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // color: '#022266',
  },
  container: {
    backgroundColor: 'black',
    opacity: 0.8,
    borderRadius: 10,
    width: '95%',
    // justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: '#3730a3',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 5,
    width: '100%',
  },
  textInput: {width: '90%', padding: 5},
});

export default NewWalletScreen;
