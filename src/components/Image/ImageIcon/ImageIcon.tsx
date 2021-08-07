import React from 'react';
import {View, ViewStyle, Image, ImageStyle} from 'react-native';

import Colors from '../../../config/Theme/Colors';

interface IImageIcon {
  iconSource: any;
  color?: string;
  backgroundColor?: string;
  styleProps?: {
    styleContainerProps?: any;
    styleContentProps?: any;
  };
}

const ImageIcon = ({
  iconSource,
  backgroundColor = Colors.SECONDARY,
  color = Colors.WHITE,
  styleProps = {styleContainerProps: {}, styleContentProps: {}},
}: IImageIcon) => (
  <>
    <View
      style={{
        backgroundColor,
        ...style.imageIconContainer,
        ...styleProps.styleContainerProps,
      }}>
      <Image
        source={iconSource}
        style={{
          tintColor: color,
          ...style.imageIconContent,
          ...styleProps.styleContentProps,
        }}
        resizeMode="contain"
      />
    </View>
  </>
);

interface IStyle {
  imageIconContainer: ViewStyle;
  imageIconContent: ImageStyle;
}

const style: IStyle = {
  imageIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  imageIconContent: {
    height: 26,
    width: 26,
  },
};

export default ImageIcon;