/**
 * DopeSpendTracker App
 *
 */

import React, { Component } from 'react';
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

// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './js/reducers'

const store = createStore(reducers);

class App extends Component {

  onSuccess = (metadata) => {
    public_token = metadata.public_token
    console.log("public_token: ", public_token)
  }

  render() {
    return (
      <Provider store={ store }>
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
      </Provider>
    );
  }
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
