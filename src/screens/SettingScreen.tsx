import React from 'react';
import {Text, Button} from 'react-native';

import Container from '../components/Container/Container';

interface iSettingScreen {
  navigation: any;
}

const SettingScreen = ({navigation}: iSettingScreen) => (
  <Container>
    <Text>Setting Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}
    />
  </Container>
);

export default SettingScreen;
