import * as React from 'react';
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { Appbar, Menu, useTheme, TouchableRipple, Switch } from 'react-native-paper';

interface Attraction {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  interface Props {
    route?: RouteProp<{ params: { id: string } | undefined }, 'params'>;
    navigation?: NavigationProp<any, any>;
  }

const AttractionDetails: React.FC<Props> = ({ route, navigation }) => {

  const theme = useTheme();
  const [attraction, setAttraction] = React.useState<Attraction>();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + route?.params?.id)
      .then(res => res.json())
      .then(
        (result) => {
          setAttraction(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [route?.params?.id]);
  
  if (Boolean(attraction)) {
    return (
      <View style={styles.container}>
        <Card style={styles.Card}>
          <Card.Content>
            <Title>{attraction?.id}</Title>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://reactjs.org/logo-og.png' }} />
          <Card.Content>
            <Paragraph>{attraction?.title}</Paragraph>
          </Card.Content>
          <Button
            onPress={() => navigation?.navigate('MyModal')}>Open Modal</Button>
        </Card>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Title>Loading, please wait...</Title>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  Card: {
    padding: 10,
  },
});

export default AttractionDetails;
