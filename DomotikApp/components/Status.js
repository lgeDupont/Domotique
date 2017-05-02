/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Alert,
  Text,
  View
} from 'react-native'


var { height, width } = Dimensions.get('window')

class Status extends Component {

  constructor(props) {
    super(props)
    this.state = {
      main_room_name : 'Salon',
      main_room_temp : '23°C'
    }
  }
 
  render() {
    var root = this

    return (
      <View style={styles.container}><ScrollView>
        <View style={styles.main_room} ref="main_room">
          <View style={styles.main_room_header}></View>
          <View style={styles.main_room_content}>
            <View style={styles.main_room_temp}></View>
            <View style={styles.main_room_commands}>
              <View style={styles.main_room_increase}></View>
              <View style={styles.main_room_reduce}></View>
            </View>
          </View>
          <View style={styles.main_room_footer}>
            <View style={styles.main_room_daytemp}></View>
            <View style={styles.main_room_nighttemp}></View>
          </View>
        </View>
      </ScrollView></View>
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
  room_names: {
    flex: 1,
    top:0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    marginRight : 20,
    marginLeft: 20,
    marginTop: 20,
    width: width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F6D7A',
    flexDirection:'row',
  },
  main_room: {
    height: 150,
    width: width - 30,
    margin : 5,
    backgroundColor: '#DBE9EE',
  },
  room: {
    flex : 1,
    height: 100,
    width: (width - 30)/2,
    margin : 5,
    backgroundColor: '#DBE9EE',
  }
})

export default Status
