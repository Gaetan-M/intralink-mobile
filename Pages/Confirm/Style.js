import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
	container:{
    	marginBottom:0,
       flex:1,
       flexDirection:'column',
       marginTop:50,
       justifyContent:'center'
    },
    logo:{
        marginLeft:width/2-60,
        width:150,
        height:100
    },
    Text:{
        width:300,
        marginLeft:30,
        marginTop:100,
        height:100,

    },
    text:{
        textAlign:'center'
    },
    img:{
    	width:150,
    	height:100,
    	position:'relative',
    	resizeMode:'contain'
    },
    bules:{
    	flex:1,
    	flexDirection:'row',
        marginTop:100,
        position:'absolute',
    	justifyContent:'space-around',
    	height:20,
    	width:50,
    	marginLeft:width/2-50
    }
})