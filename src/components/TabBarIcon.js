import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';
import { SCREEN_NAME, IMAGES_NAME } from '@/constants';

const tabIcon = {
  [SCREEN_NAME.HOME_SCREEN]: IMAGES_NAME.ICON_HOME,
  [SCREEN_NAME.SETTINGS_SCREEN]: IMAGES_NAME.ICON_SETTINGS,
};

const TabBarIcon = ({ color, routeName }) => {
  return (
    <Image
      accessibilityIgnoresInvertColors
      source={tabIcon[routeName]}
      style={{ tintColor: color }}
    />
  );
};

TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
export default TabBarIcon;
