import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet, Dimensions, Button } from 'react-native';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';
import i18n from '@/locales';
import { TextStyles } from '@/theme';
import { SCREEN_NAME } from '@/constants';
import { getUser } from '@/selectors/UserSelectors';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const user = useSelector(getUser);

  return (
    <View style={styles.container}>
      <Text style={[TextStyles.title, { color: colors.text }]}>
        {i18n.t('Home')}
      </Text>
      <Text style={{ margin: 10 }}>user name: {user?.username}</Text>
      <Text style={[TextStyles.text, { color: colors.text }]}>
        {i18n.t('variant')}
        {Config.BUILD_VARIANT}
      </Text>
      <Button
        onPress={() => navigation.navigate(SCREEN_NAME.HOME_DETAIL)}
        title="Next to Home Detail"
        color="#841584"
      />
    </View>
  );
};
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;
