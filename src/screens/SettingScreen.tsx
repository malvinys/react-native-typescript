import React from 'react';
import {Button} from 'react-native';

import Container from '../components/Container/Container';
import Footer from '../components/Footer/Footer';

interface ISettingScreen {
  navigation: any;
}

const SettingScreen = ({navigation}: ISettingScreen) => (
  <>
    <Container />
    <Footer>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </Footer>
  </>
);

export default SettingScreen;
