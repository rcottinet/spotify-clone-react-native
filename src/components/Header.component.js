import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';
import { Auth } from 'aws-amplify';

const StarIcon = props => <Icon {...props} name="settings-outline" />;

const Header = props => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    async function fetchData() {
      const user = await Auth.currentUserInfo();
      if(user){
        setUser(user)
      }
    }
    fetchData();
  }, []);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.textWelcoming}>
        <Text style={styles.textWelcoming} category="h3" appearance='hint'>Hello</Text>
        <Text category="h1" > {user && user.username}</Text>
        <Text style={styles.textWelcoming} category="h1" appearance='hint'>!</Text>
        </View>
        
        
        <Button
            style={styles.settingButton}
            appearance="ghost"
            accessoryLeft={StarIcon}
            animation='pulse'
            size='giant'
            onPress={() => props.navigation.navigate('SettingScreen', { user: user ? user : null })}
          />
      </View>
      
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginBottom: 10
  },
  textWelcoming : {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  settingButton:{
  }
});
