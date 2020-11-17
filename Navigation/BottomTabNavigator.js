
import React from 'react';
import {View,Text} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Messages from '../Pages/ListDiscussion/ListDiscussion'
import Appels from '../Pages/CallList/CallList'
import Parametres from '../Pages/Parameter/Parameter'
import Profile from '../Pages/Profile/Profile'


const BottomTabNavigator = createBottomTabNavigator({
  Messages: Messages,
  Appels: Appels,
  Profil: Profile,
  Parametres: Parametres
});
export default BottomTabNavigator;
