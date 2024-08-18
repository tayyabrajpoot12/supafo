import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigation from './src/navigation';
import { persistor, store } from './src/store';

const App = () => {
  //

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          onReady={() => {
            BootSplash.hide();
          }}>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
