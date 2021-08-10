import React from 'react';
import {View, ViewProps, ViewStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface IBaseCard extends ViewProps {
  styleProps?: ViewStyle;
  children?: React.ReactNode;
}

const BaseCard = (props: IBaseCard) => (
  <>
    <View style={[style.baseCard, props.styleProps]} {...props}>
      {props.children}
    </View>
  </>
);

const style = StyleSheet.create({
  baseCard: {
    width: '100%',
    height: 'auto',
    padding: 18,
    borderRadius: 4,
    backgroundColor: Colors.BACKGROUND_TAB,
  },
});

export default BaseCard;
