import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import GetLocation from 'react-native-get-location'
import { useNetInfo } from "@react-native-community/netinfo";
import { get_api_data } from '../../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import LoaderLottie from '../../screencomponents/LoaderLottie';

const Home = (props) => {
    const { navigation } = props
    const [isLoading, setisLoading] = useState(false)
    const dispatch = useDispatch()
    const netInfo = useNetInfo();

    const Weather_data = useSelector(state => state.Weather_data)

    React.useEffect(() => {
        if (netInfo.isConnected == true) {
            getLocation()
        } else if (netInfo.isConnected == false) {
            navigation.navigate('InternetLost')
        }
    }, [netInfo.isConnected])

    const getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(location => {
            if (location.latitude && location.longitude) {
                setisLoading(true)
                dispatch(get_api_data({ latitude: location.latitude, longitude: location.longitude }))
                setTimeout(() => {
                    setisLoading(false)
                }, 500);
            }
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

    return (
        <View style={{ flex: 1 }}>
            {isLoading && <LoaderLottie />}
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
        </View>
    )
}

export default Home