import React from 'react';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet, 
    SafeAreaView,
    
} from 'react-native';
import { color } from 'react-native-reanimated';
;
const ActivityScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Activity</Text>
        </View>
        <View style={styles.footer} >
            
        
            <View style ={[styles.boxStyle, styles.box1]}>
                <View style ={styles.defaultContainer}>
                    <Text style={styles.text_style}>House Cleaning</Text>
                    <Text style={styles.text_style1}>Time: July 27 14:30PM</Text>
                    <Text style={styles.text_style}>Status:Processing</Text>
                </View>
            </View>
            <View style ={[styles.boxStyle, styles.box3]}>
                <View style ={styles.defaultContainer}>
                <Text style={styles.text_style}>House Cleaning</Text>
                    <Text style={styles.text_style1}>Time: July 27 14:30PM</Text>
                    <Text style={styles.text_style}>Status:Processing</Text>
                </View>
            </View>
            <View style ={[styles.boxStyle, styles.box3]}>
                <View style ={styles.defaultContainer}>
                <Text style={styles.text_style}>House Cleaning</Text>
                    <Text style={styles.text_style1}>Time: July 27 14:30PM</Text>
                    <Text style={styles.text_style}>Status:Processing</Text>
                </View>
            </View>
            <View style ={[styles.boxStyle, styles.box3]}>
                <View style ={styles.defaultContainer}>
                <Text style={styles.text_style}>House Cleaning</Text>
                    <Text style={styles.text_style1}>Time: July 27 14:30PM</Text>
                    <Text style={styles.text_style}>Status:Processing</Text>
                </View>
            </View>
        </View>
        </View>
  )
}

export default ActivityScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#96d459'
      
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        marginTop:10,
        paddingHorizontal: 30,
        paddingBottom: 30
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
        paddingBottom:20
    },


    boxStyle: {
        width: '100%', 
        height: 10,
        padding: 20
    },

    box1:{
        flex: 1
    },

    box3:{
        flex: 1
    },

    defaultContainer:{
        flex:1,
        backgroundColor:"#d0f4be",
        padding:10
    },

    text_style : {
        color:'#5db84d'
    }, 

    text_style1 :{
        color:'grey'
    }

  });