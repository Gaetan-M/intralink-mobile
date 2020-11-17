import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './Style.js'
class Confirm extends React.Component{

	constructor(){
		super();
	}

	render(){

		return(
			<View style={styles.container}> 
			    <View style={styles.logo}>
               	    <Image style={styles.img}
                      source={require('../../assets/logo.png')}
                    />
                </View>
                <View style={styles.Text}>
               	  <Text style={styles.text}>{this.state.message}</Text>
               	  </View>
			</View>
	    )
	}
}
export default Confirm;