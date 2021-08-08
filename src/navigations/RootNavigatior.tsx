import {
  NavigationContainer,
  NavigationContainerRef,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Colors from '../config/Theme/Colors';

import TabNavigator, {TabParamList} from './TabNavigator';
import WelcomeScreen from '../screens/WelcomeScreen';
import DetailScreen from '../screens/DetailScreen';

export type RootParamList = {
  Tab: NavigatorScreenParams<TabParamList>;
  Welcome: undefined;
  Detail: undefined;
};

const Stack = createStackNavigator<RootParamList>();

const RootStack = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          cardStyle: style.cardStyle,
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
            cardStyle: style.cardStyle,
          }}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            title: 'Detail',
            headerStyle: style.headerStyle,
            headerTintColor: Colors.WHITE,
            cardStyle: style.cardStyle,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  );
});
RootNavigator.displayName = 'RootNavigator';

interface IStyle {
  headerStyle: any;
  headerTintColor: string;
  cardStyle: any;
}

const style: IStyle = {
  headerStyle: {
    backgroundColor: Colors.BACKGROUND,
    shadowColor: Colors.BACKGROUND,
    borderBottomWidth: 0,
  },
  headerTintColor: Colors.WHITE,
  cardStyle: {
    backgroundColor: Colors.BACKGROUND,
  },
};

export default RootNavigator;
