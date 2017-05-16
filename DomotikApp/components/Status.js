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
  ListView,
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
      secondary_rooms : [
        {
          "id": 0,
          "name": "culpa",
          "temp": "18°C"
        },
        {
          "id": 10,
          "name": "dolore",
          "temp": "21°C"
        },
        {
          "id": 30,
          "name": "amet",
          "temp": "18°C"
        },
        {
          "id": 40,
          "name": "nulla",
          "temp": "20°C"
        },
        {
          "id": 50,
          "name": "sit",
          "temp": "17°C"
        },
        {
          "id": 60,
          "name": "adipisicing",
          "temp": "23°C"
        },
        {
          "id": 70,
          "name": "eu",
          "temp": "18°C"
        },
        {
          "id": 80,
          "name": "do",
          "temp": "21°C"
        },
        {
          "id": 90,
          "name": "cupidatat",
          "temp": "15°C"
        }
      ],
    }
  }

  componentWillMount(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({ds : ds})
  }

  OtherRooms() {
  return this.state.secondary_rooms.map(function(room){
    return(
      <View key={room.id} style={styles.room}>
        <View style={styles.main_room_header}>
          <Text style={styles.room_names}>{room.name}</Text>
        </View>
        <View style={styles.main_room_temp}>
          <Text style={{fontSize: 65, color: '#DBE9EE',}}>{room.temp}</Text>
        </View>
      </View>
    )
  })
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
        <ListView contentContainerStyle={styles.otherrooms}
          dataSource={this.state.ds.cloneWithRows(this.state.secondary_rooms)}
          renderRow={(room) => <View key={room.id} style={styles.room}>
                                    <View style={styles.main_room_header}>
                                      <Text style={styles.room_names}>{room.name}</Text>
                                    </View>
                                    <View style={styles.main_room_temp}>
                                      <Text style={{fontSize: 65, color: '#DBE9EE',}}>{room.temp}</Text>
                                    </View>
                                  </View>}
        />
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
  otherrooms: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  room: {
    height: 100,
    width: (width - 30)/2,
    margin : 5,
    backgroundColor: '#114B5F',
  }
})

export default Status
