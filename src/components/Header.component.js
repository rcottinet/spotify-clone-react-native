import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Icon, Button} from '@ui-kitten/components';

const StarIcon = props => <Icon {...props} name="settings-outline" />;

const Header = () => {
  return (
    <View>
      <Button
        style={styles.button}
        appearance="ghost"
        accessoryLeft={StarIcon}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
  },
});
