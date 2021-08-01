import React from 'react';
import {View, ViewStyle} from 'react-native';

import Colors from '../../config/theme/Colors';

interface IContainer {
  children: React.ReactNode;
}

const Container = ({children}: IContainer) => (
  <View style={style.container}>{children}</View>
);

interface IStyle {
  container: ViewStyle;
}

const style: IStyle = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
};

export default Container;
