import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Text, Layout, Button, Icon} from '@ui-kitten/components';
import { signOut } from '../utils/signOut';
import {ThemeContext} from '../../theme-context';

const SignOutIcon = props => <Icon {...props} name="log-out-outline" />;

const SunIcon = props => <Icon {...props} name="sun-outline" />;
const MoonIcon = props => <Icon {...props} name="moon-outline" />;


const SettingScreen = ({navigator, route}) => {
  const themeContext = React.useContext(ThemeContext);

  const user = route.params.user;
  return (
    <Layout style={styles.layout} level="2">
           <View style={{marginTop: 100, marginLeft: 20}}>
              <Text
                category="h1">
                Settings Page
              </Text>
              
              <View style={styles.emailView}>
            
                <Text category="s1"> {user && user.attributes.email} </Text>
                  <Icon  
                    style={styles.icon}
                    fill='#00D100' 
                    name="checkmark-circle-2-outline"
                  />
              </View>
            </View>
            <Button
              style={styles.button}
              onPress={themeContext.toggleTheme}
              accessoryRight={themeContext.theme === 'light' ? MoonIcon : SunIcon}>
              switch theme
            </Button>
            <Button 
              onPress={signOut}
              style={styles.button}
              accessoryRight={SignOutIcon}
              >
                Sign out
            </Button>
         
    </Layout>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },headerView: {
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
  button:{
    margin: 2
  },
  signOutButton: {
  },
  themeToggleButton:{
  }
});
