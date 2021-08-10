import React from 'react';
import {View, ViewProps, ViewStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IProgressBar extends ViewProps {
  progress: string;
  styleProps?: {
    styleProgressBackground?: ViewStyle;
    styleProgressBar?: ViewStyle;
  };
}

const ProgressBar = (props: IProgressBar) => {
  const progress = props.progress || '0%';
  const styleProgressBackground =
    props?.styleProps?.styleProgressBackground || {};
  const styleProgressBar = props?.styleProps?.styleProgressBar || {};

  return (
    <>
      <View
        style={[style.progressBackground, styleProgressBackground]}
        {...props}>
        <View
          style={[{width: progress}, style.progressBar, styleProgressBar]}
        />
      </View>
    </>
  );
};

const style = StyleSheet.create({
  progressBackground: {
    borderRadius: 4,
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
  progressBar: {
    borderRadius: 4,
    borderWidth: 4,
    borderColor: Colors.SECONDARY,
  },
});

export default ProgressBar;
