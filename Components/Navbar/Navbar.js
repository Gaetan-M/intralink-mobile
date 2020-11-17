import React from 'react';
import {View,Text,Switch} from 'react-native'
import {styles} from './Style.js'
/*
-initialiser le component Navbar
-creer le bouton on/off
-creer le reste
*/
const title={
	name:'messages',
	count:6,
}
const Navbar =()=>{


	return(
		<View style={styles.container}>
			<View><Text>hello</Text></View>
		</View>
    )
}
export default Navbar;