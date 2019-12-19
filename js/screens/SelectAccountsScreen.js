/**
 * DopeSpendTracker App
 *
 */
'use strict';

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import styled from 'styled-components';
import {base, colors, text} from '../style';

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

  const Title = styled.Text`
    color: ${colors.foreground};
    font-weight: ${text.black};
    font-size: ${text.huge}px;
    padding-bottom: ${base.padding}px;
  `;

  return (
    <View style={styles.container}>
      <Title>
        {console.log(props.accounts)}
        Select Account{props.accounts.length > 1 ? 's' : null}
      </Title>
      <FlatList
        data={props.accounts}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <AccountListItem
            account={item}
            onSelect={addAccount}
            onUnselect={removeAccount}
          />
        )}
        keyExtractor={account => account.account_id}
      />
      <View
        style={{
          position: 'absolute',
          bottom: base.padding,
          right: base.padding,
        }}>
        <Button
          title="Next"
          disabled={accountIds.length < 1}
          onPress={onPressNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: base.padding,
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
