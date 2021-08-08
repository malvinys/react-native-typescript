import React from 'react';
import {View, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

interface ICard {
  backgroundColor?: string;
  styleProps?: any;
  children: React.ReactNode;
}

const Card = ({
  backgroundColor = Colors.GREY_LIGHT,
  styleProps,
  children,
}: ICard) => (
  <>
    <View style={{backgroundColor, ...style.card, ...styleProps}}>
      {children}
    </View>
  </>
);

const style = StyleSheet.create({
  card: {
    width: '100%',
    height: 'auto',
    padding: 8,
    borderRadius: 4,
  },
});

export default Card;
