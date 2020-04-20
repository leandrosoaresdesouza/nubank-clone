import React from 'react';

import './src/config/ReactotronConfig';

import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#8e3aae" />
      <Routes />
    </>
  );
}
