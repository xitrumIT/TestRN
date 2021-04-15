import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Platform,
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import i18n from '@/locales';
import { login, TYPES } from '@/actions/UserActions';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { SCREEN_NAME } from '@/constants';

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [passwordShown, setPasswordShown] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  //show alert
  const CAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: i18n.t('ok'),
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  //  show and hide password
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  //TODO: login with email & password
  const goLogin = async () => {
    setShowLoading(true);
    try {
      // const doLogin = await auth().signInWithEmailAndPassword(email, password);
      // // setShowLoading(false);
      // if (doLogin.user) {
      //   console.log('user login with Email ==', doLogin.user);
      //   // u.setUser(doLogin.user);
      //   // u.setUserId(doLogin.user.uid);
      //   // u.setEmail(doLogin.user.email);
      //   navigation.navigate(SCREEN_NAME.HOME_COMPONENT);
      // }
    } catch (e) {
      setShowLoading(false);
      if (username === '') {
        CAlert(i18n.t('error'), i18n.t('email_empty'));
        return;
      }
      if (e.code === 'auth/invalid-email') {
        CAlert(i18n.t('error'), i18n.t('email_format'));
        return;
      }
      if (password <= 5) {
        CAlert(i18n.t('error'), i18n.t('password_char_min'));
        return;
      }
      if (e.code === 'auth/wrong-password') {
        CAlert(i18n.t('error'), i18n.t('password_error'));
        return;
      }
      if (e.code === 'auth/too-many-requests') {
        CAlert(i18n.t('error'), i18n.t('request_max'));
        return;
      }
      if (e.code === 'auth/user-not-found') {
        CAlert(i18n.t('error'), i18n.t('user_error'));
        return;
      }
      console.log(e.message);
      // Alert.alert(e.message);
    }
  };

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
      <View style={styles.viewLogo}>
        <LottieView
          source={require('../../assets/json/345.json')}
          style={styles.imgLogo}
          // ref={useLottieAnim()}
          autoPlay
          loop
        />
      </View>
      <View style={styles.viewContent}>
        <View>
          <TextInput
            style={styles.txtInput}
            maxLength={255}
            keyboardType={'email-address'}
            onChangeText={text => setUsername(text)}
            value={username}
            placeholder={i18n.t('email')}
            underlineColorAndroid="transparent"
          />
          <View>
            <TextInput
              style={styles.txtInput}
              maxLength={255}
              onChangeText={text => setPassword(text)}
              value={password}
              placeholder={i18n.t('password')}
              underlineColorAndroid="transparent"
              secureTextEntry={passwordShown}
            />
            <TouchableOpacity
              style={styles.touchEye}
              onPress={() => togglePasswordVisibility()}
            >
              <Ionicons
                name={
                  passwordShown
                    ? Platform.OS === 'ios'
                      ? 'ios-eye-off'
                      : 'md-eye-off'
                    : Platform.OS === 'ios'
                    ? 'ios-eye'
                    : 'md-eye'
                }
                size={20}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={styles.forgotPassword}
            onPress={() => {
              navigation.navigate(SCREEN_NAME.FORGOT_PASSWORD_SCREEN);
            }}
          >
            {i18n.t('forgot_password')}
          </Text>
        </View>
        <View style={styles.blockBottom}>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => {
              handleSubmit();
            }}
          >
            <Text style={styles.txtButton}> {i18n.t('Login')} </Text>
          </TouchableOpacity>
          <Text style={styles.txtOr}> {i18n.t('or')} </Text>
          <View style={styles.otherLogin}>
            <TouchableOpacity
              style={styles.touchOther}
              onPress={() => setModalVisible(true)}
            >
              <Ionicons
                name={
                  Platform.OS === 'ios'
                    ? 'ios-phone-portrait'
                    : 'md-phone-portrait'
                }
                color={'#52bdd9'}
                size={40}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchOther}
              onPress={() => {
                // loginGoogle()
              }}
            >
              <Ionicons
                name={
                  Platform.OS === 'ios' ? 'ios-logo-google' : 'md-logo-google'
                }
                color={'#ed5565'}
                size={40}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchOther}
              onPress={() => {
                // loginFacebook()
              }}
            >
              <Ionicons
                name={
                  Platform.OS === 'ios'
                    ? 'ios-logo-facebook'
                    : 'md-logo-facebook'
                }
                color={'#3b5998'}
                size={40}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.viewRegister}>
            <Text style={styles.txtAccount}> {i18n.t('no_account')} </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(SCREEN_NAME.REGISTER_SCREEN)}
            >
              <Text style={styles.txtRegister}> {i18n.t('Register')} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        style={styles.containerModal}
        isVisible={isModalVisible}
        backdropOpacity={0.5}
        animationInTiming={800}
        animationOutTiming={800}
        avoidKeyboard={true}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.viewModal}>
          <Text style={styles.txtRegister}> Enter your phone! </Text>
          <View>
            <TextInput
              style={styles.txtInput}
              maxLength={255}
              onChangeText={setMobile}
              value={mobile}
              keyboardType="phone-pad"
              autoCompleteType="tel"
              placeholder={i18n.t('password')}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity
              style={styles.tchModal}
              onPress={() => {
                // handleSendCode();
              }}
            >
              <Text style={styles.txtButton}> {i18n.t('Login')} </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {showLoading && <View style={styles.activity}>{/* <Loading /> */}</View>}
    </View>
  );
};
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  imgLogo: {
    width: WIDTH * 0.6,
    height: WIDTH * 0.6,
  },
  viewContent: {
    flex: 1,
    alignItems: 'center',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  touchEye: {
    position: 'absolute',
    right: 0,
    marginTop: 15,
    marginRight: 10,
  },
  btnLogin: {
    height: 50,
    width: WIDTH - 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#20C3AF',
  },
  txtButton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  blockBottom: {
    alignItems: 'center',
  },
  txtOr: {
    marginVertical: 10,
  },
  otherLogin: {
    width: WIDTH - 100,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  touchOther: {
    alignItems: 'center',
    justifyContent: 'center',
    height: WIDTH / 5,
    width: WIDTH / 5,
    borderColor: '#808080',
    borderWidth: 0.5,
  },
  viewRegister: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 10,
  },
  txtInput: {
    height: 50,
    width: WIDTH - 100,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20,
  },
  txtAccount: {
    fontSize: 16,
  },
  txtRegister: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fa4134',
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'column',
  },
  viewModal: {
    backgroundColor: 'white',
    height: WIDTH * 0.6,
    width: WIDTH,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tchModal: {
    height: 50,
    width: WIDTH - 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});
export default LoginScreen;
