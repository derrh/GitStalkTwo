import React from 'react'
import {
  ScrollView,
  StyleSheet,
} from 'react-native'
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button,
  Text,
} from 'react-native-elements'

const brand = `🔎
GitStalk™
`

export default class SearchScreen extends React.Component {
  render () {
    return (
      <ScrollView contentContainerStyle={styles.screen} style={styles.scrollView}>
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
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  scrollView: {
    backgroundColor: 'white',
  },
})
