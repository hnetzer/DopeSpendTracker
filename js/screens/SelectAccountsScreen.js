/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {AccountListItem, Button} from 'js/components';

import {getAccessToken} from 'js/actions';

const SelectAccountsScreen = props => {
  const [accountIds, setAccountIds] = useState([]);

  const addAccount = account => {
    setAccountIds([...accountIds, account.account_id]);
  };

  const removeAccount = account => {
    const index = accountIds.indexOf(account.account_id);
    if (index > -1) {
      const ids = accountIds.slice();
      ids.splice(index, 1);
      setAccountIds(ids);
    }
  };

  const onPressNext = () => {
    props.navigation.navigate('Annotation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Accounts</Text>
      <FlatList
        style={{width: '100%', height: '80%'}}
        data={props.accounts}
        renderItem={({item, index}) => (
          <AccountListItem
            account={item}
            onSelect={addAccount}
            onUnselect={removeAccount}
          />
        )}
        keyExtractor={account => account.account_id}
      />
      <Button
        title="Next"
        disabled={accountIds.length < 1}
        onPress={onPressNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    paddingBottom: 64,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 24,
    paddingBottom: 16,
  },
});

function mapStateToProps(state) {
  return {
    institutions: state.plaid.institutions,
    accounts: state.plaid.accounts,
    transactions: state.plaid.transactions,
  };
}

export default connect(mapStateToProps)(SelectAccountsScreen);
