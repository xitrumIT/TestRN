import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { SCREEN_NAME } from '@/constants';
import i18n from '@/locales';

import {
  Home,
  HomeDetail,
  SettingsScreen,
  CartScreen,
  ChatsScreen,
  DrawerScreen,
} from '@/screens';

const navOptionHandler = () => ({
  headerShown: false,
});

//**Drawer**/
const Drawer = createDrawerNavigator();
const DrawerNavigator = ({ navigation }) => {
  return (
    <Drawer.Navigator
      initialRouteName={SCREEN_NAME.DRAWER_SCREEN}
      drawerContent={() => <DrawerScreen navigation={navigation} />}
    >
      <Drawer.Screen
        name={SCREEN_NAME.DRAWER_SCREEN}
        component={TabNavigation}
      />
    </Drawer.Navigator>
  );
};

// init Home Stack
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

// init Settings Stack
const StackSettings = createStackNavigator();
const SettingsStackScreen = ({ navigation, route }) => {
  return (
    <StackSettings.Navigator>
      <StackSettings.Screen
        name="Settings"
        component={SettingsScreen}
        options={navOptionHandler}
      />
    </StackSettings.Navigator>
  );
};

// init Chart Stack
const StackChat = createStackNavigator();
const ChatsStackScreen = ({ navigation, route }) => {
  return (
    <StackChat.Navigator>
      <StackChat.Screen
        name="Chats"
        component={ChatsScreen}
        options={navOptionHandler}
      />
    </StackChat.Navigator>
  );
};

// init Cart Stack
const StackCart = createStackNavigator();
const CartStackScreen = ({ navigation, route }) => {
  return (
    <StackCart.Navigator>
      <StackCart.Screen
        name="Cart"
        component={CartScreen}
        options={navOptionHandler}
      />
    </StackCart.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const TabNavigation = ({ navigation, route }) => {
  return (
    <Tab.Navigator
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
        name={SCREEN_NAME.CHATS_SCREEN}
        component={ChatsStackScreen}
        options={{
          tabBarLabel: i18n.t('Chats'),
          tabBarIcon: ({ color }) => (
            <Icon
              name={
                Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'
              }
              color={color}
              size={22}
            />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAME.CART_SCREEN}
        component={CartStackScreen}
        options={{
          tabBarLabel: i18n.t('Cart'),
          tabBarIcon: ({ color }) => (
            <Icon
              name={Platform.OS === 'ios' ? 'ios-cart' : 'md-cart'}
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

const StackApp = createStackNavigator();
const AppNavigator = ({}) => {
  return (
    <StackApp.Navigator
      initialRouteName={SCREEN_NAME.HOME_COMPONENT}
      screenOptions={{ gestureEnabled: false }}
    >
      <StackApp.Screen
        name={SCREEN_NAME.HOME_COMPONENT}
        component={DrawerNavigator}
        options={navOptionHandler}
      />
    </StackApp.Navigator>
  );
};
export default AppNavigator;
