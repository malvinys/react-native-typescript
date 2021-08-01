import React from 'react';
import {Button} from 'react-native';

import Containter from '../components/Container/Container';

interface iDetailScreen {
  navigation: any;
}

const DetailScreen = ({navigation}: iDetailScreen) => {
  return (
    <Containter>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </Containter>
  );
};

export default DetailScreen;
