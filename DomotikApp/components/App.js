/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  TouchableHighlight,
  AsyncStorage,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
  AlertIOS,
  Text,
  View
} from 'react-native'

import Status from './Status.js'
import Settings from './Settings.js'

var { height, width } = Dimensions.get('window')

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status : true,
      settings: false,
    }
  }
  
  selectStatus() {
    this.setState({
      status : true,
      settings: false,
    })
  }

  selectSettings() {
    this.setState({
      status : false,
      settings: true,
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.header}>
          <Text style={{fontSize: 25, color:'#DBE9EE'}}>
            Domotik App
          </Text>
        </View>
        <View style={styles.tabs}>
          <TouchableHighlight style={styles.tab} onPress={this.selectStatus.bind(this)}>
            <Text style={{fontSize: 15, color:'#DBE9EE', textAlign: 'center', fontWeight: this.state.status ? 'bold' : '100'}}>
              Status
            </Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.tab} onPress={this.selectSettings.bind(this)}>
            <Text style={{fontSize: 15, color:'#DBE9EE', textAlign: 'center', fontWeight: this.state.settings ? 'bold' : '100'}}>
              Settings
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.page}>
          {this.state.status ? <Status/> : null}
          {this.state.settings ? <Settings/> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBE9EE',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#4F6D7A',
    width: width,
  },
  tabs: {
    flex: 0.7,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor:'#4F6D7A',
    width: width,
  },
  tab: {
    flex: 1,
    borderColor: '#4F6D7A',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderRightWidth: 1,
  },
  page: {
    flex: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#DBE9EE',
    width: width,
  },
});

export default App
