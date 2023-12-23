/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './components/Home'
import {Provider} from 'react-redux';
import {store} from './store/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

function App(){

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.customFont}>Settings!</Text>
      </View>
    );
  }

  console.log({store})

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.bottomTabIcon}
                source={require('./assets/tab_icons/tab1.png')
                } />
            )
          }} />
          <Tab.Screen name="Surfing" component={SettingsScreen} options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.bottomTabIcon}
                source={require('./assets/tab_icons/tab2.png')
                } />
            )
          }} />
          <Tab.Screen name="Hula" component={SettingsScreen} options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.bottomTabIcon}
                source={require('./assets/tab_icons/tab3.png')
                } />
            )
          }} />
          <Tab.Screen name="Vulcano" component={SettingsScreen} options={{
            tabBarIcon: ({ color }) => (
              <Image
                style={styles.bottomTabIcon}
                source={require('./assets/tab_icons/tab4.png')
                } />
            )
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {

    height: 20,
    objectFit: 'contain'
  },
  customFont: {
    fontFamily: 'IBMPlexMono-Bold',
    fontSize: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
