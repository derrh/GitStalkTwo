import React, {Component} from 'react';
import {Platform, StyleSheet, ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text
} from 'react-native-elements'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const brand = `🔎
GitStalk™
`

type Props = {};
class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          h1
          style={{ textAlign: 'center', paddingVertical: 40 }}
        >{brand}</Text>
        <FormLabel>GitHub Login</FormLabel>
        <FormInput
          onChangeText={text => console.log}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Button containerViewStyle={{ marginTop: 20 }} title={'Go'} backgroundColor={'#4466AA'} rounded={true}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default createStackNavigator(
  {
    App
  }
)