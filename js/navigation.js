// Navigation
import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen  from 'js/screens/LoginScreen';
import LinkPlaidScreen from 'js/screens/LinkPlaidScreen';
import SelectAccountsScreen from 'js/screens/SelectAccountsScreen';
import AnnotationScreen from 'js/screens/AnnotationScreen';

const AppNavigator = createStackNavigator({
  LinkPlaid: {
    screen: LinkPlaidScreen
  },
  SelectAccounts: {
    screen: SelectAccountsScreen
  },
  Login: {
    screen: LoginScreen,
  },
  Annotation: {
    screen: AnnotationScreen,
  }
});

export default createAppContainer(AppNavigator);
