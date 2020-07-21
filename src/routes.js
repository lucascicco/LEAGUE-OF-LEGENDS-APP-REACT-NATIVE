import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Dashboard from './screens/Dashboard';
import FirstAccess from './screens/FirstAccess';
import SearchScreen from './screens/SearchScreen';
import Profile from './screens/Profile';

import initialRoute from './utils/initialRoute'

export default (isSigned = false, hasNickname) => 
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                        Login,
                        SignUp
                }),
                App: createBottomTabNavigator({
                        Dashboard,
                        SearchScreen,
                        Profile
                }, {
                    resetOnBlur: true,
                    tabBarOptions: {
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        inactiveTintColor: 'rgba(255,255,255,0.6)',
                        style: {
                            backgroundColor: '#0000b3'
                        }
                    }
                }),
                FirstAccess: FirstAccess
            }, {
                initialRouteName: initialRoute(isSigned, hasNickname),
                headerMode: null,
                navigationOptions: {
                    headerVisible: false
                }
            }
    )
)


