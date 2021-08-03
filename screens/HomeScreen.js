import React from 'react';
import { Searchbar } from 'react-native-paper';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet, 
    TouchableHighlight,
    Button,
    
} from 'react-native';;
const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Chores Manager </Text>
            <Searchbar
            placeholder='Search Here'
            onChangeText={onChangeSearch}
            value={searchQuery}/>
        </View>
        <View style={styles.footer} >
        <Text style={styles.text_footer}>Categories</Text>
        <View>
          <TouchableHighlight>
            <Image/>
            </TouchableHighlight>
            </View>
        </View>
        </View>
  )
}


  
      

export default HomeScreen;

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
    text_footer: {
      color: '#96d459',
      fontSize: 18
  },
  });