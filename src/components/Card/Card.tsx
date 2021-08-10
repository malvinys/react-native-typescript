import React from 'react';
import {View, ViewProps, ViewStyle, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface ICard extends ViewProps {
  styleProps?: ViewStyle;
  children?: React.ReactNode;
}

const Card = (props: ICard) => (
  <>
    <View style={[style.card, props.styleProps]} {...props}>
      {props.children}
    </View>
  </>
);

const style = StyleSheet.create({
  card: {
    width: '100%',
    height: 'auto',
    padding: 8,
    borderRadius: 4,
    backgroundColor: Colors.GREY_LIGHT,
  },
});

export default Card;
