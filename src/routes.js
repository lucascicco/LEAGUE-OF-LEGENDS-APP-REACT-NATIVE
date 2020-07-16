import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';

const navigator = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
        Dashboard: Dashboard
    },
    {
        initialRouteName: "Dashboard",
        defaultNavigationOptions: {
        title: "League Of Legends"
    }
})


export default createAppContainer(navigator)
