import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {Picker, PickerProps} from '@react-native-picker/picker';

import Colors from '../../config/Theme/Colors';

interface IDropDownInput extends PickerProps {
  styleProps?: ViewStyle;
  value: any;
  options: {id: any; name: string}[];
  onChange: any;
}

const DropDownInput = (props: IDropDownInput) => {
  const {value, options, onChange, styleProps} = props;

  return (
    <>
      <View style={[style.container, styleProps]}>
        <Picker
          style={style.dropDown}
          mode="dialog"
          selectedValue={value}
          onValueChange={itemValue => onChange(itemValue)}>
          {options.map(item => (
            <Picker.Item label={item.name} value={item.id} key={item.id} />
          ))}
        </Picker>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    margin: 0,
    padding: 0,
    paddingHorizontal: 0,
    borderRadius: 4,
    color: Colors.BLACK,
    backgroundColor: Colors.WHITE,
  },
  dropDown: {
    width: '100%',
    backgroundColor: Colors.WHITE,
  },
});

export default DropDownInput;
