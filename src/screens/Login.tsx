// import React from 'react'
import Block from '../components/Block';
import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
  Signin: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signin'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface UserFormState {
  email: string;
  password: string;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmite = async () => {
    // try {
    //   const response = await fetch("http://localhost:5000/api/user/login", {
    //       method: "POST", 
    //       headers: {
    //           "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ user: email, password }),
    //       }) as any;
    //       const res = await response.json();

    //       if (response.status === 200 || response.status === 201) {
    //         navigation.navigate('Home');
    //       } 

    // } catch (e) {
    //     console.error('Error during API login:', e);
    // }
    if(email && password){
      console.log('1')
      navigation.navigate('Home');
    }else{
      return null;
    }
  };

  return (
    <ScrollView>
    <Block>
      <Text>Login screen</Text>
      <Text>E-mail address</Text>
      <Input 
        placeholder="your@email.com" 
        onChangeText={text => setEmail(text)}/>
      <Text>Password</Text>
      <Input 
        secureTextEntry 
        placeholder="Your password" 
        onChangeText={text => setPassword(text)}/>
      <Button onPress={handleSubmite}>
        <Text>Log in</Text>
      </Button>
    </Block>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: "auto",
    width: 400,
    flexDirection: "row",
    flexWrap: "wrap"
  },
});

export default LoginScreen;
