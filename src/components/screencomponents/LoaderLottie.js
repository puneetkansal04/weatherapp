import React from 'react';
import LottieView from 'lottie-react-native';
import { View } from 'react-native';

const LoaderLottie = () => {
    return (
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
            <LottieView
                source={require('../../assests/lottiejson/loaderIcon.json')}
                autoPlay
                loop
            />
        </View>
    )
}

export default LoaderLottie