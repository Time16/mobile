import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Deliveries from "./pages/Deliveries";
import Home from './pages/Home';
import DeliveryFlow from "./pages/DeliveryFlow";

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none">
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Deliveries" component={Deliveries} />
        <AppStack.Screen name="DeliveryFlow" component={DeliveryFlow} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
