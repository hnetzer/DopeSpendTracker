/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import PlaidLink from 'react-native-plaid-link-sdk';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          <PlaidLink
            title='Link Financial Accounts'
            publicKey='38164201fbd7637a405a30149427cf'
            clientName='Dope Spend Tracker'
            env='sandbox'
            onSuccess={e => console.log('success: ', e)}
            onExit={e => console.log('exit: ', e)}
            product={['transactions']}
            language='en'
            countryCodes={['US']}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  button: {
   alignItems: 'center',
   backgroundColor: '#DDDDDD',
   padding: 10,
   marginTop: 200,
 },
});

export default App;
