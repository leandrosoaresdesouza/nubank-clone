import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from './pages/Main';
import Transfer from './pages/Transfer';

const Routes = createSwitchNavigator(
  {
    Main,
    Transfer,
  },
  {
    initialRouteName: 'Transfer',
  }
);

export default createAppContainer(Routes);
