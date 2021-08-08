import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface ILine {
  color?: string;
  width?: number;
  styleProps?: any;
}

const Line = ({color = Colors.LINE, width = 0.5, styleProps}: ILine) => (
  <>
    <View
      style={{
        borderColor: color,
        borderWidth: width,
        ...style.line,
        ...styleProps,
      }}
    />
  </>
);

const style = StyleSheet.create({
  line: {},
});

export default Line;
