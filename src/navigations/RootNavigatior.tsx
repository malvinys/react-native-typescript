import {
  NavigationContainer,
  NavigationContainerRef,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';

import Colors from '../config/Theme/Colors';

import TabNavigator, {TabParamList} from './TabNavigator';
import WelcomeScreen from '../screens/_SampleScreens/WelcomeScreen';
import DetailScreen from '../screens/_SampleScreens/DetailScreen';

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
            headerTintColor: style.headerTintColor.color,
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

const style = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.BACKGROUND,
    shadowColor: Colors.BACKGROUND,
    borderBottomWidth: 0,
  },
  headerTintColor: {
    color: Colors.WHITE,
  },
  cardStyle: {
    backgroundColor: Colors.BACKGROUND,
  },
});

export default RootNavigator;
