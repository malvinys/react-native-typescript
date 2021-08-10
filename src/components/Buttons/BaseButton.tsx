import React from 'react';
import {Button, ButtonProps, View, ViewStyle, StyleSheet} from 'react-native';

interface IBaseButton extends ButtonProps {
  styleProps?: ViewStyle;
}

const BaseButton = (props: IBaseButton) => (
  <>
    <View style={[style.button, props.styleProps]}>
      <Button {...props} />
    </View>
  </>
);

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 'auto',
  },
});

export default BaseButton;
