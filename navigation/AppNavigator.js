import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AuthStack from './AuthNavigator';
import AuthLoading from '../screens/AuthLoadingScreen';
import routes from './routes';

export default createSwitchNavigator({
  AuthLoading: AuthLoading,
  [routes.Auth]: AuthStack,
  [routes.Main]: MainTabNavigator,
}, {
  initialRouteName: 'AuthLoading'
});