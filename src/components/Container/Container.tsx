import React from 'react';
import {View, ViewProps, ViewStyle, ScrollView, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IContainer extends ViewProps {
  styleProps?: ViewStyle;
  children?: React.ReactNode;
}

const Container = (props: IContainer) => (
  <>
    <View style={[style.container, props.styleProps]} {...props}>
      <ScrollView>{props.children}</ScrollView>
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
