import {StyleSheet,Dimensions} from 'react-native';

//recuperation des dimensions de l'ecran du user
const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export const styles=StyleSheet.create({
container:{
	flex:1,
	flexDirection:'column'
},
img:{
  height:100,
  width:200,
  marginLeft:75,
  borderWidth:10,
  zIndex:2
},
Personnal:{
	marginTop:height/3,
	paddingLeft:30
	
},
inputView:{
	flex:1,
	flexDirection:'row',
	borderWidth:1,
	width:width-70,
	marginTop:20,
	borderRadius:10,
	height:40
},
input:{
	width:width-115,
	marginLeft:10
},
logo:{
	width:25,
	height:25,
	marginTop:5,
	marginLeft:10
},

})
