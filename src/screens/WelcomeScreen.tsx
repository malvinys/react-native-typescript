import React from 'react';
import {Button} from 'react-native';

import Containter from '../components/Container/Container';
import Footer from '../components/Footer/Footer';

interface IWelcomeScreen {
  navigation: any;
}

const WelcomeScreen = ({navigation}: IWelcomeScreen) => {
  return (
    <>
      <Containter />
      <Footer>
        <Button title="Go to Home" onPress={() => navigation.navigate('Tab')} />
      </Footer>
    </>
  );
};

export default WelcomeScreen;
