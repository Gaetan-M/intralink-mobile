import React from 'react';
import {View,Text,Switch} from 'react-native';
import {styles} from './style.js'
import Navbar from '../../Components/Navbar/Navbar.js'
/*
********Components qui affiche toutes les discussion en cour**
-initialisation du component
-personnaliser la navbar pour le component ListDiscussion 
-creer une fonction qui liste les discussions
-Mettre sur pied les routes vers le component suivant
*/
export default class ListDiscussion extends React.Component{

	constructor(){
	  super();
    }
    
    displayMessNonLues(){
        
    }
     
    render(){
    	return(
    		<View style={styles.container}>
                <Navbar />
    			<Text>pa ge qui va contenir la liste des discussions</Text>
    		</View>
        )
    }
}
