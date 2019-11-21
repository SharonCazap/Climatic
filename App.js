import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Details from './screens/Details'


const RootStack = createStackNavigator({
    Home: Home,
    Details: Details,

});


export default createAppContainer(RootStack);