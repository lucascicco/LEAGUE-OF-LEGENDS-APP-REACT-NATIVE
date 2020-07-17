import { createAppContainer } from 'react-navigation';
import { createStackNavigator }  from 'react-navigation-stack';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import FirstAccess from './screens/FirstAccess';
import SearchScreen from './screens/SearchScreen';
import Profile from './screens/Profile';;

const navigator = createStackNavigator(
    {
        Login: Login,
        SignUp: SignUp,
        Dashboard: Dashboard,
        FirstAccess: FirstAccess,
        SearchScreen: SearchScreen,
        Profile: Profile
    },
    {
        initialRouteName: "Profile",
        defaultNavigationOptions: {
        title: "League Of Legends"
    }
})


export default createAppContainer(navigator)
