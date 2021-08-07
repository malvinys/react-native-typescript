import React from 'react';
import {View, ViewStyle} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IFooter {
  backgroundColor?: string;
  styleProps?: any;
  children: React.ReactNode;
}

const Footer = ({
  backgroundColor = Colors.BACKGROUND,
  styleProps,
  children,
}: IFooter) => (
  <>
    <View style={{backgroundColor, ...style.footer, ...styleProps}}>
      {children}
    </View>
  </>
);

interface IStyle {
  footer: ViewStyle;
}

const style: IStyle = {
  footer: {},
};

export default Footer;
