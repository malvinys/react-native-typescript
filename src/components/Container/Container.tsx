import React from 'react';
import {View, ViewStyle, ScrollView} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IContainer {
  styleProps?: any;
  children: React.ReactNode;
}

const Container = ({styleProps, children}: IContainer) => (
  <>
    <View style={{...style.container, ...styleProps}}>
      <ScrollView>{children}</ScrollView>
    </View>
  </>
);

interface IStyle {
  container: ViewStyle;
}

const style: IStyle = {
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 16,
  },
};

export default Container;
