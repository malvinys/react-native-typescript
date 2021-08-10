import React from 'react';
import {View, ViewProps, ViewStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface ILine extends ViewProps {
  styleProps?: ViewStyle;
}

const Line = (props: ILine) => (
  <>
    <View style={[style.line, props.styleProps]} {...props} />
  </>
);

const style = StyleSheet.create({
  line: {
    borderColor: Colors.LINE,
    borderWidth: 0.5,
  },
});

export default Line;
