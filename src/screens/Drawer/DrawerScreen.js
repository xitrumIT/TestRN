import {
  Dimensions,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { logout } from '@/actions/UserActions';
// import auth from '@react-native-firebase/auth';

import { SCREEN_NAME, IMAGES_NAME } from '@/constants';

const DrawerScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const goLogout = async () => {
    dispatch(logout());
    // try {
    //   await auth().signOut();
    //   // navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
    // } catch (e) {
    //   console.error(e);
    // }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES_NAME.BGR_AVT}
        style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}
      >
        {/* <Image
          source={{uri: UrlImage}}
          style={{height: 130, width: 130, borderRadius: 60}}
        /> */}
        {/* {u.user ? (
          <Image
            source={{uri: u.user.photoURL}}
            style={{height: 130, width: 130, borderRadius: 60}}
          />
        ) : (
          <Image
            source={IMAGES_NAME.AVATAR_VN}
            style={{height: 130, width: 130, borderRadius: 60}}
          />
        )} */}
      </ImageBackground>

      <ScrollView style={{ marginLeft: 5 }}>
        <TouchableOpacity
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate(SCREEN_NAME.HOME_SCREEN)}
        >
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
            size={25}
            color="#28811e"
          />
          <Text style={{ marginLeft: 10 }}>Menu Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}
          onPress={() => navigation.navigate(SCREEN_NAME.NOTIFICATIONS_SCREEN)}
        >
          <Ionicons
            name={
              Platform.OS === 'ios' ? 'ios-notifications' : 'md-notifications'
            }
            size={25}
            color="#28811e"
          />
          <Text style={{ marginLeft: 10 }}>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>

      <View>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            alignSelf: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            goLogout();
          }}
        >
          <Text style={{ color: '#ed5565', fontWeight: 'bold' }}>Logout</Text>
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-log-out' : 'md-log-out'}
            size={25}
            color="#28811e"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewTouch: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});
export default DrawerScreen;
