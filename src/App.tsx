import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import store, {persistor} from './models/_store';

import Loader from './components/Loader/Loader';
import RootNavigator from './navigations/RootNavigatior';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
