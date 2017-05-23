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
  TextInput,
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
      room_setting : false,
      main_room_name : 'Salon',
      main_room_temp : '23°C',
      secondary_rooms : [
        {
          "id": 0,
          "name": "minim",
          "temp": "16°C",
          "daytemp": "21°C",
          "nighttemp": "21°C"
        },
        {
          "id": 10,
          "name": "aliqua",
          "temp": "21°C",
          "daytemp": "20°C",
          "nighttemp": "25°C"
        },
        {
          "id": 20,
          "name": "commodo",
          "temp": "18°C",
          "daytemp": "22°C",
          "nighttemp": "24°C"
        },
        {
          "id": 30,
          "name": "magna",
          "temp": "21°C",
          "daytemp": "25°C",
          "nighttemp": "23°C"
        },
        {
          "id": 40,
          "name": "voluptate",
          "temp": "20°C",
          "daytemp": "17°C",
          "nighttemp": "20°C"
        },
        {
          "id": 50,
          "name": "sint",
          "temp": "21°C",
          "daytemp": "15°C",
          "nighttemp": "18°C"
        },
        {
          "id": 60,
          "name": "magna",
          "temp": "18°C",
          "daytemp": "23°C",
          "nighttemp": "19°C"
        },
        {
          "id": 70,
          "name": "esse",
          "temp": "16°C",
          "daytemp": "16°C",
          "nighttemp": "23°C"
        },
        {
          "id": 80,
          "name": "amet",
          "temp": "23°C",
          "daytemp": "24°C",
          "nighttemp": "19°C"
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

_onRoomPress(){
  this.setState({room_setting : true})
}
 
  render() {
    var root = this

    return (
      <View style={styles.container}>
        { !this.state.room_setting ? 
          <ScrollView>
          <TouchableHighlight onPress={this._onRoomPress.bind(this)}><View style={styles.main_room} ref="main_room">
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
          </View></TouchableHighlight>
          <ListView contentContainerStyle={styles.otherrooms}
            dataSource={this.state.ds.cloneWithRows(this.state.secondary_rooms)}
            renderRow={(room) => 
              <View key={room.id} style={styles.room}>
                <View style={styles.main_room_header}>
                  <Text style={styles.room_names}>{room.name}</Text>
                </View>
                <View style={styles.main_room_temp}>
                  <Text style={{fontSize: 65, color: '#DBE9EE',}}>{room.temp}</Text>
                </View>
              </View>}
          />
          </ScrollView> : null
        }
        { this.state.room_setting ? 
          <View style={{flex : 1, flexDirection : 'column', width : width - 10}}>
            <View style={styles.settings_header}>
              <Text style={{color : '#114B5F', fontSize : 35}}>Salon</Text>
            </View>
            <View style={styles.settings_content}>
              <View style={styles.settings_temp}>
                <Text style={{color : '#114B5F', fontSize : 20, flex : 1}}>Day Temp</Text>
                <TextInput
                  style={{height: 30, flex : 1}}
                  placeholder="20°C"
                />
              </View>
              <View style={styles.settings_temp}>
                <Text style={{color : '#114B5F', fontSize : 20, flex : 1}}>Night Temp</Text>
                <TextInput
                  style={{height: 30, flex : 1}}
                  placeholder="18°C"
                />
              </View>
              <View style={styles.settings_graph}>
                <View style={styles.settings_graph_header}>
                  <Text style={{color : '#114B5F', fontSize : 25}}>History</Text>
                </View>
                <View style={{flex : 3,}}>
                </View> 
              </View>
            </View>
            <View style={styles.settings_footer}>
              <TouchableHighlight><Text style={{color : '#114B5F', fontSize : 20, flex : 1}}>Save Changes</Text></TouchableHighlight>
              <TouchableHighlight><Text style={{color : '#114B5F', fontSize : 20, flex : 1}}>Delete Room</Text></TouchableHighlight>
            </View>
          </View> : null
        }
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
  }, 
  settings_header : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
  },
  settings_footer : {
    flex : 0.6,
    justifyContent : 'space-around',
    alignItems : 'center',
    flexDirection :  'row',
  },
  settings_content : {
    flex : 5,
    flexDirection : 'column',
    justifyContent : 'flex-start',
  },
  settings_temp : {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'stretch',
  },
  settings_graph : {
    flex : 3,
    flexDirection : 'column',
  },
  settings_graph_header : {
    flex : 1,
  },
})

export default Status
