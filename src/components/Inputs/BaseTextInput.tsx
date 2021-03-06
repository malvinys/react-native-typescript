import React from 'react';
import {TextInput, TextInputProps, TextStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IBaseTextInput extends TextInputProps {
  styleProps?: TextStyle;
}

const BaseTextInput = (props: IBaseTextInput) => (
  <>
    <TextInput style={[style.input, props.styleProps]} {...props} />
  </>
);

const style = StyleSheet.create({
  input: {
    width: '100%',
    padding: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
    fontSize: 16,
  },
});

export default BaseTextInput;
