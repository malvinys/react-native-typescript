import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IContainer {
  styleProps?: any;
  children?: React.ReactNode;
}

const Container = ({styleProps, children}: IContainer) => (
  <>
    <View style={{...style.container, ...styleProps}}>
      <ScrollView>{children}</ScrollView>
    </View>
  </>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 16,
  },
});

export default Container;
