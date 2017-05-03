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
      main_room_temp : '23°C',
    }
  }
 
  render() {
    var root = this

    return (
      <View style={styles.container}><ScrollView>
        <View style={styles.main_room} ref="main_room">
          <View style={styles.main_room_header}>
            <Text style={styles.room_names}>{this.state.main_room_name}</Text>
          </View>
          <View style={styles.main_room_content}>
            <View style={styles.main_room_temp}>
              <Text style={{fontSize: 75, color: '#DBE9EE',}}>{this.state.main_room_temp}</Text>
            </View>
            <View style={styles.main_room_commands}>
              <View style={styles.main_room_increase}><Text style={{fontSize: 30, color: '#DBE9EE',}}>🔼</Text></View>
              <View style={styles.main_room_reduce}><Text style={{fontSize: 30, color: '#DBE9EE',}}>🔽</Text></View>
            </View>
          </View>
          <View style={styles.main_room_footer}>
            <View style={{flex: 2}}></View>
            <View style={styles.main_room_daynighttemp}><Text>🌞   23°C</Text></View>
            <View style={styles.main_room_daynighttemp}><Text>🌙   19°C</Text></View>
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
  picture: {
    flex: 0.8,
    width: null,
    height: null,
    margin: 10,
  },
  room_names: {
    color: '#DBE9EE',
    fontSize: 20,
  },
  main_room: {
    height: 150,
    width: width - 30,
    margin : 10,
    backgroundColor: '#114B5F',
    flexDirection: 'column',
  },
  main_room_header: {
    flex: 1,
    margin: 5,
  },
  main_room_content: {
    flex: 3,
    flexDirection: 'row',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_room_temp: {
    flex: 3,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_room_commands: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_room_increase:{
    flex: 1,
  },
  main_room_reduce:{
    flex: 1,
  },
  main_room_footer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  main_room_daynighttemp:{
    flex: 1,
  },
  room: {
    flex : 1,
    height: 100,
    width: (width - 30)/2,
    margin : 5,
    backgroundColor: '#114B5F',
  }
})

export default Status
