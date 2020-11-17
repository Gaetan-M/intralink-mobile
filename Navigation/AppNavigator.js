import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import BottomTabNavigator from './BottomTabNavigator';
import LoginNavigator from '../Pages/Login/Login'
import RegisterNavigator from '../Pages/Register/Register'
import ProfileNavigator from '../Pages/Profile/Profile'

// export default createAppContainer(
//   createSwitchNavigator({

//     Main: BottomTabNavigator,
//     Login: LoginNavigator
//   })
// );

export default createAppContainer(
	createStackNavigator({
		Main:{
			screen:BottomTabNavigator
		},
		Login:{
			screen:LoginNavigator			
		},		
		Register:{
			screen:RegisterNavigator			
		},
		Profile:{
			screen:ProfileNavigator			
		}
	}, 
       {
       	initialRouteName:'Register',
       	headerMode:'none'}
	)) 