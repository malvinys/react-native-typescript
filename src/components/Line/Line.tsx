import React from 'react';
import {View, ViewStyle} from 'react-native';

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

interface IStyle {
  line: ViewStyle;
}

const style: IStyle = {
  line: {},
};

export default Line;
