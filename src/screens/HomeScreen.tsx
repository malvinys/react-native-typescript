import React from 'react';
import {Button, Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import Colors from '../config/Theme/Colors';

import Container from '../components/Container/Container';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';
import ImageIcon from '../components/Image/ImageIcon/ImageIcon';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import {WALLET_ICON} from '../components/Icons/Icons';

interface IHomeScreen {
  navigation: any;
}

const HomeScreen = ({navigation}: IHomeScreen) => {
  const handleCardClick = () => {
    navigation.navigate('Detail');
  };
  return (
    <>
      <Header />
      <Container>
        <TouchableOpacity onPress={() => handleCardClick()}>
          <Card styleProps={{...style.card.container}}>
            <ImageIcon
              iconSource={WALLET_ICON}
              styleProps={{styleContainerProps: {...style.card.image}}}
            />
            <View style={{...style.card.content}}>
              <Text>Test Card</Text>
              <ProgressBar progress="70%" />
            </View>
          </Card>
        </TouchableOpacity>
      </Container>
      <Footer styleProps={{...style.footer}}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Detail')}
          color={Colors.SECONDARY}
        />
      </Footer>
    </>
  );
};

interface IStyle {
  card: {
    container: ViewStyle;
    image: ViewStyle;
    content: ViewStyle;
  };
  footer: ViewStyle;
}

const style: IStyle = {
  card: {
    container: {
      flexDirection: 'row',
      flex: 1,
    },
    image: {
      marginRight: 8,
    },
    content: {
      flex: 1,
    },
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
};

export default HomeScreen;
