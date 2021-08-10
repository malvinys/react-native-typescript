import React from 'react';
import {
  Image,
  ImageStyle,
  View,
  ViewProps,
  ViewStyle,
  StyleSheet,
} from 'react-native';

import Colors from '../../../config/Theme/Colors';

interface IImageIcon extends ViewProps {
  iconSource: any;
  styleProps?: {
    styleContainer?: ViewStyle;
    styleContent?: ImageStyle;
  };
}

const ImageIcon = (props: IImageIcon) => {
  const iconSource = props.iconSource;
  const styleContainer = props?.styleProps?.styleContainer || {};
  const styleContent = props?.styleProps?.styleContent || {};

  return (
    <>
      <View style={[style.imageIconContainer, styleContainer]} {...props}>
        <Image
          source={iconSource}
          style={[style.imageIconContent, styleContent]}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  imageIconContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: Colors.SECONDARY,
  },
  imageIconContent: {
    height: 26,
    width: 26,
    tintColor: Colors.WHITE,
  },
});

export default ImageIcon;
