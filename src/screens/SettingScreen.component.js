import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Text, Layout, Button, Icon} from '@ui-kitten/components';
import { signOut } from '../utils/signOut';
import {ThemeContext} from '../../theme-context';
import BackButton from '../components/BackButton.component'

const SignOutIcon = props => <Icon {...props} name="log-out-outline" />;

const SunIcon = props => <Icon {...props} name="sun-outline" />;
const MoonIcon = props => <Icon {...props} name="moon-outline" />;


const SettingScreen = ({navigator, route}) => {
  const themeContext = React.useContext(ThemeContext);

  const user = route.params.user;
  return (
    <Layout style={styles.layout} level="2">

            <View style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}>
              <BackButton style={{
                width: 10
              }}/>
              <Text
                category="h1">
                Settings Page
              </Text>
            </View>
            <View style={{ 
              marginHorizontal: 20,
              justifyContent: 'space-around'
              }}>
              
              <View style={styles.emailView}>
            
                <Text category="s1"> {user && user.attributes.email} </Text>
                  <Icon  
                    style={styles.icon}
                    fill='#00D100' 
                    name="checkmark-circle-2-outline"
                  />
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
            </View>
         
    </Layout>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    paddingTop: 70,
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
