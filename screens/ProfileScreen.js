import React from 'react';
import { 
    View, 
    Text,
    StyleSheet ,
    
} from 'react-native';;
const ProfileScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Account</Text>
        </View>
        <View style={styles.footer} >
            
        </View>
        </View>
  )
}

export default ProfileScreen;

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

  });