import React from 'react'
import {Text, View, TouchableHighlight} from 'react-native'
import ButtonStyle from '../style/ButtonStyle'

export default props => {
    button_style =  (props.operation) 
    ?[ButtonStyle.main, ButtonStyle.operation]
    :[ButtonStyle.main]
    return(
        <TouchableHighlight 
            onPress={() => props.onClick(props.label)}
            onLongPress={props.onHold}>
            <Text style={button_style}>{props.label}</Text>
        </TouchableHighlight>
    )
}
