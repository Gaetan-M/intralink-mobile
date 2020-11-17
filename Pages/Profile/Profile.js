import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './Style.js'
import ProfileImage from '../../Components/ProfileImage/ProfileImage'
/*

*/
export default class Profile extends React.Component{

	constructor(){
	  super();
    }


    render(){
    	return(
    		<View style={styles.container}>
    			<ProfileImage/>
    		</View>
        )
    }
}
