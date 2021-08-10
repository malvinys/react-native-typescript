import React from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import Colors from '../../config/Theme/Colors';

import Container from '../../components/Container/Container';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {BaseCard} from '../../components/Cards/Cards';
import ImageIcon from '../../components/Image/ImageIcon/ImageIcon';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import {WALLET_ICON} from '../../components/Icons/Icons';

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
          <BaseCard styleProps={{...style.cardContainer}}>
            <ImageIcon
              iconSource={WALLET_ICON}
              styleProps={{styleContainer: {...style.cardImage}}}
            />
            <View style={{...style.cardContent}}>
              <Text>Test Card</Text>
              <ProgressBar progress="70%" />
            </View>
          </BaseCard>
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

const style = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  cardImage: {
    marginRight: 8,
  },
  cardContent: {
    flex: 1,
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});

export default HomeScreen;
