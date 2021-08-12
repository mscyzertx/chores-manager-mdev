import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Block, Text, theme } from 'galio-framework';
import { View } from 'react-native';
import Product from '../../components/Service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width } = Dimensions.get('screen');
import products from '../../constants/services';

export default class MapScreen extends React.Component {
  
  renderView = () => {
    const { navigation } = this.props;
    return (
        
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Cleaning</Text>
            <Text style={styles.text_subheader}>Please choose your service</Text>   
        </View>
        </View>

    
    )
  }
  
  renderProducts = () => {
    const { navigation } = this.props;
    return (
      <View>
      <View>
      <MapView style={styles.map}
        initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
      </View>

      <View style={styles.container} />
      <Button onPress={() => navigation.navigate('MatchingScreen')} />
      </View>

    )
  }

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
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
  container: {
    flex: 1, 
    width:'100%',
    backgroundColor: '#96d459',
    alignItems:'center'
    
  },
  header: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      marginTop:10,
      paddingHorizontal: 30
  },
  footer: {
      flex: 3,
      backgroundColor: '#fff',
      paddingHorizontal: 30,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30,
      paddingBottom:10
  },

  text_subheader:{
      color: '#fff',
      fontSize: 20
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.5,
  },


});