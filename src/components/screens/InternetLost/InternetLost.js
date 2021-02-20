import { useNetInfo } from '@react-native-community/netinfo';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'

const InternetLost = ({ navigation }) => {
    const netInfo = useNetInfo();

    const onRetry = () => {
        console.log('cl')
        if (netInfo.isConnected) {
            navigation.goBack()
        }
    }

    return (
        <View style={{ marginTop: 200 }}>
            <Text style={{ fontSize: 40, paddingLeft: 30, paddingRight: 30 }}>Something Went Wrong at our end</Text>
            <TouchableOpacity style={{
                marginTop: 50, alignSelf: 'center',
                height: 40, width: 80, borderWidth: 1,
                justifyContent: 'center', alignItems: 'center'
            }} onPress={() => onRetry()}>
                <Text>Retry</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InternetLost