import React from 'react';
import {CheckBox,ImageBackground,TouchableOpacity,Switch,ScrollView,Image,PixelRatio,Dimensions,View,Button,Text,TextInput,StyleSheet} from 'react-native';
import {styles} from './style.js'
import img from '../../assets/app-bg.png'
import {Groupe,Inputs,Plateform,Filieres,Formation,Niveau,Departements,Niveau3} from './Constant.js'
import RNPickerSelect from 'react-native-picker-select';
const {width,height}=Dimensions.get('screen')
 let passw=false
class Register extends React.Component{
	constructor(){
		super();
		this.state={
			Name:'',
			Surname:'',
			Email:'',
			Phone:0,
			Password:'',
			Select1:[],
			Select2:[],
			Select3:[],
			Niveau:'',
			Formation:'',
			value:'',
			PersonnalPage:true,
			passw:false

		}
	}

displayPersonnalInformations(){


	return(
		<View>
		    <View style={styles.Personnal}>
	        	<Text style={{fontSize:30}}>Personnal Informations</Text>
	        	<ScrollView>
	              {
	              	Inputs.map((input,index)=>{
	              	if(input.name==="Password" || input.name=="Confirm_Password")
	              		passw=true
	              	else
	              		passw=false

	              	return(
	              		<View style={styles.inputView}
	                       key={index}
	              		>  
			              <Image style={styles.logo}
			                source={require('../../assets/email.png')}
			              />    
			              <TextInput style={styles.input}
			              secureTextEntry={passw}
			                placeholder={input.name}
			                >
			              </TextInput>
	                   </View>
	                )
	              })}
	        	</ScrollView>
	        </View>
        		<View style={{borderWidth:0.5,width:width-60,marginLeft:25,marginTop:height/35,marginBottom:height/30}}></View>
            	<View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
	            	<TouchableOpacity
	                 style={{height:35,marginLeft:20}}
	                 onPress={()=>this.props.navigation.navigate('Login')}
	            	>
	            		<Text>Already have an account ?</Text>
	            	</TouchableOpacity>
		            <TouchableOpacity 
		              style={{
		              	height:35,
		              	flex:1,
		              	flexDirection:"row",
		              	justifyContent:"flex-end",
		              	width:100,
		              }}
		              onPress={()=>this.setState({PersonnalPage:false})}
		            >
		            	<Text style={{fontSize:25,marginTop:-5}}>Next</Text>
			            <Image style={{height:30,width:30,marginLeft:10}}
			                source={require('./assets/next.png')}
			            />
		            </TouchableOpacity>
            </View> 
        </View>
    )
}

displayAcademicInformations(){
	return(
       <View style={styles.Personnal}>
       	<Text style={{fontSize:30}}>Academic Informations</Text>
       	<View style={{borderWidth:1,width:width-100,borderRadius:10,marginTop:20}}>
		<RNPickerSelect
		            onValueChange={ (value) => {
					    	this.setState({Plateform:value})
					    	console.log(this.state.Filieres)
					        switch(value){        	
					        	case "3":
					        	return this.setState({Select1:Departements})
					        	break;
					        	default:
					        	return this.setState({Select1:Formation})
					        }

		            }}
		            items={Niveau}
		        />
       </View>
        <View style={{borderWidth:1,width:width-100,borderRadius:10,marginTop:20}}>
		<RNPickerSelect
		            onValueChange={ (value) => {
					        switch(value){
					        	case "GI":
					        	return this.setState({Select2:Niveau3.GI,Select3:Groupe})
					        	break;  
					        	case "1":
					        	return this.setState({Select2:Plateform})
					        	break;        	
					        	case "2":
					        	return this.setState({Select2:Plateform})
					        	break;        	      	
					        	default:console.log('error')
					        }

		            }}
		            items={this.state.Select1}
		            style={{borderWidth:10}}
		        />
       </View>
        <View style={{borderWidth:1,width:width-100,borderRadius:10,marginTop:20}}>		
       <RNPickerSelect
		            onValueChange={ (value) => {
					         switch(value){
					         	case "PFTIN":
					        	return this.setState({Select3:Filieres.PFTIN})
					         	break;        	
					         	case "PFTI":
					         	return this.setState({Select3:Filieres.PFTI})
					         	break;        	
					         	case "PFTT":
					        	return this.setState({Select3:Filieres.PFTT})
					         	break;					        
					         	default:console.log('error')
					         }
					        // console.log(this.state.Filieres)

		            }}
		            items={this.state.Select2}
		            style={{borderWidth:10}}
		        />
       </View>
        <View style={{borderWidth:1,width:width-100,borderRadius:10,marginTop:20}}>		
       <RNPickerSelect
		            onValueChange={ (value) => {
					    	// this.setState({Plateform:value})

		            }}
		            items={this.state.Select3}
		            style={{borderWidth:10}}
		        />
       </View>
            <TouchableOpacity
                        style={{
                      borderWidth:1,
                      width:300,
                      backgroundColor:'blue',
                      borderRadius:10,
                      paddingTop:10,
                      marginTop:20,
                      height:50,
                      display:this.state.display
                        }}
                             onPress={()=>this.props.navigation.navigate('Main')}
                           >
                        <Text style={{textAlign:'center',color:'white'}}>Sign Up</Text>     
            </TouchableOpacity>  
            <View style={{marginTop:20,flex:1,}}>
                <View style={{borderWidth:0.5,width:width-60}}></View>
                <View style={{marginTop:30,flex:1,flexDirection:"row",justifyContent:"space-between"}}>
		            <View style={{height:30}}>
			            <TouchableOpacity 
			              style={{
			              	height:35,
			              	flex:1,
			              	flexDirection:"row",
			              	justifyContent:"flex-end",
			              	width:100,
			              }}
			              onPress={()=>this.setState({PersonnalPage:true})}
			            >
				            <Image style={{height:30,width:30,marginLeft:10}}
				                source={require('./assets/back.png')}
				            />
				        	<Text style={{fontSize:25,marginTop:-5}}>Back</Text>
			            </TouchableOpacity>
		            </View>
	                <View>
		            	<TouchableOpacity
	                     style={{height:35}}
	                     onPress={()=>this.props.navigation.navigate('Login')}
		            	>
		            		<Text>Already have an account ?</Text>
		            	</TouchableOpacity>
	            	</View>
	           </View>
	        </View>
       </View>
		)
}
	render(){
		return(
           <View style={styles.container}>
            <View style={styles.header}>
                <ImageBackground source={img} style={{resizeMode: "cover",justifyContent: "center",height:height/4,marginTop:27,zIndex:1,position:"absolute",width:width}}>
	                <Image style={styles.img}
	                    source={require('../../assets/Logo/assets/IntraLink-logo-white.png')}
	                />
	            </ImageBackground> 
            </View> 
	            {(this.state.PersonnalPage)?this.displayPersonnalInformations():
                this.displayAcademicInformations()}
           </View>
	    )
	}
}
export default Register