import * as React from 'react';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

interface Attraction {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;
  }


interface AttractionCardProps {
  attraction: Attraction;
  navigation: NavigationProp<any, any>;
}

const AttractionCard: React.FC<AttractionCardProps> = (props) => {
  return (
    <Card>
      <Card.Content>
        <Title>{props.attraction.id}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.attraction.url }} />
      <Card.Content>
        <Paragraph numberOfLines={2}>{props.attraction.title}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button 
          onPress={() => props.navigation.navigate('Details', {
            id: props.attraction.id
          })}
        >
          See More
        </Button>
      </Card.Actions>
    </Card>
  );
}

export default AttractionCard;
