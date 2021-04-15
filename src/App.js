import React from 'react';
import { hide } from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { persistor, store } from '@/store';
import { RootNavigator } from '@/navigation';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate onBeforeLift={hide} persistor={persistor}>
          <RootNavigator />
        </PersistGate>
      </Provider>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
export default App;
