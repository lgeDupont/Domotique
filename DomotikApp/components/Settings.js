/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native'


var { height, width } = Dimensions.get('window')

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }
 
  render() {
    var root = this

    return (
      <View style={styles.container}>
        <View>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBE9EE',
  },
})

export default Settings
