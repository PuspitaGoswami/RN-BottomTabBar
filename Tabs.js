import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import homeStack from './homeStack';
import aboutStack from './aboutStack';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

const screens = {
    Home:{
        screen: homeStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="home"
                  size={25}
                  color= "orange"
                />
              );
            },
            tabBarColor:'white',
          },

    },
    Cart:{
        screen: aboutStack,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
              return (
                <Ionicons
                  name="cart"
                  size={25}
                  color='orange'
                />
              );
            },
        
        
        tabBarColor: "white",
        
        
          },

    }
}

const Tabs = createMaterialBottomTabNavigator(screens,
    {
        activeColor:'black',
        color:'black',
        inactiveColor:'green',
        shifting:true,
        tabBarColor:"white",
    }
    );


export default createAppContainer(Tabs);