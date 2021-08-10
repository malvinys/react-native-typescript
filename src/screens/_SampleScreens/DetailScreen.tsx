import React from 'react';
import {Button} from 'react-native';

import Containter from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';

interface IDetailScreen {
  navigation: any;
}

const DetailScreen = ({navigation}: IDetailScreen) => {
  return (
    <>
      <Containter />
      <Footer>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </Footer>
    </>
  );
};

export default DetailScreen;
