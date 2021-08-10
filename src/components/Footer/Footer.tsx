import React from 'react';
import {View, ViewProps, ViewStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IFooter extends ViewProps {
  styleProps?: ViewStyle;
  children?: React.ReactNode;
}

const Footer = (props: IFooter) => (
  <>
    <View style={[style.footer, props.styleProps]} {...props}>
      {props.children}
    </View>
  </>
);

const style = StyleSheet.create({
  footer: {
    backgroundColor: Colors.BACKGROUND,
  },
});

export default Footer;
