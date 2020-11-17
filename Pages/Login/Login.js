import React from 'react';
import Carousel from 'react-native-anchor-carousel';
import {CheckBox,ImageBackground,TouchableOpacity,Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {styles} from './Style.js'
// import AppNavigator from '../../Navigation/AppNavigator'
import img from '../../assets/app-bg.png'
const {width,height}=Dimensions.get('screen')
class Login extends React.Component{
  
  constructor(){
      super();
      this.state={
        isEnabled:false,
        checked:false,
        display:'flex',
        Email:'',
        Password:'',
        phone:''
      }
  }
  checkEmail(){
    console.log(this.state.email)  
    if(this.state.Email.includes('@gmail.com')==true)
      console.log('ok')
  }
  execute(){
    this.props.navigation.navigate('Main')
  }
  onInputChange(e,value){

    switch(value)
    {
      case "email":
      return this.setState({email:e.target.value})
      break;      
      case "phone":
      return this.setState({phone:e.target.value})
      break;      
      case "password":
      return this.setState({password:e.target.value})
      break;
    }
    this.setState({value:e.target.value})
     console.log(this.state.email)
  }
  render(){
  
  	return(
      <View style={styles.container}>
          <View style={styles.header}>
            <ImageBackground source={img} style={{resizeMode: "cover",justifyContent: "center",height:height/3,marginTop:27,zIndex:1,position:"absolute",width:width}}>
              <Image style={styles.img}
               source={require('../../assets/Logo/assets/IntraLink-logo-white.png')}
              />
            </ImageBackground> 
          </View> 
          <View style={styles.form}>
            <Text style={{fontSize:25}}>Login</Text>
            <View style={styles.inputView}>  
              <Image style={styles.logo}
                source={require('../../assets/email.png')}
              />    
              <TextInput style={styles.input}
                onChangeText={(value)=>this.setState({Email:value})}
                placeholder='Email'
                >
              </TextInput>
            </View>        
            <View style={styles.inputView}> 
              <Image style={styles.logo}
               source={require('../../assets/user.png')}
              />         
              <TextInput style={styles.input}
              placeholder='Password'
              onChangeText={(value)=>this.setState({Password:value})}
              ></TextInput>         
            </View>

            <TouchableOpacity
                        style={{
                      borderWidth:1,
                      width:300,
                      backgroundColor:'blue',
                      borderRadius:10,
                      paddingTop:10,
                      marginTop:40,
                      height:50,
                      display:this.state.display
                        }}
                              onPress={()=>{
                                this.checkEmail()
                                this.execute()}}
                           >
                        <Text style={{textAlign:'center',color:'white'}}>Login</Text>     
            </TouchableOpacity>  
            <View style={{flex:1,flexDirection:"row",marginTop:30}}>
                <View style={{flex:1,flexDirection:"row"}}>
                  <CheckBox
                    title='Remember me !'
                    checked={this.state.checked}
                    onPress={()=>this.setState({checked:!this.state.checked})}
                   />  
                 <Text style={{marginTop:5}}>Remember me !</Text>
                </View>
              <View style={{marginTop:5}}>
                <TouchableOpacity
                 onPress={()=>console.log('Forgot Password')}
                 >
                 <Text style={{textDecorationLine:"underline"}}>Forgot Password ?</Text>
                </TouchableOpacity>
              </View>
            </View> 
          <View style={{width:width-50,borderWidth:0.5,marginTop:40}}></View> 
          <View style={{flex:1,flexDirection:"row",marginLeft:width/8}}>
          <Text>Don't have an account ?  </Text>
            <TouchableOpacity
               onPress={()=>this.props.navigation.navigate('Register')}
               >
               <Text style={{textDecorationLine:"underline"}}>Register Here !</Text>
              </TouchableOpacity>
          </View>
      </View> 
      </View>
          
    )
  }
}
export default Login;
