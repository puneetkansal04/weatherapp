import React from 'react';
import { Provider } from 'react-redux';
import StackNavigator from './src/components/navigator/StackNavigator';
import configStore from './src/components/Store/configureStore';

const store = configStore()
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  )
}

export default App