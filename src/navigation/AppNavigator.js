import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform, Text } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { TabBarIcon } from '@/components';
import { SCREEN_NAME } from '@/constants';
import i18n from '@/locales';

import { Home, HomeDetail, SettingsScreen } from '@/screens';

const navOptionHandler = () => ({
  headerShown: false,
});

// init HomeStack
const StackHome = createStackNavigator();
const HomeStackScreen = ({ navigation, route }) => {
  return (
    <StackHome.Navigator>
      <StackHome.Screen
        name={SCREEN_NAME.HOME_SCREEN}
        component={Home}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name={SCREEN_NAME.HOME_DETAIL}
        component={HomeDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

// init SettingsStack
const StackSettings = createStackNavigator();
const SettingsStackScreen = ({ navigation, route }) => {
  return (
    <StackSettings.Navigator>
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
      {/* <StackSettings.Screen
          name="SettingsDetail"
          component={SettingsDetail}
          options={navOptionHandler}
        /> */}
    </StackSettings.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const AppNavigator = ({}) => {
  return (
    <Tab.Navigator
      initialRouteName={SCREEN_NAME.HOME_SCREEN}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: '#30ab6a',
        inactiveTintColor: '#3e2465',
        labelStyle: { fontSize: 12, fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name={SCREEN_NAME.HOME_SCREEN}
        component={HomeStackScreen}
        options={{
          tabBarLabel: i18n.t('Home'),
          tabBarIcon: ({ color }) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.SETTINGS_SCREEN}
        component={SettingsStackScreen}
        options={{
          tabBarLabel: i18n.t('Settings'),
          tabBarIcon: ({ color }) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-settings' : 'md-settings'}
              color={color}
              size={22}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
