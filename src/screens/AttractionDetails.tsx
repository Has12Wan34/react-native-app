import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
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
}

const AttractionDetails: React.FC<Props> = ({ route }) => {

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
        </Card>
      </View>
    );
  } else {
    return (
      <Title>Loading</Title>
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
