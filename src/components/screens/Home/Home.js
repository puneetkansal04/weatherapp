import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import GetLocation from 'react-native-get-location'
import NetInfo from "@react-native-community/netinfo";
import { useState } from 'react';
import { get_api_data } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

const Home = () => {
    const dispatch = useDispatch()
    const Weather_data = useSelector(state => state.Weather_data)
    const [isConnected, setisConnected] = useState(false)

    React.useEffect(() => {
        if (isConnected) {
            getLocation()
        }
    }, [isConnected])

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
            dispatch(get_api_data({ latitude: location.latitude, longitude: location.longitude }))
        }).catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })
    }

    const renderItem = (item, index) => {
        return (
            <View>
                <View style={{ height: 1, backgroundColor: 'black' }} />
                <View style={{ justifyContent: 'space-around', flexDirection: 'row', padding: 10 }}>
                    <Text style={{ fontSize: 30 }}>{moment(item.dt_txt, "YYYY-MM-DD HH:mm:ss").format('dddd')}</Text>
                    <Text style={{ fontSize: 30 }}>{item.main.temp}</Text>
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
                    <Text style={{ fontSize: 60 }}>{Weather_data.list ? Weather_data.list[0].main.temp : ''}</Text>
                    <Text style={{ fontSize: 25, alignSelf: 'center' }}>{Weather_data.city}</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={Weather_data.list}
                        renderItem={({ item, index }) => renderItem(item, index)}
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