import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const Input = ({onChangeText, iconPosition, icon, style, value, label}) => {
  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === 'left') {
        return 'row';
      } else if (iconPosition === 'right') {
        return 'row-reverse';
      }
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View style={[styles.wrapper, {flexDirection: getFlexDirection()}]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );
};

export default Input;
