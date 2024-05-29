import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';
import { Appbar, Menu, useTheme, TouchableRipple, Switch } from 'react-native-paper';

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
  const theme = useTheme();
  return (
    <Card style={{...styles.item, backgroundColor: theme?.colors.primary}}>
      {/* <Card.Content>
        <Title>{props.attraction.id}</Title>
      </Card.Content> */}
      {/* <Image
        style={{ width: 100, height: 50 }}
        source={{
          uri:
            "https://reactjs.org/logo-og.png"
        }}
      />
      <Card.Content>
        <Paragraph numberOfLines={2}>{props.attraction.title}</Paragraph>
      </Card.Content> */}
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
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    minWidth: 100,
    maxWidth: 'auto',
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  },
});

export default AttractionCard;
