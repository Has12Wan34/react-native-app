import * as React from 'react';
import { Linking } from "react-native";
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';

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
      <Card>
        <Card.Content>
          <Title>{attraction?.id}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: attraction?.url }} />
        <Card.Content>
          <Paragraph>{attraction?.title}</Paragraph>
        </Card.Content>
      </Card>
    );
  } else {
    return (
      <Title>Loading</Title>
    )
  }
}

export default AttractionDetails;
