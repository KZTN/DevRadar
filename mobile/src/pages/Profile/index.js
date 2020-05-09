import React from 'react'
import {Container} from './styles';
import {WebView} from 'react-native-webview'

export default function Profile({navigation}) {
    const github_username = navigation.getParam('github_username');
    return (<Container>
        <WebView source={{uri: `https://github.com/${github_username}`}}></WebView>
    </Container>);
}