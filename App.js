import React from 'react';
import 'react-native-gesture-handler';
import AppProvider from './src/contexts/AppContext';
import MainPage from './src/Screens/MainPage';

const App = () => {
  return (
    <AppProvider>
      <MainPage />
    </AppProvider>
  );
};

export default App;
