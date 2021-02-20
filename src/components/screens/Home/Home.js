import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import GetLocation from 'react-native-get-location'
import NetInfo from "@react-native-community/netinfo";
import { useState } from 'react';

const Home = () => {
    const [isConnected, setisConnected] = useState(false)

    React.useEffect(() => {
        if (isConnected) {
            getLocation()
        }
    }, [])

    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setisConnected(state.isConnected)
        });

        return unsubscribe();
    }, [])

    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(location => {
            console.log('getLocation', location)
            // dispatch(api_data({ latitude: location.latitude, longitude: location.longitude }))
        })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }

    const renderItem = () => {
        return (
            <View>
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>Day</Text>
                    <Text style={{ fontSize: 30 }}>Day</Text>
                </View>
            </View>
        )
    }

    const onRetry = () => {

    }
    return (
        <>{isConnected ?
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 80 }}>10</Text>
                    <Text style={{ fontSize: 50 }}>Delhi</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={['1', "2"]}
                        renderItem={() => renderItem()}
                        keyExtractor={(item, index) => String(index)}
                    />
                </View>
            </View> :
            <View style={{ marginTop: 200 }}>
                <Text style={{ fontSize: 40, paddingLeft: 30, paddingRight: 30 }}>Something Went Wrong at our end</Text>
                <TouchableOpacity style={{
                    marginTop: 50, alignSelf: 'center',
                    height: 40, width: 80, borderWidth: 1,
                    justifyContent: 'center', alignItems: 'center'
                }} onPress={() => onRetry()}>
                    <Text>Retry</Text>
                </TouchableOpacity>
            </View>}</>
    )
}

export default Home