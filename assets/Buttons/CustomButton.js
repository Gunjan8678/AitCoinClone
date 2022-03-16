import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const CustomButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android') {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.btnContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.textStyles}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 20,
    // borderColor: 'white',
    // borderWidth: 2,
    width: '90%',
  },
  button: {
    // borderRadius: 10,
    backgroundColor: 'transparent',
    padding: 5,
  },
  textStyles: {
    color: '#2196F3',
    fontSize: 15,
  },
});

export default CustomButton;
