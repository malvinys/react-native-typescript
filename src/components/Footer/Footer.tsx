import React from 'react';
import {View, StyleSheet} from 'react-native';

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

const style = StyleSheet.create({
  footer: {},
});

export default Footer;
