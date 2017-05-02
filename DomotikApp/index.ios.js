/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
    AppRegistry
} from 'react-native';

import App from './components/App.js';

// console.ignoredYellowBox = [
//     // https://github.com/facebook/react-native/issues/9093
//     'Warning: You are manually calling a React.PropTypes validation',
// ];

class DomotikApp extends React.Component {
    render() {
        return (
            <App/>
        );
    }
}

AppRegistry.registerComponent('DomotikApp', () => DomotikApp);
