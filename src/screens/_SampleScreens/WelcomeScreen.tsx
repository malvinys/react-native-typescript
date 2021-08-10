import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native';

import {CORE_ACTIONS, CORE_SELECTOR} from '../../models/CoreModel';

import Containter from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';

interface IWelcomeScreen {
  navigation: any;
}

const WelcomeScreen = ({navigation}: IWelcomeScreen) => {
  const dispatch = useDispatch();
  const CORE = useSelector(CORE_SELECTOR);

  useEffect(() => {
    if (!CORE.isShowWelcomeScreen) {
      navigation.navigate('Tab');
    }
  });

  const handleGetStartedClick = async () => {
    dispatch(CORE_ACTIONS.setIsShowWelcomeScreen(false));
  };

  return (
    <>
      {!CORE.isShowWelcomeScreen && <Loader />}
      {CORE.isShowWelcomeScreen && (
        <>
          <Containter />
          <Footer>
            <Button
              title="Get Started"
              onPress={() => handleGetStartedClick()}
            />
          </Footer>
        </>
      )}
    </>
  );
};

export default WelcomeScreen;
