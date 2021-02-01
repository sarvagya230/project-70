import React from 'react';
import { StyleSheet, Text, View,TextInput } from 'react-native';
export default class MakeStory extends React.Component
{
    render()
    {
        return(
            <View style={{flex:1,justifyContent:'center'}}>
            <Text style={{textAlign:'center',color:'#00aaff',fontSize:22,fontWeight:500}} >Your own story!!!</Text>
            <TextInput placeholder="Tital"  style={{borderWidth:1,width:200,height:30,alignSelf:'center',marginBottom:'50px'}} />
            <TextInput placeholder="author"  style={{borderWidth:1,width:200,height:30,alignSelf:'center'}} />
            <TextInput placeholder="story"  style={{borderWidth:1,width:200,height:80,alignSelf:'center',marginTop:'50px'}} />
            </View>
        )
    }
}