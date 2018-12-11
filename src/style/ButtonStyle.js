import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    main: {
        fontSize: 30,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#eee',
        textAlign: 'center',
        borderColor: '#888'
    },
    operation: {
        backgroundColor: '#6dcaf2', 
    }
})