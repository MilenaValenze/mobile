import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Authentication from './screens/Authenticantion/Authentication';


export default function App(){
    return (<div ><Authentication/></div>);
}

const styles = StyleSheet.create({
    flex: 1,
    backgroundColor: '#0077FF',
    textAlign: 'center'
    
});