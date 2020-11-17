import {StyleSheet,Dimensions} from 'react-native';

//recuperation des dimensions de l'ecran du user
const width=Dimensions.get("screen").width;
const height=Dimensions.get("screen").height;

export const styles=StyleSheet.create({
container:{
  flex:1,
  flexDirection:"column"
},
img:{
  height:100,
  width:200,
  marginLeft:75,
  borderWidth:10,
  zIndex:2
},
form:{
  position:"absolute",
  flex:1,
  marginTop:height/2.5,
  marginLeft:20
},
inputView:{

  width:width,
  height:50,
  flex:1,
  flexDirection:"row",
  borderWidth:1,
  marginTop:25,
  width:width-60,
  borderRadius:10
},
logo:{
  width:25,
  height:25,
 marginTop:8,
 marginLeft:10
},
input:{
  width:width-95,
  marginLeft:15

}
})