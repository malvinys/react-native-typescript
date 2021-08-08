import React from 'react';
import {useSelector} from 'react-redux';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

import {CORE_SELECTOR} from '../../models/CoreModel';
import Colors from '../../config/Theme/Colors';

interface ILoader {}

const Loader = ({}: ILoader) => {
  const CORE = useSelector(CORE_SELECTOR);
  console.log('CORE.isLoading', CORE.isLoading);

  return (
    <Modal transparent={false} animationType="fade" visible={CORE.isLoading}>
      <TouchableOpacity activeOpacity={1} style={style.loaderContainer}>
        <Text style={{...style.loaderText}}>Loading...</Text>
      </TouchableOpacity>
    </Modal>
  );
};

const {width, height} = Dimensions.get('window');

const style = StyleSheet.create({
  loaderContainer: {
    height,
    width,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loaderText: {
    width: '100%',
    height: 60,
    borderRadius: 6,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: Colors.TEXT,
  },
});

export default Loader;
