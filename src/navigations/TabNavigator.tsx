import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet} from 'react-native';

import {HOME_ICON, SETTING_ICON} from '../components/Icons/Icons';
import Colors from '../config/Theme/Colors';

import HomeScreen from '../screens/_SampleScreens/HomeScreen';
import SettingScreen from '../screens/_SampleScreens/SettingScreen';

export type TabParamList = {
  Home: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
  return (
    <>
      <Tab.Navigator
        backBehavior="none"
        screenOptions={{
          unmountOnBlur: false,
        }}
        tabBarOptions={{
          activeTintColor: Colors.WHITE,
          inactiveTintColor: Colors.GREY,
          tabStyle: style.tabBarOptionsTabStyle,
          style: style.tabBarOptionsStyle,
          showLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={HOME_ICON}
                style={{
                  ...style.tabBarIcon,
                  tintColor: focused ? Colors.WHITE : Colors.GREY,
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={SettingScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={SETTING_ICON}
                style={{
                  ...style.tabBarIcon,
                  tintColor: focused ? Colors.WHITE : Colors.GREY,
                }}
                resizeMode="contain"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const style = StyleSheet.create({
  tabBarOptionsTabStyle: {
    backgroundColor: Colors.BACKGROUND_TAB,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  tabBarOptionsStyle: {
    backgroundColor: Colors.BACKGROUND_TAB,
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  tabBarIcon: {
    height: 26,
    width: 26,
  },
});

export default TabNavigator;
