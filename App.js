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

  this.onSuccess = (metadata) => {
    public_token = metadata.public_token
    console.log("public_token: ", public_token)

    // Send the public_token to an internal server
    // and exchange it for an access_token.
    // fetch("/get_access_token", {
    //  method: "POST",
    //  body: {
    //    public_token: public_token,
    //    accounts: metadata.accounts,
    //    institution: metadata.institution,
    //    link_session_id: metadata.link_session_id,
    //  },
    // });
  }

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
            onSuccess={this.onSuccess}
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
