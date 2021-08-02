import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Icon, Input, Text} from '@ui-kitten/components';

const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;

export const SearchBar = () => {
  const [value, setValue] = React.useState('');

  const renderIcon = props => <Icon {...props} name="search-outline" />;

  return (
    <Input
      value={value}
      placeholder="Artistes, titres ou podcasts"
      accessoryLeft={renderIcon}
      onChangeText={nextValue => setValue(nextValue)}
    />
  );
};

const styles = StyleSheet.create({});
