import { Text, StyleSheet, View } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';

interface AttractionCardProps {
    navigation: NavigationProp<any, any>;
}

export const ModalScreen: React.FC<AttractionCardProps> = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={() => navigation.goBack()}>Dismiss</Button>
      </View>
    );
  }