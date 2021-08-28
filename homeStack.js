import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Home from './Home';
import React from 'react';

const screens = {
    Home:{
        screen: Home,

    },
}

const homeStack = createStackNavigator(screens);


export default homeStack;