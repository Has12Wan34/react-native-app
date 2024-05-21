import React from 'react';
import { Button, View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import AttractionCard from './AttractionCard';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: { itemId: number };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

interface Attraction {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {

  const [attractions, setAttractions] = React.useState<Attraction | [] | any>([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result);
        },
        (error) => {
          console.log(error);
        }
      )
  }, [attractions]);

  return (
    <ScrollView>
      {attractions?.map((v:Attraction) => (
        <AttractionCard 
          navigation={navigation} 
          key={v.id} 
          attraction={v} 
        />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
