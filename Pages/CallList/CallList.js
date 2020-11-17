import React from 'react';
import {View,Text} from 'react-native';
import {styles} from './Style.js'
/*
********Components qui affiche tous les appels effectués**
-initialisation du component
-personnaliser la navbar pour le component CallList 
-creer une fonction qui liste les Appels
-Mettre sur pied les routes vers le component suivant
*/
export default class CallList extends React.Component{

	constructor(){
	  super();
    }


    render(){
    	return(
    		<View style={styles.container}>
    			<Text>page qui va contenir la liste des Appels</Text>
    		</View>
        )
    }
}
