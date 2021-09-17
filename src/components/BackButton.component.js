import React from 'react';
import {StyleSheet} from 'react-native';
import {Icon, Button} from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

const BackArrowIcon = (props) => (
    <Icon {...props} name='arrow-ios-back-outline'/>
  );


const BackButton = ({style, size}) => {
  const navigation = useNavigation();

  return (
    <Button
        style={[styles.button, style]}
        accessoryLeft={BackArrowIcon}
        appearance='ghost'
        size={size ? size : 'giant'}
        onPress={navigation.goBack}
        />
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
  }
});
