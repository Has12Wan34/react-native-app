import Block from '../components/Block';
import Button from '../components/Button';
import Text from '../components/Text';
import Input from '../components/Input';
import React from 'react';
import { ScrollView, Platform, StyleSheet } from 'react-native';
import * as Keychain from 'react-native-keychain';

const SecureScreen: React.FC = () => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlekeychain = async () => {
    // Store the credentials
    await Keychain.setGenericPassword(email, password);
    try {
      // Retrieve the credentials
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        console.log('Credentials successfully loaded for user ' + credentials.username);
      } else {
        console.log('No credentials stored');
      }
    } catch (error) {
      console.log("Keychain couldn't be accessed!", error);
    }
  };

  const handleResetkeychain = async () => {
    await Keychain.resetGenericPassword();
    const credentials = await Keychain.getGenericPassword();
    console.log(credentials)
  };

  return (
    <ScrollView>
      <Block style={styles.Block}>
        <Text>E-mail address</Text>
        <Input 
          placeholder="your@email.com" 
          onChangeText={text => setEmail(text)}/>

        <Text>Password</Text>
        <Input 
          secureTextEntry 
          placeholder="Your password" 
          onChangeText={text => setPassword(text)}/>
        {email && password &&        
          <Block style={{ flexDirection: 'row' }}>
            <Button style={styles.button} onPress={handlekeychain}>
              <Text style={styles.text}>Save</Text>
            </Button>
            <Button style={styles.button} onPress={handleResetkeychain}>
              <Text style={styles.text}>Reset</Text>
            </Button>
          </Block>
        }
      </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Block: {
    flex: 1,
    padding: 12, 
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100%',
    borderWidth: 1.5,
    borderColor: "black"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default SecureScreen;
