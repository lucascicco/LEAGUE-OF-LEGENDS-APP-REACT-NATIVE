import React, { Component } from 'react'
import { Text } from 'react-native'

import Background from '~/components/Background';

export default class Dashboard extends Component {
    render() {
        return (
            <Background>
                <Text> Dashboard </Text>
            </Background>
        )
    }
}
