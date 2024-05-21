import React from 'react';
import { RouteProp } from '@react-navigation/native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

type Props = {
  route: RouteProp<{ params: { id: string } }, 'params'>;
};

interface Attraction {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const AttractionDetails: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [attraction, setAttraction] = React.useState<Attraction | null>(null);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + id)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          setAttraction(result.attraction);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [id]);
  
  if (attraction) {
    return (
      <Card>
        <Card.Content>
          <Title>{attraction.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: attraction.thumbnailUrl }} />
        <Card.Content>
          <Paragraph>{attraction.title}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>
            View on Map
          </Button>
        </Card.Actions>
      </Card>
    );
  } else {
    return (
      <Title>Loading</Title>
    )
  }
}

export default AttractionDetails;
