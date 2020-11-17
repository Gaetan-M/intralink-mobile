import {View,InputText,StyleSheet,TouchableOpacity,Image} from 'react-native';
import React from 'react'; 
class ProfileImage extends React.Component{

	constructor(props){
		super(props);
		this.state={
			profil:
			require('./assets/profil.png')
		}
	}

    _profilCliked(){

    }
	render()
	{
		return(
			<TouchableOpacity
            style={styles.touchableOpacity}
            onPress={this._avatarCliked}
			>
              <Image style={styles.avatar} source={this.state.profil}/>  
			</TouchableOpacity>	
			)
	}
}

const styles=StyleSheet.create({
	touchableOpacity:{
		margin:5,
		width:100,
		height:100,
		justifyContent:'center',
		alignItems:'center'
	},
	avatar:{
		width:100,
		height:100,
		borderRadius:50,
		borderColor:'#9B9B9B',
		borderWidth:2
	}
})

export default ProfileImage;