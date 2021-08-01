import React from 'react';
import {Text, Button} from 'react-native';

import Container from '../components/Container/Container';

interface iHomeScreen {
  navigation: any;
}

const HomeScreen = ({navigation}: iHomeScreen) => (
  <Container>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Detail')}
    />
  </Container>
);

export default HomeScreen;
