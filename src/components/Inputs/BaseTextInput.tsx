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
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    fontSize: 16,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
  },
});

export default BaseTextInput;
