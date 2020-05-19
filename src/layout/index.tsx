import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {ShowCardsScreen} from "../screens/show-cards";
import {RoutesName} from "../routes/routes-name";
import {Colors} from "../theme/colors";

const Stack = createStackNavigator<RoutesName>();

export class Layout extends React.PureComponent {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.headerColor,
            },
          }}
        >
          <Stack.Screen name="ShowCardsScreen" component={ShowCardsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

// import React from "react";
// import {createStackNavigator} from "@react-navigation/stack";
// import {NavigationContainer, useRoute, RouteProp} from "@react-navigation/native";
// import {Text, View} from "react-native";
//
// type RouteNames = {
//   Home: {type1: string; type2: string};
//   Details: {type3: string; type4: string};
// };
//
// const Stack = createStackNavigator<RouteNames>();
//
// const Home: React.FC = () => {
//   const {params} = useRoute<RouteProp<RouteNames, "Home">>();
//
//   return (
//     <View>
//       <Text>{params.type1}</Text>
//     </View>
//   );
// };
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
