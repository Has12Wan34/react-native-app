import * as React from 'react';
import { StyleSheet, Image, Pressable, Text } from 'react-native';
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
      <Card.Content>
        <Title>{props.attraction.id}</Title>
      </Card.Content>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri:
            "https://reactjs.org/logo-og.png"
        }}
      />
      <Card.Content>
        <Paragraph numberOfLines={2} style={styles.text}>{props.attraction.title}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Pressable 
          style={styles.button} 
          onPress={() => props.navigation.navigate('Details', {
            id: props.attraction.id
          })}>
          <Text style={styles.button_text}>See More</Text>
        </Pressable>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(249, 180, 45, 0.25)",
    borderWidth: 1.5,
    borderColor: "#fff"
  },
  text: {
    fontSize: 20,
    color: 'blue',
    textAlign: 'center',
    fontFamily: 'Arial',
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
  button_text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default AttractionCard;
