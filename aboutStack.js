import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import About from './About';
import React from 'react';

const screens = {
    About:{
        screen: About,

    },
}

const aboutStack = createStackNavigator(screens);


export default aboutStack;