import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import DisplayStyle from '../style/DisplayStyle'

export default class Display extends Component{
    
    render(){
        return(
            <View style={DisplayStyle.display}>
                <Text numberOfLines={1} style={DisplayStyle.displayValue}>{this.props.value}</Text>
            </View>
        )
    }
}