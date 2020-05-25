import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {ShowCardsScreen} from "../screens/show-cards";
import {RoutesName} from "../routes/routes-name";
import {Colors} from "../theme/colors";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "../redux/store";

const Stack = createStackNavigator<RoutesName>();

export class Layout extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerTitleAlign: "center",
                headerStyle: {
                  backgroundColor: Colors.headerColor,
                  elevation: 0,
                  shadowOpacity: 0,
                  borderBottomWidth: 0.5,
                },
                headerTitleStyle: {
                  fontWeight: "600",
                  color: Colors.black,
                  fontSize: 20,
                  lineHeight: 50,
                  textTransform: "none",
                },
              }}
            >
              <Stack.Screen
                options={{
                  headerTitle: "Yu-Gi-Oh!",
                }}
                name="ShowCardsScreen"
                component={ShowCardsScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

// import React from "react";
// import {createStackNavigator, StackNavigationProp} from "@react-navigation/stack";
// import {NavigationContainer, useRoute, RouteProp} from "@react-navigation/native";
// import {Button, Text, View} from "react-native";
//
// type RouteNames = {
//   Home: {type1: string; type2: string};
//   Details: {type3: string; type4: string};
// };
//
// const Stack = createStackNavigator<RouteNames>();
//
// type HomeScreenNavigationProp = StackNavigationProp<RouteNames, "Home">;
// type HomeScreenRouteProp = RouteProp<RouteNames, "Home">;
//
// type Props1 = {
//   navigation: HomeScreenNavigationProp;
//   route: HomeScreenRouteProp;
// };
//
// class Home extends React.Component<Props1> {
//   render() {
//     const {type1} = this.props.route.params;
//
//     return (
//       <View>
//         <Button title={type1} onPress={() => this.props.navigation.navigate("Details")} />
//       </View>
//     );
//   }
// }
//
// const Details: React.FC = () => {
//   const {params} = useRoute<RouteProp<RouteNames, "Details">>();
//
//   return (
//     <View>
//       <Text>{params.type3}</Text>
//     </View>
//   );
// };
//
// export const Layout: React.FC = () => (
//   <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="Details" component={Details} />
//     </Stack.Navigator>
//   </NavigationContainer>
// );
