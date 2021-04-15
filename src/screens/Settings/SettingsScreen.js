import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import i18n from '@/locales';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import CustomHeader from '@/screens/CustomHeader';

const SettingsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        isSettings={true}
        title={i18n.t('Settings')}
        navigation={navigation}
      />
      <View style={styles.viewSetting}>
        <Button
          title={i18n.t('Logout')}
          onPress={logoutUser}
          style={{ justifyContent: 'flex-end' }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewSetting: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
  },
});
export default SettingsScreen;
