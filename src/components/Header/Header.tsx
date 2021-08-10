import React from 'react';
import {
  Text,
  TextStyle,
  View,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import Colors from '../../config/Theme/Colors';
import Constant from '../../config/Constant/Constant';

interface IHeader extends ViewProps {
  title?: string;
  styleProps?: {
    styleContainer?: ViewStyle;
    styleContent?: TextStyle;
  };
}

const Header = (props: IHeader) => {
  const title = props.title || Constant.APP_NAME;
  const styleContainer = props?.styleProps?.styleContainer || {};
  const styleContent = props?.styleProps?.styleContent || {};

  return (
    <>
      <View style={[style.headerContainer, styleContainer]} {...props}>
        <Text style={[style.headerTitle, styleContent]}>{title}</Text>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: Colors.BACKGROUND,
  },
  headerTitle: {
    fontSize: 16,
    color: Colors.TEXT,
  },
});

export default Header;
