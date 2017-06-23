import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Autocomplete from './Screens/Autocomplete';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Autocomplete />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
    //borderWidth: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

Expo.registerRootComponent(App);
