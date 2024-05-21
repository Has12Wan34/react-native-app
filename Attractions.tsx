import * as React from 'react';
import { ScrollView } from 'react-native';
import AttractionCard from './AttractionCard';
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

const Attractions: React.FC<AttractionCardProps> = (props) => {

  const [attractions, setAttractions] = React.useState<any>();

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(
        (result) => {
          setAttractions(result);
        },
        (error) => {
          console.log(error);
        }
      )
  })
  
  return (
    <ScrollView>
      {attractions?.map((v:Attraction) => (
        <AttractionCard 
          navigation={props.navigation} 
          key={v.id} 
          attraction={v} 
        />
      ))}
    </ScrollView>
  );
}

export default Attractions;