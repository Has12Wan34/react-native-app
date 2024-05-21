import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import AttractionDetails from './AttractionDetails';
import { NavigationContainer } from '@react-navigation/native';

type RootStackNavigatorParamsList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={AttractionDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;