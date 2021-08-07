import React from 'react';
import {View, ViewStyle, Text, TextStyle} from 'react-native';

import Colors from '../../config/Theme/Colors';
import Constant from '../../config/Constant/Constant';

interface IHeader {
  title?: string;
  titleColor?: string;
  backgroundColor?: string;
  styleProps?: {
    styleContainerProps?: any;
    styleContentProps?: any;
  };
}

const Header = ({
  title = Constant.APP_NAME,
  titleColor = Colors.TEXT,
  backgroundColor = Colors.BACKGROUND,
  styleProps = {styleContainerProps: {}, styleContentProps: {}},
}: IHeader) => (
  <>
    <View
      style={{
        backgroundColor,
        ...style.headerContainer,
        ...styleProps.styleContainerProps,
      }}>
      <Text
        style={{
          color: titleColor,
          ...style.headerTitle,
          ...styleProps.styleContentProps,
        }}>
        {title}
      </Text>
    </View>
  </>
);

interface IStyle {
  headerContainer: ViewStyle;
  headerTitle: TextStyle;
}

const style: IStyle = {
  headerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 16,
  },
};

export default Header;
