import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootNavigation from './src/navigation';
import { persistor, store } from './src/store';

const App = () => {
  //

  useEffect(() => {
    setTimeout(() => {
      BootSplash.hide();
    }, 2000);
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootNavigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
