import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';
import { signOut } from '../utils/signOut';
import { Auth } from 'aws-amplify';

const StarIcon = props => <Icon {...props} name="settings-outline" />;
const SignOutIcon = props => <Icon {...props} name="log-out-outline" />;

const Header = () => {
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
    <View style={styles.headerView}>
      <Button
        style={styles.settingSutton}
        appearance="ghost"
        accessoryLeft={StarIcon}
        />
      <View style={styles.emailView}>
          <Icon  
          style={styles.icon}
          fill='#00D100' 
          name="checkmark-circle-2-outline"
          />
          <Text> {user && user.attributes.email}</Text>
      </View>
     
      <Button 
        onPress={signOut}
        style={styles.signOutButton}
        appearance="ghost"
        accessoryLeft={SignOutIcon}
        >
        </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  emailView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 32,
    height: 32,
  },
  settingSutton: {
    width: 50,
    height: 50,
  },
  signOutButton: {
    width: 50,
    height: 50,
  },
});
