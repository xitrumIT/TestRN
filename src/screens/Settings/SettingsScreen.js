import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import i18n from '@/locales';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { TextStyles } from '@/theme';

const SettingsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, styles.title, { color: colors.text }]}>
        {i18n.t('Settings')}
      </Text>
      <Button title={i18n.t('Logout')} onPress={logoutUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 40,
  },
  title: {
    textAlign: 'center',
  },
});
export default SettingsScreen;
