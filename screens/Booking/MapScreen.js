import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  Platform,
  Alert
} from "react-native";

import { Button, Block, Text, theme } from "galio-framework";
import { View } from "react-native";
import Product from "../../components/Service";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MapView, { Marker, ProviderPropType } from "react-native-maps";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("screen");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const majorVersionIOS = parseInt(Platform.Version, 10);
let id = 1;
import products from "../../constants/services";

export default class MapScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      markers: [
        {
          coordinate: { latitude: LATITUDE, longitude: LONGITUDE },
          key: id++,
        },
      ],
      data: {},
      date: new Date(),
      address: "",
      formattedDate: format(new Date(), "MMMM dd yyyy"),
      formattedTime: format(new Date(), "hh:mm a"),
      mode: "date",
      showPicker: false,
    };
    this.postMatching = this.postMatching.bind(this);
  }

  postMatching() {
    const { navigation } = this.props;
    fetch(
      "https://zjil8ive37.execute-api.ca-central-1.amazonaws.com/dev/cm-post-matching",
      { method: "POST" }
    )
      .then((res) => res.json())
      .then((response) =>
        this.setState({ data: response }, () =>{
          AsyncStorage.setItem('currentAddress',this.state.address);
          AsyncStorage.setItem('currentTime',this.state.formattedDate + ' ' + this.state.formattedTime);
          navigation.navigate("MatchingScreen", this.state.data);
        }
        )
      )
      .catch((error) => console.log(error));
  }

  searchLocation = () => {
    console.log('request map api');
    const requestUrl = "http://www.mapquestapi.com/geocoding/v1/address?key=5m5I0ALgUcKZC5q6b1j7DPjaO2R4IhMF&location="+this.state.address;
    console.log(requestUrl);
    fetch(
      requestUrl
    )
      .then((res) => res.json())
      .then((response) =>

        this.setState({
         region: {
          latitude: response.results[0].locations[0].latLng.lat,
        longitude: response.results[0].locations[0].latLng.lng,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
        },
        forceRefresh: Math.floor(Math.random() * 100),
        markers: [
          {
            coordinate: { 
              latitude: response.results[0].locations[0].latLng.lat,
              longitude: response.results[0].locations[0].latLng.lng 
            },
            key: id++,
          },
        ]
      })
        
      )
      .catch((error) => console.log(error));


  };

  getAddress = (lat,long) => {
    console.log('request map api');
    
    const requestUrl = "http://www.mapquestapi.com/geocoding/v1/reverse?key=5m5I0ALgUcKZC5q6b1j7DPjaO2R4IhMF"+
    "&location="+lat+","+long+
    "&includeRoadMetadata=true&includeNearestIntersection=true";
    console.log(requestUrl);
    fetch(
      requestUrl
    )
      .then((res) => res.json())
      .then((response) =>
        this.setState({
          address:response.results[0].locations[0].street+', '+
          response.results[0].locations[0].adminArea5+', '+
          response.results[0].locations[0].adminArea1,
          region: {
            latitude: lat,
          longitude: long,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
          }}              
      ))
      .catch((error) => console.log(error));


  };

  handleAddressChange = (val) => {
    this.setState({address:val});
  };


  renderView = () => {
    const { navigation } = this.props;
    
    return (
      <View style={styles.container1}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text_button_back}>???</Text>
          </TouchableOpacity>
          <View style={styles.header_2}>
            <Text style={styles.text_header}>Location & Time</Text>
            <Text style={styles.text_subheader}>
              Please confirm location and time
            </Text>
          </View>
        </View>
      </View>
    );
  };

  renderProducts = () => {
    const { navigation } = this.props;

    const iosSpinner = (majorVersionIOS>=14) && (Platform.OS === "ios")?"inline":"spinner";

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || this.state.date;
      this.setState({ date: currentDate });
      this.setState({ showPicker: (Platform.OS==="ios")});
      console.log(this.state.date);
      this.setState({ formattedDate: format(currentDate, "MMMM dd yyyy") });
      this.setState({ formattedTime: format(currentDate, "hh:mm a") });
      console.log(this.state.formattedTime);
    };

    const showMode = (currentMode) => {
      this.setState({ showPicker: true });
      this.setState({ showTime: false });
      this.setState({ mode: currentMode });
    };

    const showDatepicker = () => {
      Platform.OS === "ios" ? showMode("datetime") : showMode("date");
    };

    const showTimepicker = () => {
      Platform.OS === "ios" ? showMode("datetime") : showMode("time");
    };

    const hideTimepicker = () => {
      this.setState({ showPicker: false });
    };

    return (
      <View style={styles.container2}>
        <View style={styles.container21}>
          <MapView
            style={styles.map}
            region={this.state.region}
            key = {this.state.forceRefresh}
            onPress={(e) => this.onMapPress(e)}
          >
            {this.state.markers.map((marker) => (
              <Marker key={marker.key} coordinate={marker.coordinate} />
            ))}
          </MapView>
        </View>
        <View style={styles.container22}>
          <View style={styles.container221}>
            <Block card style={[styles.products, styles.shadow]}>
            <TouchableOpacity onPress={this.searchLocation}>
              <FontAwesome name="location-arrow" color="#96d459" size={20} />
            </TouchableOpacity>
              <TextInput
                style={styles.text_address}
                placeholder="Input your location "
                onChangeText={(val) => this.handleAddressChange(val)}
                onSubmitEditing={this.searchLocation}
                value={this.state.address}
              />
            </Block>
          </View>
          <View style={styles.container221}>
            <Block card style={[styles.products, styles.shadow]}>
              <Text>
                <TouchableOpacity onPress={showTimepicker} style={{flexDirection:'row'}}>
                <FontAwesome name="clock-o" color="#000" size={20} />
                  <Text style={styles.text_time}>
                    {this.state.formattedTime}{"   "}
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={showDatepicker} style={{flexDirection:'row'}}>
                  <Text style={styles.text_time}>
                    {this.state.formattedDate}
                  </Text>
                </TouchableOpacity>
              </Text>

              {this.state.showPicker && Platform.OS === "ios" && (
                <Modal>
                  <View style={styles.modal_container_1_1}></View>
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display={iosSpinner}
                    onChange={onChange}
                    style={styles.modal_container_1_2}
                  />
                  <View style={styles.modal_container_1_3}>
                    <TouchableOpacity
                      style={styles.button}
                      onPress={hideTimepicker}
                    >
                      <Text style={styles.text_button}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              )}

              {this.state.showPicker && Platform.OS != "ios" && (
  
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    style={styles.modal_container_1_2}
                  />
                
              )}
            </Block>
          </View>
          <View style={styles.container221}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (this.state.address=="") {
                  Alert.alert(
                    ' ',
                    'PLEASE CHOOSE YOUR LOCATION!',
                    [
                      {
                        text: 'OK', onPress: () => {
                        }
                      },
                    ],
                    { cancelable: false },
                  )
                } else 
                {this.postMatching()}}}
            >
              <Text style={styles.text_button}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  onMapPress = (e) => {
    this.getAddress(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude);
    this.setState({
      markers: [
        {
          coordinate: e.nativeEvent.coordinate,
          key: id++,
        },
      ],
    });
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderView()}
        {this.renderProducts()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },

  products: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    width: "90%",
    borderWidth: 0,
    minHeight: "25%",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight:5
  },

  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },

  container1: {
    flex: 1,
    width: "100%",
    backgroundColor: "#96d459",
    alignItems: "center",
  },

  container2: {
    flex: 4,
    width: "100%",
    alignItems: "center",
  },

  container21: {
    flex: 1.5,
    width: "100%",
    alignItems: "center",
  },

  container22: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    top: -30,
  },

  container221: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },

  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    paddingHorizontal: 30,
  },

  header_1: { flex: 1 },
  header_2: {
    flex: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    paddingBottom: 10,
  },

  text_subheader: {
    color: "#fff",
    fontSize: 20,
  },

  text_address: {
    color: "#77AA46",
    fontWeight: "bold",
    fontSize: 16,
    left: 5,
  },

  text_time: {
    color: "#000",
    fontSize: 16,
    left: 5,
  },

  text_button: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  map: {
    width: "100%",
    height: "100%",
  },

  button: {
    backgroundColor: "#97D55A",
    alignItems: "center",
    width: "80%",
    padding: 15,
    borderRadius: 10,
  },
  text_button_back: {
    color: "#fff",
    fontSize: 40,
    textAlign: "left",
  },
  modal_container_1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal_container_1_1: {
    flex: 3,
  },

  modal_container_1_2: {
    flex: 5,
  },

  modal_container_1_3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
