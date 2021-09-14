import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Icon, Button } from '@ui-kitten/components';
import { signOut } from '../utils/signOut';
import { Auth } from 'aws-amplify';
import {ThemeContext} from '../../theme-context';

const StarIcon = props => <Icon {...props} name="settings-outline" />;
const SignOutIcon = props => <Icon {...props} name="log-out-outline" />;

const Header = () => {
  const themeContext = React.useContext(ThemeContext);

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
      <View style={styles.textWelcoming}>
        <Text style={styles.textWelcoming} category="h3" appearance='hint'>Hello</Text>
        <Text category="h1" > {user && user.username}</Text>
        <Text style={styles.textWelcoming} category="h1" appearance='hint'>!</Text>
        
      </View>
      <View style={styles.headerView}>
       
        <View style={styles.emailView}>
           
            <Text category="s1"> {user && user.attributes.email} </Text>
            <Icon  
            style={styles.icon}
            fill='#00D100' 
            name="checkmark-circle-2-outline"
            />
        </View>
       
        <Button
          style={styles.settingSutton}
          appearance="ghost"
          accessoryLeft={StarIcon}
          />
        <Button 
          onPress={signOut}
          style={styles.signOutButton}
          appearance="ghost"
          accessoryLeft={SignOutIcon}
          >
          </Button>
      </View>
      <Button
            style={{margin: 20, width: 100}}
            onPress={themeContext.toggleTheme}>
            switch theme
      </Button>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textWelcoming : {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 10,
    marginLeft: 8,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
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
