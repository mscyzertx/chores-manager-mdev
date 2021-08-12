import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const Skip = ({ ...props }) => (
  <Button
    title='Skip'
    color='#96d459'
    {...props}
  />
);
const Next = ({ ...props }) => (
  <Button
    title='Next'
    color='#96d459'
    {...props}
  />
);
const Done = ({ ...props }) => (
  <Button
    title='Done'
    color='#96d459'
    {...props}
  />
);
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      bottomBarColor='#96d459'
      onSkip={() => navigation.navigate('SignInScreen')}
      onDone={() => navigation.navigate('SignInScreen')}
      pages={[
        {
          backgroundColor: '#fff',
          title: 'Choose the services',
          subtitle: '',
          image: (<SafeAreaView>
            <View style={styles.headerTop}>
              <Text>SIMPLE</Text>
              <Text>SIMPLE</Text>
            </View>
            <View>
              <Image resizeMode="contain" style={{ width: 200, height: 200 }} source={require('../assets/Onboarding-1.png')} />
            </View>
          </SafeAreaView>),
        },
        {
          backgroundColor: '#fff',
          title: 'Confirm your location and time',
          image: <Image resizeMode="contain" style={{ width: 200, height: 200 }} source={require('../assets/Onboarding-2.png')} />,
          subtitle: '',
        },
        {
          backgroundColor: '#fff',
          title: 'Relax! Our professionals will take care of your problems',
          image: <Image resizeMode="contain" style={{ width: 200, height: 200 }} source={require('../assets/Onboarding-3.png')} />,
          subtitle: '',
        },

      ]}
    />
  )
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  image: {
    width: 10,
    height: 10
  },
  headerTop: {
    alignItems: 'center',
  }
})