import React from 'react';
import {ScrollView, Button} from 'react-native';

import Container from '../components/Container/Container';

interface iSettingScreen {
  navigation: any;
}

const SettingScreen = ({navigation}: iSettingScreen) => (
  <>
    <Container>
      <ScrollView />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </Container>
  </>
);

export default SettingScreen;
