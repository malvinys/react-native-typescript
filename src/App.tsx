import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import RootNavigator from './navigations/RootNavigatior';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <RootNavigator />;
};

export default App;
