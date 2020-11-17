import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import {styles} from './Style.js'
import Index from './Index'
import AppNavigator from './Navigation/AppNavigator'
import AddresseReducer from './Redux/reducers/AddresseReducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

export default function App() {
	const Store=createStore(AddresseReducer)
  return (
  	<Provider store={Store}>
  		<Index/> 
  	</Provider>
  	 );
}

