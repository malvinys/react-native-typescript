import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IBaseTextInput extends TextInputProps {}

const BaseTextInput = (props: IBaseTextInput) => (
  <>
    <TextInput style={[style.input, props.style]} {...props} />
  </>
);

const style = StyleSheet.create({
  input: {
    width: 200,
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
  },
});

export default BaseTextInput;
