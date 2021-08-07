import React from 'react';
import {View, ViewStyle} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IProgressBar {
  progress: string;
  backgroundColor?: string;
  progressBarColor?: string;
  styleProps?: {
    styleProgressBackgroundProps?: any;
    styleProgressBarProps?: any;
  };
}

const ProgressBar = ({
  progress = '0%',
  backgroundColor = Colors.WHITE,
  progressBarColor = Colors.SECONDARY,
  styleProps = {styleProgressBackgroundProps: {}, styleProgressBarProps: {}},
}: IProgressBar) => (
  <>
    <View
      style={{
        backgroundColor,
        ...style.progressBackground,
        ...styleProps.styleProgressBackgroundProps,
      }}>
      <View
        style={{
          width: progress,
          borderColor: progressBarColor,
          ...style.progressBar,
          ...styleProps.styleProgressBarProps,
        }}
      />
    </View>
  </>
);

interface IStyle {
  progressBackground: ViewStyle;
  progressBar: ViewStyle;
}

const style: IStyle = {
  progressBackground: {
    borderRadius: 4,
    width: '100%',
  },
  progressBar: {
    borderRadius: 4,
    borderWidth: 4,
  },
};

export default ProgressBar;
