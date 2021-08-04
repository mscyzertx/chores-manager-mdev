import React from 'react';
import { Searchbar } from 'react-native-paper';
import { 
    View, 
    Text, 
    Platform,
    StyleSheet, 
    TouchableHighlight,
    Button,
    SafeAreaView,
    Image,
    TouchableOpacity,
    
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
  
            <View style ={[styles.boxStyle1, styles.box1]}>
                <View style ={styles.box1_1}>
                  <TouchableOpacity>
                  <Image style={styles.images}  resizeMode='contain' source={require('../assets/Home-Electrician.png')} />
                  </TouchableOpacity>
                </View>
                <View style ={styles.box1_1}>
                  <TouchableOpacity onPress={() => navigation.navigate('CleaningScreen')}>
                  <Image style={styles.images} resizeMode='contain' source={require('../assets/Home-Cleaning.png')} />
                  </TouchableOpacity>
                
                </View>
                <View style ={styles.box1_1}>
                  <TouchableOpacity>
                  <Image style={styles.images} resizeMode='contain' source={require('../assets/Home-Garden.png')} />
                  </TouchableOpacity>
                
                </View>
            </View>
            <View style ={[styles.boxStyle1, styles.box1]}>
            <View style ={styles.box1_1}>
                  <TouchableOpacity>
                  <Image style={styles.images}  resizeMode='contain' source={require('../assets/Home-HouseFix.png')} />
                  </TouchableOpacity>
                
                </View>
                <View style ={styles.box1_1}>
                  <TouchableOpacity>
                  <Image style={styles.images} resizeMode='contain'  source={require('../assets/Home-Salon.png')} />
                  </TouchableOpacity>
                
                </View>
                <View style ={styles.box1_1}>
                  <TouchableOpacity>
                  <Image style={styles.images} resizeMode='contain'  source={require('../assets/Home-Others.png')} />
                  </TouchableOpacity>
                
                </View>
            </View>
            <View style ={styles.box2}>
            <View style ={styles.box2_1}>
              <Text>Current Points:500</Text>
            </View>
            </View>
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

boxStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
},

box1:{
    marginTop:50

},

box1_1:{
    height: 'auto',
    width: 'auto',
    marginTop:5,
    backgroundColor: "#d0f4be",
    padding:10
},

images:{
  height:70,
  width:70,
  
},

box2:{
 justifyContent: 'flex-end'
},


box2_1:{
  height: 'auto',
  marginTop:150,
  alignItems:'center',
  backgroundColor: "#fff",

},



  });

