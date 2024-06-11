import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import AttractionDetails from './src/screens/AttractionDetails';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme, MD3DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import { createContext } from "react";
import { useState, useCallback, useMemo } from 'react';
import LoginScreen from './src/screens/Login';
import CustomNavigationBar from './src/components/Appbar';
import { PreferencesContext } from './src/service/PreferencesContext';
import { ModalScreen } from './src/components/ModalScreen';
import SecureScreen from './src/screens/SecureScreen';

interface AuthContextType {
  username: string;
}; 

enum Actiontype {
  RESTORETOKEN = 'RESTORE_TOKEN',
  SIGNIN = 'SIGN_IN',
  SIGNOUT = 'SIGN_OUT',
}

interface State {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
};

interface  Action {
  type: Actiontype;
  payload: State;
};

const initialState : State = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

function authReducer(state: State, action: Action) {
  switch (action.type) {
    case Actiontype.RESTORETOKEN:
      return {
        ...state,
        // userToken: action.token,
        // isLoading: false,
      };
    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | null>(null);


type RootStackNavigatorParamsList = {
  Home: undefined;
  Details: undefined;
  Signin: undefined;
  MyModal: undefined;
  Secure: undefined;
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

function App() {
  
  const [isThemeDark, setIsThemeDark] = useState(false);

  let theme = isThemeDark ? MD3DarkTheme : MD3LightTheme;

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
      <NavigationContainer>
          {/* prope name =>  RootStackNavigatorParamsList*/}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          {/* {state.userToken == null ? (
            <> */}
              <Stack.Screen name="Signin" component={LoginScreen} />
            {/* </>
          ) : (
            <> */}
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={AttractionDetails} />
              <Stack.Screen name="Secure" component={SecureScreen} />
            {/* </>
          )} */}
          <Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="MyModal" component={ModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </PreferencesContext.Provider>
  );
}

export default App;