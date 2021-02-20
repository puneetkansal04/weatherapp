import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const Home = () => {

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
        <>{false ?
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