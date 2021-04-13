import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import i18n from '@/locales';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { ShadowStyles } from '@/theme';

const LoginScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const isLoading = useSelector(state =>
    isLoadingSelector([TYPES.LOGIN], state)
  );

  const errors = useSelector(
    state => errorsSelector([TYPES.LOGIN], state),
    shallowEqual
  );

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.formContainer,
          ShadowStyles.shadow,
          { backgroundColor: colors.primary },
        ]}
      >
        <TextField
          autoCapitalize="none"
          accessibilityHint={i18n.t('username_hint')}
          accessibilityLabel={i18n.t('username')}
          onChangeText={setUsername}
          placeholder={i18n.t('username')}
          value={username}
        />
        <TextField
          secureTextEntry
          accessibilityHint={i18n.t('password_hint')}
          accessibilityLabel={i18n.t('password')}
          autoCapitalize="none"
          onChangeText={setPassword}
          placeholder={i18n.t('password')}
          textContentType="password"
          value={password}
        />
        <ErrorView errors={errors} />
        <Button
          onPress={handleSubmit}
          style={styles.submitButton}
          title={isLoading ? i18n.t('Loading') : i18n.t('Login')}
        />
      </View>
    </View>
  );
};

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  formContainer: {
    borderRadius: 5,
    padding: 20,
    width: '100%',
  },
  submitButton: {
    marginTop: 20,
  },
});
export default LoginScreen;
