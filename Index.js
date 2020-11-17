import React from 'react';
import {View,Text} from 'react-native';
import AppNavigator from './Navigation/AppNavigator'
import Login from './Pages/Login/Login'

class Index extends React.Component{

	constructor(){
		super();

	}
    render(){
		return(
		    <AppNavigator/>
	    )
	}
}
export default Index;